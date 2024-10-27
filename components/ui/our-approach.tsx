"use client";

import React from "react";
import Image from "next/image";

interface Section {
  title: string;
  description: string;
  imageUrl: string;
}

interface RepeatedSectionProps {
  sections: Section[];
  headerText: string;
}

const RepeatedSection: React.FC<RepeatedSectionProps> = ({ sections, headerText }) => {
  return (
    <div className="bg-green-500 py-12">
      {/* Header Text */}
      <div className="text-center mb-10">
        <h1 className="text-black text-4xl font-bold">{headerText}</h1>
      </div>

      {sections.map((section, index) => (
        <div
          key={section.title} // Using title as key instead of index for better React reconciliation
          className={`flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}
        >
          <div className="md:w-1/2 text-left md:pr-8">
            <h2 className="text-black text-3xl font-bold mb-4">{section.title}</h2>
            <p className="text-black text-lg">{section.description}</p>
          </div>
          <div className="md:w-[40%] mt-4 md:mt-0 relative aspect-video"> {/* Added relative positioning and aspect ratio */}
            <Image
              src={section.imageUrl}
              alt={section.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              priority={index === 0} // Priority loading for first image
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Example usage component
const OurApproach: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Client-Focused:",
      description: "We listen to your needs and tailor our services to ensure the best outcomes for your financial situation..",
      imageUrl: "/images/gt2.jpeg", // Make sure these images exist in your public folder
    },
    {
      title: "Proactive Solutions: ",
      description: "Beyond tax filing, we offer strategic advice to reduce liabilities and help your business grow.",
      imageUrl: "/images/gt5.jpeg",
    },
    {
      title: "Ethical & Transparent: ",
      description: "No hidden fees, just honest pricing and ethical practices.",
      imageUrl: "/images/x1.jpeg",
    },
  ];

  return <RepeatedSection sections={sections} headerText="Our Approach" />;
};

export default OurApproach;