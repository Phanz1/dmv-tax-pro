import React from 'react';
import Image from 'next/image';

interface Section {
  title: string;
  description: string;
  imageUrl: string;
}

interface RepeatedSectionProps {
  headerText: string;
  sections: Section[];
}

const RepeatedSection: React.FC<RepeatedSectionProps> = ({ headerText, sections }) => {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {headerText}
          </h2>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="flex-shrink-0">
              <Image
  className="h-48 w-full object-cover"
  src={section.imageUrl}
  alt={section.title}
  width={500}  // replace with appropriate width
  height={200} // replace with appropriate height
  layout="responsive"
/>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white dark:bg-gray-800 p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepeatedSection;