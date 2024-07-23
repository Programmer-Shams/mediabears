import React from 'react';

interface Feature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  features: Feature[];
  isPopular: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, isPopular }) => {
  return (
    <div className={`relative bg-white px-6 py-10 rounded-lg shadow-md border ${isPopular ? 'border-[1.5px] border-blue-500' : 'border-gray-300'}`}>
      {isPopular && (
        <div className="absolute -top-3 left-32 bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
          Most popular
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-2 text-blue-950">{title}</h2>
      <div className="text-4xl font-bold mb-4 text-blue-950">${price}</div>
      <div className="text-gray-600 mb-4">Per month</div>
      <button className={`w-full py-2 rounded-full text-white ${isPopular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-800 hover:bg-gray-900'}`}>
        Get started
      </button>
      <ul className="mt-6 space-y-7"> {/* Updated spacing here */}
        {features.map((feature, index) => (
          <li key={index} className={`flex items-center text-[#111928] text-[15px] space-x-2`}> {/* Added space between items */}
            <span>{feature.included ? '✔️' : '❌'}</span>
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
