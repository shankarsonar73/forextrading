import React from 'react';
import FundingCard from '../components/Funding/FundingCard';

const fundingPlans = [
  {
    title: 'Starter Account',
    amount: '$5,000',
    features: [
      'Initial funding up to $5,000',
      'Profit split: 70/30',
      'Daily drawdown: 5%',
      'Maximum drawdown: 10%',
      '14-day evaluation period'
    ]
  },
  {
    title: 'Professional Account',
    amount: '$25,000',
    features: [
      'Initial funding up to $25,000',
      'Profit split: 80/20',
      'Daily drawdown: 7%',
      'Maximum drawdown: 12%',
      '21-day evaluation period'
    ],
    isPopular: true
  },
  {
    title: 'Enterprise Account',
    amount: '$100,000',
    features: [
      'Initial funding up to $100,000',
      'Profit split: 90/10',
      'Daily drawdown: 10%',
      'Maximum drawdown: 15%',
      '30-day evaluation period'
    ]
  }
];

const Funding = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Funding Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect funding plan to kickstart your trading career with ForexPro
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fundingPlans.map((plan, index) => (
            <FundingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Funding;