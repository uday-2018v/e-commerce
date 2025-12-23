import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ई-शॉप</h3>
            <p className="text-gray-400">भारत का सबसे भरोसेमंद ऑनलाइन शॉपिंग प्लेटफॉर्म</p>
            <div className="flex gap-4 mt-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-500 transition" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-400 transition" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-pink-500 transition" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-red-500 transition" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">खरीदारी</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/products" className="hover:text-white transition">सभी उत्पाद</Link></li>
              <li><Link to="/" className="hover:text-white transition">नए आइटम</Link></li>
              <li><Link to="/" className="hover:text-white transition">विशेष ऑफ़र</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">ग्राहक सेवा</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/profile" className="hover:text-white transition">मेरा खाता</Link></li>
              <li><Link to="/cart" className="hover:text-white transition">शॉपिंग कार्ट</Link></li>
              <li><Link to="#" className="hover:text-white transition">सहायता केंद्र</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">संपर्क</h4>
            <ul className="space-y-2 text-gray-400">
              <li>ईमेल: support@eshop.in</li>
              <li>फ़ोन: 1800-123-4567</li>
              <li>समय: सोम-शुक्र 9AM-6PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ई-शॉप। सर्वाधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  );
};
