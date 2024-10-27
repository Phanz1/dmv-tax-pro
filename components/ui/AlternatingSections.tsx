import React from 'react';

interface Section {
  header: string;
  description: string;
  imageUrl: string;
}

const sections: Section[] = [
  {
    header: "Experienced Team: ",
    description: "Certified tax professionals with extensive knowledge of local, state, and federal tax regulations.",
    imageUrl: "/Images/aa1.jpeg",
  },
  {
    header: "Tailored Services:  ",
    description: "We understand your unique tax situation and create solutions just for you",
    imageUrl: "/Images/aa4.jpeg",
  },
  {
    header: "Local Expertise:  ",
    description: "Serving the DMV area, we have deep insight into the tax laws specific to Washington DC, Maryland, and Virginia.",
    imageUrl: "/Images/aa5.jpeg",
  },
];

const AlternatingSections: React.FC = () => {
  return (
    <div  className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to bg-sky-200 bg-opacity-50">
        Why Choose DMV Tax Pro?
        </div>
        

    
    <div className="min-h-screen bg-blue-500 py-12 px-4 sm:px-6 lg:px-8" style={{backgroundImage: 'url("/Images/16.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16  bg-opacity-80 rounded-lg overflow-hidden shadow-xl`}>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4">{section.header}</h2>
              <p className="text-white">{section.description}</p>
            </div>
            <div className="md:w-1/2">
              <img src={section.imageUrl} alt={section.header} className="w-full h-64 object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AlternatingSections;