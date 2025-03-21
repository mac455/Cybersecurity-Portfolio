'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface ImageItem {
  title: string;
  src: StaticImageData;
  alt: string;
}

interface ImageSliderProps {
  items: ImageItem[];
  href: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ items, href }) => {
  // Just display the first image with a link
  const firstItem = items[0];
  
  return (
    <Link href={href}>
      <div className="cursor-pointer transform transition-transform duration-500 hover:scale-105">
        <Image
          src={firstItem.src}
          alt={firstItem.alt}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <p className="text-center mt-2">{firstItem.title}</p>
      </div>
    </Link>
  );
};

export default ImageSlider; 