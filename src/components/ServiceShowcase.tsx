
import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Film, Mic, Code, Megaphone, Users, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="p-6 bg-udgDark-light glass rounded-xl overflow-hidden card-hover group">
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110 text-udgBlue">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/70 text-sm mb-4">{description}</p>
      <Link
        to={link}
        className="flex items-center text-udgBlue text-sm font-medium hover:underline"
      >
        Learn More
        <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

const ServiceShowcase: React.FC = () => {
  const services = [
    {
      icon: <PenTool size={40} />,
      title: 'Graphic Design',
      description: 'Eye-catching visuals for your tournaments, teams, and gaming brand to stand out in the esports world.',
      link: '/creatives/graphic-design'
    },
    {
      icon: <Film size={40} />,
      title: 'Broadcasting & VFX',
      description: 'Professional broadcasting services and stunning visual effects to elevate your esports events.',
      link: '/creatives/broadcasting'
    },
    {
      icon: <Mic size={40} />,
      title: 'Casters & Commentators',
      description: 'Experienced gaming commentators to bring energy and insight to your tournament livestreams.',
      link: '/creatives/casters'
    },
    {
      icon: <Code size={40} />,
      title: 'Technical Support',
      description: 'Comprehensive technical solutions including website development and integration for your events.',
      link: '/creatives/technical'
    },
    {
      icon: <Megaphone size={40} />,
      title: 'Media Marketing',
      description: "Strategic promotion and media outreach to maximize your event's visibility and audience reach.",
      link: '/creatives/marketing'
    },
    {
      icon: <Users size={40} />,
      title: 'Community Management',
      description: 'Discord management and social media services to build and engage your gaming community.',
      link: '/creatives/community'
    }
  ];

  return (
    <section className="py-20 bg-udgDark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-udgBlue/10 backdrop-blur-sm border border-udgBlue/20 rounded-full">
            <span className="text-xs font-medium text-udgBlue">UDG Creatives</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
            Full-Service Creative Solutions
          </h2>
          <p className="text-white/70">
            From concept to execution, our creative division offers a comprehensive range of services to meet all your gaming and esports needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/creatives"
            className="inline-flex items-center justify-center bg-udgBlue text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-udgBlue-dark hover:shadow-lg hover:shadow-udgBlue/20"
          >
            Explore All Services
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 left-20 w-80 h-80 bg-udgAccent-blue/10 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute -bottom-40 right-20 w-80 h-80 bg-udgAccent-purple/10 rounded-full filter blur-3xl opacity-30" />
    </section>
  );
};

export default ServiceShowcase;
