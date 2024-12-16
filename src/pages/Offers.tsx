import React from 'react';
import OfferBanner from '../components/Offers/OfferBanner';

const currentOffers = [
  {
    title: 'Spring Trading Challenge',
    description: 'Join our exclusive trading challenge and win up to $50,000 in funding. Limited time offer for skilled traders.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
    link: '/enroll'
  },
  {
    title: 'Advanced Trading Course Bundle',
    description: 'Get 50% off on our comprehensive trading course bundle. Includes live sessions with professional traders.',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80',
    link: '/enroll'
  },
  {
    title: 'Premium Account Upgrade',
    description: 'Upgrade to a premium account and receive additional benefits including one-on-one mentoring sessions.',
    imageUrl: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80',
    link: '/enroll'
  }
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Special Offers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exclusive deals and promotions to enhance your trading journey
          </p>
        </div>
        <div className="space-y-8">
          {currentOffers.map((offer, index) => (
            <OfferBanner key={index} {...offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;