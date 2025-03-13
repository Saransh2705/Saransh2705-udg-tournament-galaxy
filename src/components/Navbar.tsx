
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tournaments', path: '/tournaments' },
    { name: 'UDG Creatives', path: '/creatives' },
    { name: 'Forum', path: '/forum' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <span className="font-display text-xl md:text-2xl font-bold bg-gradient-to-r from-udgBlue to-udgAccent-blue bg-clip-text text-transparent">
              UDG <span className="text-white">Esports</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-udgBlue ${
                  location.pathname === link.path
                    ? 'text-udgBlue'
                    : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-udgBlue text-white rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-udgBlue-dark hover:shadow-lg hover:shadow-udgBlue/20"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden frosted-glass absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-5 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium py-2 transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-udgBlue'
                  : 'text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-udgBlue text-white rounded-lg px-5 py-2 text-sm font-medium text-center transition-all duration-300"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
