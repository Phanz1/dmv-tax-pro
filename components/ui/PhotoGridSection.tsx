import React from 'react';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  header: string;
  description: string;
}

const photos: Photo[] = [
  {
    src: '/Images/pt1.jpeg',
    alt: 'Photo 1',
    header: 'Tax Preparation & Filing:',
    description: 'Personal, business, and corporate tax filing with maximized deductions.'
  },
  {
    src: '/Images/pt2.jpeg',
    alt: 'Photo 2',
    header: 'Bookkeeping & Payroll:',
    description: 'Efficient, accurate financial tracking for your business.'
  },
  {
    src: '/Images/pt4.jpeg',
    alt: 'Photo 3',
    header: 'IRS Problem Solving & Representation:',
    description: 'We handle your tax issues directly with the IRS so you can focus on running your business.'
  },
  {
    src: '/Images/pt7.jpeg',
    alt: 'Photo 4',
    header: 'Business Advisory Services:',
    description: 'Grow your business with strategic insights and expert financial advice.'
  }
];

interface PhotoGridSectionProps {
  title?: string;
}

const PhotoGridSection: React.FC<PhotoGridSectionProps> = ({ title = "" }) => {
  return (
    <section className="py-12 bg-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="relative w-full h-48"> {/* Adding key prop here */}
              <Image
                src={photo.src}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                priority // optionally, for optimized loading
              />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{photo.header}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGridSection;
