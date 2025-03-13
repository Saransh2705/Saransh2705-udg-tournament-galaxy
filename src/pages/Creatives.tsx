
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Film, Mic, Code, Megaphone, Users, ChevronRight, Check, ArrowRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, link }) => {
  return (
    <div className="bg-udgDark-light glass rounded-xl overflow-hidden flex flex-col h-full card-hover">
      <div className="p-6 border-b border-white/5 flex items-center">
        <div className="text-udgBlue mr-4">{icon}</div>
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-white/70 text-sm mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={16} className="text-udgBlue mt-1 mr-2 flex-shrink-0" />
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 border-t border-white/5">
        <Link
          to={link}
          className="flex items-center justify-center bg-udgBlue/10 hover:bg-udgBlue/20 text-udgBlue rounded-lg px-4 py-2 text-sm font-medium w-full transition-all duration-300"
        >
          Learn More
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const Creatives = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <PenTool size={24} />,
      title: 'Graphic Design',
      description: 'Professional esports-focused design services to elevate your brand and tournaments.',
      features: [
        'Tournament posters and banners',
        'Team logos and branding',
        'Social media graphics',
        'Stream overlays and alerts',
        'Merchandise design'
      ],
      link: '/creatives/graphic-design'
    },
    {
      icon: <Film size={24} />,
      title: 'Broadcasting & VFX',
      description: 'High-quality broadcasting services and visual effects for esports events.',
      features: [
        'Professional stream production',
        'Live multicamera setups',
        'Custom overlays and transitions',
        'Highlight reels and recap videos',
        'Post-production visual effects'
      ],
      link: '/creatives/broadcasting'
    },
    {
      icon: <Mic size={24} />,
      title: 'Casters & Hosts',
      description: 'Experienced gaming commentators and hosts for tournaments and events.',
      features: [
        'Professional play-by-play casting',
        'Expert game analysis',
        'Bilingual casting options',
        'Event hosting and interviews',
        'Esports commentary training'
      ],
      link: '/creatives/casters'
    },
    {
      icon: <Code size={24} />,
      title: 'Technical Support',
      description: 'Comprehensive technical solutions for gaming events and organizations.',
      features: [
        'Tournament website development',
        'Registration systems integration',
        'Custom scoring solutions',
        'Live results dashboards',
        'Technical troubleshooting'
      ],
      link: '/creatives/technical'
    },
    {
      icon: <Megaphone size={24} />,
      title: 'Media Marketing',
      description: 'Strategic promotion and media outreach for maximum visibility.',
      features: [
        'Social media campaign management',
        'Influencer partnerships',
        'Press releases and media outreach',
        'Content marketing strategy',
        'Analytics and performance tracking'
      ],
      link: '/creatives/marketing'
    },
    {
      icon: <Users size={24} />,
      title: 'Community Management',
      description: 'Building and managing active gaming communities.',
      features: [
        'Discord server setup and management',
        'Social media community building',
        'Moderation team management',
        'Community events organization',
        'User engagement strategies'
      ],
      link: '/creatives/community'
    }
  ];

  const caseStudies = [
    {
      title: 'BGMI Pro League',
      service: 'Full Event Management',
      description: "Comprehensive tournament organization including graphics, broadcasting, and technical support for India's largest BGMI event.",
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070'
    },
    {
      title: 'Valorant India Invitational',
      service: 'Broadcasting & Production',
      description: 'Professional broadcasting services with custom overlays, transitions, and multilingual commentary for this major Valorant event.',
      image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071'
    },
    {
      title: 'Esports Organization Rebrand',
      service: 'Creative & Marketing',
      description: 'Complete visual identity redesign and marketing strategy for a major Indian esports organization.',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=3498'
    }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        <section className="relative py-24 bg-udgDark-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-udgBlue/10 backdrop-blur-sm border border-udgBlue/20 rounded-full">
                  <span className="text-xs font-medium text-udgBlue">UDG Creatives</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                  Creative Services for <span className="bg-gradient-to-r from-udgBlue to-udgAccent-blue bg-clip-text text-transparent">Esports Excellence</span>
                </h1>
                <p className="text-white/80 mb-8">
                  UDG Creatives offers a comprehensive range of professional services designed specifically for esports and gaming. From stunning graphics and professional broadcasting to community management and technical support.
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <Link
                    to="/contact"
                    className="bg-udgBlue text-white rounded-lg px-6 py-3 font-medium flex items-center justify-center transition-all duration-300 hover:bg-udgBlue-dark hover:shadow-lg hover:shadow-udgBlue/20 w-full sm:w-auto"
                  >
                    Get a Quote
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                  <a
                    href="#services"
                    className="bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-white/20 w-full sm:w-auto"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070" 
                    alt="UDG Creatives Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-udgBlue/20 rounded-full filter blur-3xl opacity-70" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-udgAccent-purple/10 rounded-full filter blur-3xl opacity-70" />
              </div>
            </div>
          </div>
          <div className="absolute -top-40 left-1/4 w-80 h-80 bg-udgAccent-blue/10 rounded-full filter blur-3xl opacity-30" />
          <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-udgAccent-purple/10 rounded-full filter blur-3xl opacity-30" />
        </section>

        <section id="services" className="py-20 bg-udgDark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-medium text-udgBlue uppercase tracking-wider">What we offer</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
                Our Creative Services
              </h2>
              <p className="text-white/70">
                From concept to execution, our creative division offers a comprehensive range of professional services specifically designed for esports and gaming.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-udgDark-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-medium text-udgBlue uppercase tracking-wider">Success stories</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
                Case Studies
              </h2>
              <p className="text-white/70">
                Take a look at some of our successful projects and how we've helped our clients achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-udgDark-light glass rounded-xl overflow-hidden card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-udgDark-dark to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="inline-block mb-3 px-3 py-1 bg-udgBlue/10 backdrop-blur-sm border border-udgBlue/20 rounded-full">
                      <span className="text-xs font-medium text-udgBlue">{study.service}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 text-white">{study.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{study.description}</p>
                    <Link
                      to="/creatives/case-studies"
                      className="flex items-center text-udgBlue text-sm font-medium hover:underline"
                    >
                      Read Case Study
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link
                to="/creatives/case-studies"
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300"
              >
                View All Case Studies
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-udgDark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-medium text-udgBlue uppercase tracking-wider">How we work</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
                Our Creative Process
              </h2>
              <p className="text-white/70">
                We follow a structured approach to ensure every project meets our high standards and your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-udgDark-light glass rounded-xl p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center bg-udgBlue/10 rounded-full mb-4">
                  <span className="font-display text-xl font-bold text-udgBlue">01</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-white">Consultation</h3>
                <p className="text-white/70 text-sm">
                  We start by understanding your needs, goals, and vision through a detailed consultation.
                </p>
              </div>
              
              <div className="bg-udgDark-light glass rounded-xl p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center bg-udgBlue/10 rounded-full mb-4">
                  <span className="font-display text-xl font-bold text-udgBlue">02</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-white">Planning</h3>
                <p className="text-white/70 text-sm">
                  Our team develops a comprehensive project plan with timelines, deliverables, and milestones.
                </p>
              </div>
              
              <div className="bg-udgDark-light glass rounded-xl p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center bg-udgBlue/10 rounded-full mb-4">
                  <span className="font-display text-xl font-bold text-udgBlue">03</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-white">Execution</h3>
                <p className="text-white/70 text-sm">
                  We bring your project to life with our expert team of designers, developers, and creative professionals.
                </p>
              </div>
              
              <div className="bg-udgDark-light glass rounded-xl p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center bg-udgBlue/10 rounded-full mb-4">
                  <span className="font-display text-xl font-bold text-udgBlue">04</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-white">Delivery</h3>
                <p className="text-white/70 text-sm">
                  We provide the final deliverables, along with any necessary training or support to ensure success.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-udgDark to-udgDark-dark relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-3 py-1 bg-udgBlue/10 backdrop-blur-sm border border-udgBlue/20 rounded-full">
                <span className="text-xs font-medium text-udgBlue">Let's collaborate</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Elevate Your <span className="bg-gradient-to-r from-udgBlue to-udgAccent-blue bg-clip-text text-transparent">Esports Brand?</span>
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Whether you need creative services for a tournament, organization, or gaming brand, UDG Creatives has the expertise to bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="bg-udgBlue text-white rounded-lg px-6 py-3 font-medium inline-flex items-center justify-center transition-all duration-300 hover:bg-udgBlue-dark hover:shadow-lg hover:shadow-udgBlue/20"
              >
                Get in Touch
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-udgAccent-purple/10 rounded-full filter blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-udgBlue/10 rounded-full filter blur-3xl opacity-50" />
        </section>
      </div>
    </PageTransition>
  );
};

export default Creatives;
