import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ese-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white text-ese-green font-display font-bold text-xl p-1 px-3 rounded italic tracking-tight">
              ESE
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              Cleaning Services
            </span>
          </Link>
          <p className="text-gray-400 leading-relaxed font-light">
            Providing premium Cleaning services for homeowners, offices, and businesses in Lekki, Victoria Island, and Ajah.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="p-2 bg-white/10 rounded-full hover:bg-ese-teal transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            {['Home', 'About Us', 'Our Services', 'Booking', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-ese-teal transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-4 text-gray-400">
            {['Residential Cleaning', 'Office Cleaning', 'Airbnb/Short-let', 'Deep Cleaning', 'Fumigation'].map((item) => (
              <li key={item}>
                <Link to="/services" className="hover:text-ese-teal transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <MapPin className="text-ese-teal shrink-0" size={20} />
              <span>Lekki Phase 1, Lagos, Nigeria</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-ese-teal shrink-0" size={20} />
              <span>0907 824 4276</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-ese-teal shrink-0" size={20} />
              <span>info@esecleaning.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Ese Cleaning Services. All rights reserved. Designed by MJ</p>
      </div>
    </footer>
  );
}