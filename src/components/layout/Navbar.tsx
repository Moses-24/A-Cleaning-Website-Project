import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import eseLogo from '../../images/ese_logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 relative flex justify-between items-center md:grid md:grid-cols-3">
        {/* Left Side: Empty or Logo on Mobile */}
        <div className="flex items-center md:justify-start">
          <Link to="/" className="flex items-center gap-2 md:hidden">
            <img 
              src="src/images/ese_logo.jpg" 
              alt="Ese Cleaning Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                // Fallback if logo not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<div class="bg-ese-green text-white font-display font-bold text-lg p-1 px-3 rounded italic">ESE</div>');
              }}
            />
          </Link>
          
          {/* Desktop Left Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={`font-medium transition-colors hover:text-ese-teal ${location.pathname === '/' ? 'text-ese-teal' : (scrolled ? 'text-ese-dark' : 'text-white')}`}>Home</Link>
            <Link to="/about" className={`font-medium transition-colors hover:text-ese-teal ${location.pathname === '/about' ? 'text-ese-teal' : (scrolled ? 'text-ese-dark' : 'text-white')}`}>About</Link>
          </div>
        </div>

        {/* Center: Logo on Desktop */}
        <div className="hidden md:flex justify-center items-center">
          <Link to="/" className="flex flex-col items-center">
            <img 
              src={eseLogo}
              alt="Ese Cleaning Services Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'} w-auto object-contain`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<div class="bg-ese-green text-white font-display font-bold text-xl p-1 px-3 rounded italic tracking-tight">ESE</div>');
              }}
            />
          </Link>
        </div>

        {/* Right Side: Desktop Links & Booking */}
        <div className="flex items-center justify-end gap-6">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/services" className={`font-medium transition-colors hover:text-ese-teal ${location.pathname === '/services' ? 'text-ese-teal' : (scrolled ? 'text-ese-dark' : 'text-white')}`}>Services</Link>
            <Link to="/contact" className={`font-medium transition-colors hover:text-ese-teal ${location.pathname === '/contact' ? 'text-ese-teal' : (scrolled ? 'text-ese-dark' : 'text-white')}`}>Contact</Link>
          </div>
          
          <Link 
            to="/booking"
            className="hidden sm:block bg-ese-green text-white px-6 py-2 rounded-full font-semibold hover:bg-ese-teal transition-all shadow-lg hover:shadow-ese-teal/20"
          >
            Book Now
          </Link>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-ese-dark' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-medium ${
                    location.pathname === link.path ? 'text-ese-teal' : 'text-ese-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="bg-ese-green text-white px-6 py-3 rounded-xl font-semibold text-center shadow-lg"
              >
                Get a Free Quote
              </Link>
              <a 
                href="tel:+2349078244276"
                className="flex items-center justify-center gap-2 text-ese-green font-semibold"
              >
                <Phone size={20} />
                0907 824 4276
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
