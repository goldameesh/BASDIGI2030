import Image, { ImageProps } from 'next/image';

interface Props extends Omit<ImageProps, 'alt'> {
  alt: string;
  className?: string;
  overlayOpacity?: number;
}

export default function ImageWithOverlay({ 
  src, 
  alt, 
  className = "", 
  overlayOpacity = 0.72,
  priority = false,
  ...rest
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        priority={priority}
        className="object-cover"
        {...rest}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(11,27,77, ${overlayOpacity}) 0%, rgba(9,21,64, ${overlayOpacity * 0.85}) 100%)`
        }}
      />
    </div>
  );
}
