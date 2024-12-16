import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ForexPro</h3>
            <p className="text-gray-400">Your trusted partner in Forex trading education and funding solutions.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/funding" className="text-gray-400 hover:text-white transition">Funding</Link></li>
              <li><Link to="/offers" className="text-gray-400 hover:text-white transition">Offers</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Trading Street</li>
              <li>Financial District</li>
              <li>contact@forexpro.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ForexPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;