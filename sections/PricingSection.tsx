import PricingCard from '@/components/PricingCard';
import React from 'react';

const pricingPlans = [
  {
    title: 'Essential',
    price: 90,
    features: [
      { name: '1 Instagram account', included: true },
      { name: '25,000 shares/day', included: true },
      { name: 'Mass views of stories', included: true },
      { name: 'Mass likes of stories', included: true },
      { name: 'Daily reports', included: true },
      { name: 'Follow / Unfollow', included: false },
      { name: 'Welcome DM', included: false },
    ],
    isPopular: false,
  },
  {
    title: 'Premium',
    price: 120,
    features: [
      { name: '1 Instagram account', included: true },
      { name: '25,000 shares/day', included: true },
      { name: 'Mass views of stories', included: true },
      { name: 'Mass likes of stories', included: true },
      { name: 'Daily reports', included: true },
      { name: 'Follow / Unfollow', included: false },
      { name: 'Welcome DM', included: false },
    ],
    isPopular: true,
  },
  {
    title: 'Platinum',
    price: 599,
    features: [
      { name: '1 Instagram account', included: true },
      { name: '35,000 shares/day', included: true },
      { name: 'Mass views of stories', included: true },
      { name: 'Mass likes of stories', included: true },
      { name: 'Daily reports', included: true },
      { name: 'Follow / Unfollow', included: true },
      { name: 'Welcome DM', included: true },
    ],
    isPopular: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <div className="text-center px-5 py-20 bg-gray-50" id='pricing'>
      <h1 className="text-4xl font-bold mb-4">Choose Your Perfect <span className='text-primary'>Plan</span></h1>
      <p className="text-gray-600 mb-10 text-center">
        Flexible pricing options designed to suit every need and budget. <br /> Find the perfect plan for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
