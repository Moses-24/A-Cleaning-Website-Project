import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import eseLogoImg from '../../images/ese_logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-ese-green text-white pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div className="space-y-6">
          <Link to="/" className="inline-flex items-center gap-2">
            <img
              src={eseLogoImg}
              alt="Ese Cleaning Services Logo"
              className="h-14 w-auto object-contain bg-white rounded-xl p-1"
            />
          </Link>
          <p className="text-white/70 leading-relaxed font-light">
            Providing premium cleaning services for homeowners, offices, and businesses in Lekki, Victoria Island, and Ajah.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/ese_cleaning_services/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-ese-teal transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/p/Ese-Cleaning-Services-100063239768308/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-ese-teal transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4 text-white/70">
            <li>
              <Link to="/" className="hover:text-ese-teal transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ese-teal transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ese-teal transition-colors">Our Services</Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-ese-teal transition-colors">Booking</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ese-teal transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-lg mb-6">Services</h3>
          <ul className="space-y-4 text-white/70">
            <li>
              <Link to="/services" className="hover:text-ese-teal transition-colors">Residential Cleaning</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ese-teal transition-colors">Office Cleaning</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ese-teal transition-colors">Airbnb/Short-let</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ese-teal transition-colors">Deep Cleaning</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ese-teal transition-colors">Fumigation</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4 text-white/70">
            <li className="flex gap-3">
              <MapPin className="text-ese-teal shrink-0" size={20} />
              <span>Lekki Phase 1, Lagos, Nigeria</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-ese-teal shrink-0" size={20} />
              <a href="tel:09078244276" className="hover:text-ese-teal transition-colors">0907 824 4276</a>
            </li>
            <li className="flex gap-3">
              <Mail className="text-ese-teal shrink-0" size={20} />
              <a href="mailto:officialesecleaningservices@gmail.com" className="hover:text-ese-teal transition-colors">officialesecleaningservices@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-10 border-t border-white/10 text-center text-white/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Ese Cleaning Services. All rights reserved. Designed by Moses | themosaicforge</p>
      </div>

    </footer>
  );
}