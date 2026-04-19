'use client';
import { motion } from 'framer-motion';

interface RadarData {
  dimension: string;
  score: number; // 0 to 1
}

export default function DiagnosticRadar({ data }: { data: RadarData[] }) {
  const size = 300;
  const padding = 60;
  const center = size / 2;
  const radius = (size / 2) - padding;
  
  const angleStep = (Math.PI * 2) / data.length;

  const getPoint = (score: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = radius * score;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  const points = data.map((d, i) => getPoint(d.score, i));
  const polygonPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Background Circles */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((r, i) => (
          <circle 
            key={i}
            cx={center} cy={center} r={radius * r}
            fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="1"
          />
        ))}

        {/* Axes */}
        {data.map((d, i) => {
          const p = getPoint(1, i);
          const labelP = getPoint(1.25, i);
          return (
            <g key={i}>
              <line 
                x1={center} y1={center} x2={p.x} y2={p.y}
                stroke="rgba(201,168,76,0.2)" strokeWidth="1"
              />
              <text 
                x={labelP.x} y={labelP.y}
                fill={i === 0 ? "#C9A84C" : "#94A3B8"}
                fontSize="10"
                fontFamily="Inter, sans-serif"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
                className="uppercase tracking-widest"
              >
                {d.dimension}
              </text>
            </g>
          );
        })}

        {/* The Data Shape */}
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d={polygonPath}
          fill="rgba(201,168,76,0.15)"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Highlight Points */}
        {points.map((p, i) => (
          <motion.circle 
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            cx={p.x} cy={p.y} r="3" fill="#C9A84C"
            className="shadow-[0_0_10px_rgba(201,168,76,0.8)]"
          />
        ))}
      </svg>
    </div>
  );
}
