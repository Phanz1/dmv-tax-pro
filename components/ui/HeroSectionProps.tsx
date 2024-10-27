import React from 'react';

interface HeroSectionProps {
  backgroundImageUrl: string;
  headerText: string;
  descriptionText: string;
  additionalText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  backgroundImageUrl, 
  headerText, 
  descriptionText, 
  additionalText 
}) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center" style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{headerText}</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-4">{descriptionText}</p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">{additionalText}</p>
      </div>
    </div>
  );
};

export default HeroSection;