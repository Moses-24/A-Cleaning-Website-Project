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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  // Link styling depends on whether we're in "bar" mode or "pill" mode
  const linkClass = (path: string) => {
    const active = location.pathname === path;
    if (scrolled) {
      return `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
        active
          ? 'bg-gradient-to-r from-ese-teal to-ese-green text-white shadow-lg'
          : 'text-black hover:text-ese-gray hover:bg-white/10'
      }`;
    }
    return `font-medium transition-colors duration-300 hover:text-ese-teal ${
      active ? 'text-ese-teal' : 'text-white'
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4">
      {/* Morphing shell: full-width bar at rest → floating pill on scroll */}
      <div
  className={`mx-auto flex items-center transition-all duration-500 ease-out ${
    scrolled
      ? 'mt-3 max-w-md md:max-w-2xl px-3 py-2 rounded-full bg-gray-100 backdrop-blur-md shadow-2xl ring-1 ring-white/10 justify-between gap-4'
      : 'mt-0 max-w-7xl px-2 py-4 rounded-none bg-transparent shadow-none ring-0 ring-transparent justify-between'
  }`}
>
        {/* Logo — always left */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={eseLogo}
            alt="Ese Cleaning Services Logo"
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? 'h-10 rounded-full' : 'h-14 md:h-16'
            }`}
          />
        </Link>

        {/* Nav links — always right */}
        <div className={`hidden md:flex items-center ${scrolled ? 'gap-1' : 'gap-8'} transition-all duration-500`}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={linkClass(link.path)}>
              {link.name}
            </Link>
          ))}

          <Link
            to="/booking"
            className={`font-semibold transition-all duration-300 ${
              scrolled
                ? 'ml-2 bg-ese-green text-white px-5 py-2 rounded-full text-sm hover:bg-ese-teal'
                : 'bg-ese-green text-white px-6 py-2 rounded-full hover:bg-ese-teal shadow-lg hover:shadow-ese-teal/20'
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle — always right */}
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            scrolled ? 'text-ese-green' : 'text-ese-green'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu — floating dark card that matches the pill */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-auto mt-3 max-w-md rounded-3xl bg-ese-green backdrop-blur-md ring-1 ring-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-full text-lg font-semibold transition-all ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-ese-teal to-ese-green text-white'
                      : 'text-white hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-ese-green text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg"
              >
                Get a Free Quote
              </Link>

              <a
                href="tel:+2349078244276"
                className="flex items-center justify-center gap-2 text-ese-teal font-semibold pt-2"
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