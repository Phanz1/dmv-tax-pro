interface Section {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  interface RepeatedSectionProps {
    sections: Section[];
    headerText: string; // New prop for the header text
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
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 ${
              index % 2 === 0 ? '' : 'flex-row-reverse'
            }`}
          >
            <div className="md:w-1/2 text-left md:pr-8"> {/* Added padding-right for space between text and image */}
              <h2 className="text-black text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-black text-lg">{section.description}</p>
            </div>
            <div className="md:w-[40%] mt-4 md:mt-0"> {/* Adjusted width to 40% to make the image smaller */}
              <img
                src={section.imageUrl}
                alt={section.title}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RepeatedSection;
  