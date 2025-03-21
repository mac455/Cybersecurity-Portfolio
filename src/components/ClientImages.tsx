'use client';

import React from 'react';
import Image from 'next/image';

interface ClientImageProps {
  src: any;
  alt: string;
  width: number;
  height: number;
  className?: string;
  unoptimized?: boolean;
}

export function ClientImage({ src, alt, width, height, className, unoptimized }: ClientImageProps) {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className} 
      unoptimized={unoptimized}
    />
  );
} 