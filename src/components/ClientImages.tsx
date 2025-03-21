'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ClientImageProps {
  src: string | StaticImageData;
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