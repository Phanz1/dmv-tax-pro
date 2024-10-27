import React from 'react';
import { FaBriefcase, FaUserShield, FaChartLine } from 'react-icons/fa'; // Example icons

interface Card {
  icon: JSX.Element;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    icon: <FaBriefcase size={30} color="#4a90e2" />, // Example icon
    title: "IRS Audits",
    description: "Facing an audit? We provide full representation, ensuring you get a fair outcome and reducing any potential penalties.",
  },
  {
    icon: <FaUserShield size={30} color="#4a90e2" />,
    title: "Offer in Compromise",
    description: "If you’re struggling to pay your taxes, we negotiate with the IRS to settle your tax debt for less than what you owe.",
  },
  {
    icon: <FaChartLine size={30} color="#4a90e2" />,
    title: "Installment Agreements",
    description: "Can’t pay your full tax liability right away? We can help you set up a manageable monthly payment plan with the IRS.",
  },
  {
    icon: <FaBriefcase size={30} color="#4a90e2" />, // Example icon
    title: "Penalty Abatement",
    description: "Let us help you reduce or eliminate IRS penalties for late filing, late payment, or other issues.",
  },
];

const CardSection: React.FC = () => {
  return (
    <section className="px-4 py-8 bg-blue-200" >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
        Our IRS Problem Resolution Services:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center transition-transform duration-200 transform hover:scale-105"
          >
            <div className="mb-4">
              <div className="mx-auto">{card.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
