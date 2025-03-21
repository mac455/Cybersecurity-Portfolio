import { StaticImageData } from 'next/image';

// Create placeholder data for Melbourne housing
export interface ImageItem {
  title: string;
  src: StaticImageData;
  alt: string;
}

// Since we don't have actual image imports, we'll create a placeholder that will
// be used safely in components
export const melb_data: ImageItem[] = [
  {
    title: "Distance and no. of room vs Housing Price",
    src: { src: '/placeholder.jpg', height: 400, width: 600 } as StaticImageData,
    alt: "Scatter plot",
  },
  {
    title: "Property type vs Housing Price",
    src: { src: '/placeholder.jpg', height: 400, width: 600 } as StaticImageData,
    alt: "Boxplot",
  },
  {
    title: "Distribution of house prices across melbourne",
    src: { src: '/placeholder.jpg', height: 400, width: 600 } as StaticImageData,
    alt: "Histogram",
  },
]; 