
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedTournaments from '@/components/FeaturedTournaments';
import ServiceShowcase from '@/components/ServiceShowcase';
import { Link } from 'react-router-dom';
import { ChevronRight, Trophy, Users, Calendar, Gamepad } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 bg-udgDark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="frosted-glass p-6 rounded-xl">
              <div className="flex justify-center mb-2 text-udgBlue">
                <Trophy size={28} />
              </div>
              <h3 className="text-center text-3xl md:text-4xl font-display font-bold text-white">50+</h3>
              <p className="text-center text-white/70 text-sm">Tournaments Hosted</p>
            </div>
            
            <div className="frosted-glass p-6 rounded-xl">
              <div className="flex justify-center mb-2 text-udgBlue">
                <Users size={28} />
              </div>
              <h3 className="text-center text-3xl md:text-4xl font-display font-bold text-white">10k+</h3>
              <p className="text-center text-white/70 text-sm">Active Players</p>
            </div>
            
            <div className="frosted-glass p-6 rounded-xl">
              <div className="flex justify-center mb-2 text-udgBlue">
                <Calendar size={28} />
              </div>
              <h3 className="text-center text-3xl md:text-4xl font-display font-bold text-white">5+</h3>
              <p className="text-center text-white/70 text-sm">Years Experience</p>
            </div>
            
            <div className="frosted-glass p-6 rounded-xl">
              <div className="flex justify-center mb-2 text-udgBlue">
                <Gamepad size={28} />
              </div>
              <h3 className="text-center text-3xl md:text-4xl font-display font-bold text-white">10+</h3>
              <p className="text-center text-white/70 text-sm">Game Titles</p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedTournaments />
      
      {/* About Section */}
      <section className="py-20 bg-udgDark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4 px-3 py-1 bg-udgBlue/10 backdrop-blur-sm border border-udgBlue/20 rounded-full">
                <span className="text-xs font-medium text-udgBlue">Who We Are</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                Pioneering the Future of <span className="bg-gradient-to-r from-udgBlue to-udgAccent-blue bg-clip-text text-transparent">Esports Management</span>
              </h2>
              <p className="text-white/80 mb-4">
                UDG Esports is a premier esports management company dedicated to creating unforgettable gaming experiences. We specialize in hosting tournaments across popular titles like BGMI, Clash of Clans, Valorant, and more.
              </p>
              <p className="text-white/80 mb-6">
                With our creative division, UDG Creatives, we offer a comprehensive range of services from graphic design and broadcasting to community management and technical support, ensuring a seamless experience for players and viewers alike.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-udgBlue/10 hover:bg-udgBlue/20 text-udgBlue rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300"
              >
                Learn More About Us
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070" 
                  alt="UDG Esports Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-udgBlue/20 rounded-full filter blur-3xl opacity-70" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-udgAccent-purple/10 rounded-full filter blur-3xl opacity-70" />
            </div>
          </div>
        </div>
      </section>
      
      <ServiceShowcase />
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-udgDark-dark to-udgDark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Elevate Your <span className="bg-gradient-to-r from-udgBlue to-udgAccent-blue bg-clip-text text-transparent">Gaming Experience?</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you're looking to participate in our tournaments or need creative services for your gaming brand, UDG Esports is here to help you reach new heights.
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
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-white/20 w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-udgAccent-purple/10 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-udgBlue/10 rounded-full filter blur-3xl opacity-50" />
      </section>
    </>
  );
};

export default Index;
