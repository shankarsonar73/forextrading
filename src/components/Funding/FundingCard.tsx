import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface FundingCardProps {
  title: string;
  amount: string;
  features: string[];
  isPopular?: boolean;
}

const FundingCard: React.FC<FundingCardProps> = ({ title, amount, features, isPopular }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-lg shadow-xl p-6 ${isPopular ? 'border-2 border-blue-500' : ''}`}
    >
      {isPopular && (
        <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-4xl font-bold text-blue-600 mb-6">{amount}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full mt-6 py-3 rounded-md font-semibold ${
          isPopular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        } transition-colors`}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default FundingCard;