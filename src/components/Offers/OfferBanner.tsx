import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface OfferBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const OfferBanner: React.FC<OfferBannerProps> = ({ title, description, imageUrl, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-lg shadow-lg"
    >
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent" />
      </div>
      <div className="relative p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 mb-4 max-w-xl">{description}</p>
        <motion.a
          whileHover={{ x: 5 }}
          href={link}
          className="inline-flex items-center text-white font-semibold hover:underline"
        >
          Learn More
          <ArrowRight className="ml-2 h-5 w-5" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default OfferBanner;