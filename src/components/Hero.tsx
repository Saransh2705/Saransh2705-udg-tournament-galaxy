
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current && textRef.current) {
        const scrollPos = window.scrollY;
        const opacity = Math.max(1 - scrollPos / 500, 0);
        const translateY = scrollPos * 0.3;
        
        textRef.current.style.opacity = opacity.toString();
        textRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div 
        ref={textRef}
        className="container mx-auto px-4 md:px-6 z-10 text-center transition-all duration-300 ease-out"
      >
        <div className="inline-block mb-4 px-3 py-1 bg-udgBlue/10 backdrop-blur-sm border border-udgBlue/20 rounded-full">
          <span className="text-xs font-medium text-udgBlue">Esports Management & Creative Services</span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          <span className="text-white">Elevate Your </span>
          <span className="bg-gradient-to-r from-udgBlue to-udgAccent-blue bg-clip-text text-transparent">Esports Experience</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          UDG Esports delivers premium tournament management and creative services for the ultimate gaming experience.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/tournaments"
            className="bg-udgBlue text-white rounded-lg px-6 py-3 font-medium flex items-center justify-center transition-all duration-300 hover:bg-udgBlue-dark hover:shadow-lg hover:shadow-udgBlue/20 w-full sm:w-auto"
          >
            Explore Tournaments
            <ChevronRight size={16} className="ml-1" />
          </Link>
          <Link
            to="/creatives"
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-white/20 w-full sm:w-auto"
          >
            Discover UDG Creatives
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-udgDark to-transparent z-0" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-udgAccent-blue/20 rounded-full filter blur-3xl opacity-50" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-udgAccent-purple/10 rounded-full filter blur-3xl opacity-50" />
    </div>
  );
};

export default Hero;
