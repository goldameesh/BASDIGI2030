'use client';
import Link from 'next/link';
import { useMagneticButton } from '@/hooks/useMagneticButton';

export function MagneticLink({ href, className, children, ...props }: { href: string; className: string; children: React.ReactNode; [key: string]: unknown }) {
  const ref = useMagneticButton<HTMLAnchorElement>(80);
  return (
    <Link ref={ref} href={href} className={className} {...(props as Record<string, unknown>)}>
      {children}
    </Link>
  );
}

export function MagneticButton({ className, children, ...props }: { className: string; children: React.ReactNode; [key: string]: unknown }) {
  const ref = useMagneticButton<HTMLButtonElement>(80);
  return (
    <button ref={ref} className={className} {...(props as Record<string, unknown>)}>
      {children}
    </button>
  );
}
