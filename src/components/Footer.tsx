
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Twitch, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-udgDark-dark border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col">
            <Link to="/" className="mb-4">
              <span className="font-display text-xl font-bold bg-gradient-to-r from-udgBlue to-udgAccent-blue bg-clip-text text-transparent">
                UDG <span className="text-white">Esports</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Professional esports management company hosting tournaments and providing creative services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-udgBlue transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-udgBlue transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitch.tv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-udgBlue transition-colors duration-300"
                aria-label="Twitch"
              >
                <Twitch size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-udgBlue transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-display text-sm uppercase text-white/90 font-semibold mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              <Link 
                to="/"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                to="/tournaments"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300"
              >
                Tournaments
              </Link>
              <Link 
                to="/creatives" 
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300"
              >
                UDG Creatives
              </Link>
              <Link 
                to="/forum"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300"
              >
                Forum
              </Link>
              <Link 
                to="/blog"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300"
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-display text-sm uppercase text-white/90 font-semibold mb-4">
              Our Services
            </h3>
            <div className="flex flex-col space-y-3">
              <Link 
                to="/creatives/graphic-design"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300"
              >
                Graphic Design
              </Link>
              <Link 
                to="/creatives/broadcasting"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300"
              >
                Broadcasting
              </Link>
              <Link 
                to="/creatives/marketing"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300"
              >
                Media Marketing
              </Link>
              <Link 
                to="/tournaments/management"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300"
              >
                Tournament Management
              </Link>
              <Link 
                to="/creatives/discord"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300"
              >
                Discord Management
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-display text-sm uppercase text-white/90 font-semibold mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="mailto:info@udgesports.com"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300 flex items-center"
              >
                <Mail size={16} className="mr-2" />
                info@udgesports.com
              </a>
              <a 
                href="tel:+1234567890"
                className="text-white/60 text-sm hover:text-udgBlue transition-colors duration-300 flex items-center"
              >
                <Phone size={16} className="mr-2" />
                +1 (234) 567-890
              </a>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-udgBlue/10 hover:bg-udgBlue/20 text-udgBlue rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} UDG Esports. All rights reserved.
          </p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <Link 
              to="/privacy-policy"
              className="text-white/40 text-xs hover:text-white/60 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service"
              className="text-white/40 text-xs hover:text-white/60 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
