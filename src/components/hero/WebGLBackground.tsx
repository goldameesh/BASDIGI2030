'use client';
import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const snoiseGLSL = `
// Simplex 3D Noise 
// by Ian McEwan, Ashima Arts
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 1.0/7.0;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}
`;

const FlowingSurface = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uAmplitude: { value: 0.35 },
    uFrequency: { value: 0.8 },
    uColorLow: { value: new THREE.Color("#091540") },
    uColorMid: { value: new THREE.Color("#0B1B4D") },
    uColorHigh: { value: new THREE.Color("#2A2C2A") }, // Near-gold shimmer approximation in shader
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI * 0.35, 0, 0]} position={[0, -1, -2]}>
      <planeGeometry args={[20, 20, 80, 80]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          ${snoiseGLSL}
          uniform float uTime;
          uniform float uAmplitude;
          uniform float uFrequency;
          varying float vElevation;

          void main() {
            vec3 pos = position;
            float noise = snoise(vec3(pos.xy * uFrequency, uTime * 0.3));
            pos.z += noise * uAmplitude;
            vElevation = noise;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uColorLow;
          uniform vec3 uColorMid;
          uniform vec3 uColorHigh;
          varying float vElevation;

          void main() {
            vec3 color = mix(uColorLow, uColorMid, smoothstep(-1.0, 0.0, vElevation));
            color = mix(color, uColorHigh, smoothstep(0.0, 1.0, vElevation));
            
            // Artificial gold highlight on absolute peaks
            float goldIntensity = smoothstep(0.6, 1.0, vElevation);
            vec3 trueGold = vec3(0.788, 0.658, 0.298); // #C9A84C
            color = mix(color, trueGold, goldIntensity * 0.4);

            gl_FragColor = vec4(color, 1.0);
          }
        `}
        wireframe={false}
      />
    </mesh>
  );
};

const GoldParticles = ({ mousePos }: { mousePos: { x: number, y: number } }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Calculate particle count based on time of day - Reduced for better performance
  const particleCount = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour <= 8) return 20; // Dawn
    if (hour >= 9 && hour <= 17) return 30; // Day
    if (hour >= 18 && hour <= 22) return 40; // Evening
    return 15; // Night
  }, []);

  const [positions, phases] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const ph = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      // Spread across visible area
      pos[i * 3] = (Math.random() - 0.5) * 15; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5 - 2; // z
      ph[i] = Math.random() * Math.PI * 2;
    }
    return [pos, ph];
  }, [particleCount]);

  useFrame((state) => {
    if (pointsRef.current) {
      const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Subtle sine wave floating
        positionsArray[i * 3 + 1] += Math.sin(state.clock.elapsedTime + phases[i]) * 0.002;
        // Parallax reaction
        positionsArray[i * 3] += (mousePos.x * 2 - positionsArray[i * 3]) * 0.01;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={positions.length / 3} 
          array={positions} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        color="#C9A84C" 
        transparent 
        opacity={0.4} 
        sizeAttenuation 
      />
    </points>
  );
};

export default function WebGLBackground({ mousePos }: { mousePos: { x: number, y: number } }) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Performance guard
    if (window.matchMedia('(max-width:768px)').matches) {
      setShouldRender(false);
    }
    
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setShouldRender(false);
    }
  }, []);

  if (!shouldRender) {
    return (
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0B1B4D] to-[#091540]">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 20L20 0H10L0 10V20Z\\' fill=\\'rgba(201,168,76,0.5)\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 bg-[#091540]">
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-[#0B1B4D] to-[#091540]" />}>
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <fogExp2 attach="fog" color="#091540" density={0.08} />
          <ambientLight intensity={0.3} />
          <pointLight position={[2, 3, 4]} intensity={0.8} color="#C9A84C" />
          
          <FlowingSurface />
          <GoldParticles mousePos={mousePos} />
        </Canvas>
      </Suspense>
    </div>
  );
}
