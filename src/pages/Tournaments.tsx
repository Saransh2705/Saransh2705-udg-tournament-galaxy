
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Filter, Trophy, Calendar, Clock, MapPin, Users, GamepadIcon } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const Tournaments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingTournaments = [
    {
      id: 'bgmi-championship',
      title: 'BGMI Pro Championship',
      game: 'BGMI',
      date: 'June 15-18, 2023',
      time: '14:00 - 19:00 IST',
      location: 'Online',
      participants: '128 Teams',
      prize: '₹10,00,000',
      registrationOpen: true,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070',
    },
    {
      id: 'valorant-invitational',
      title: 'Valorant Invitational',
      game: 'Valorant',
      date: 'July 2-3, 2023',
      time: '16:00 - 22:00 IST',
      location: 'Delhi, India',
      participants: '16 Teams',
      prize: '₹5,00,000',
      registrationOpen: true,
      image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071',
    },
    {
      id: 'coc-war-league',
      title: 'Clash of Clans War League',
      game: 'Clash of Clans',
      date: 'June 28-30, 2023',
      time: '18:00 - 23:00 IST',
      location: 'Online',
      participants: '32 Clans',
      prize: '₹3,00,000',
      registrationOpen: true,
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070',
    },
    {
      id: 'pubg-mobile-cup',
      title: 'PUBG Mobile Cup 2023',
      game: 'PUBG Mobile',
      date: 'July 10-15, 2023',
      time: '15:00 - 20:00 IST',
      location: 'Online + LAN Finals',
      participants: '64 Teams',
      prize: '₹8,00,000',
      registrationOpen: true,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071',
    },
    {
      id: 'free-fire-max-showdown',
      title: 'Free Fire MAX Showdown',
      game: 'Free Fire MAX',
      date: 'July 22-23, 2023',
      time: '17:00 - 21:00 IST',
      location: 'Online',
      participants: '48 Teams',
      prize: '₹4,00,000',
      registrationOpen: false,
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2070',
    },
    {
      id: 'cod-mobile-tournament',
      title: 'Call of Duty Mobile Tournament',
      game: 'COD Mobile',
      date: 'August 5-6, 2023',
      time: '16:00 - 21:00 IST',
      location: 'Online',
      participants: '32 Teams',
      prize: '₹3,50,000',
      registrationOpen: false,
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070',
    },
  ];

  const pastTournaments = [
    {
      id: 'bgmi-spring-championship',
      title: 'BGMI Spring Championship',
      game: 'BGMI',
      date: 'March 15-18, 2023',
      winner: 'Team Soul',
      image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2074',
    },
    {
      id: 'valorant-spring-series',
      title: 'Valorant Spring Series',
      game: 'Valorant',
      date: 'April 2-3, 2023',
      winner: 'Global Esports',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2065',
    },
    {
      id: 'coc-winter-league',
      title: 'Clash of Clans Winter League',
      game: 'Clash of Clans',
      date: 'February 1-3, 2023',
      winner: 'Phoenix Clan',
      image: 'https://images.unsplash.com/photo-1548484352-ea579e5233a8?q=80&w=2070',
    },
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-24 bg-udgDark-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-3 py-1 bg-udgBlue/10 backdrop-blur-sm border border-udgBlue/20 rounded-full">
                <span className="text-xs font-medium text-udgBlue">Game On</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                UDG Esports <span className="bg-gradient-to-r from-udgBlue to-udgAccent-blue bg-clip-text text-transparent">Tournaments</span>
              </h1>
              <p className="text-white/80 mb-8">
                Participate in our professionally managed tournaments across multiple gaming titles and compete for glory and prizes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-udgBlue text-white rounded-lg px-6 py-3 font-medium flex items-center justify-center transition-all duration-300 hover:bg-udgBlue-dark hover:shadow-lg hover:shadow-udgBlue/20 w-full sm:w-auto"
                >
                  Host a Tournament
                  <ChevronRight size={16} className="ml-1" />
                </Link>
                <a
                  href="#upcoming"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-white/20 w-full sm:w-auto"
                >
                  View Upcoming Events
                </a>
              </div>
            </div>
          </div>
          <div className="absolute -top-40 left-1/4 w-80 h-80 bg-udgAccent-blue/10 rounded-full filter blur-3xl opacity-30" />
          <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-udgAccent-purple/10 rounded-full filter blur-3xl opacity-30" />
        </section>

        {/* Upcoming Tournaments */}
        <section id="upcoming" className="py-20 bg-udgDark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-medium text-udgBlue uppercase tracking-wider">Register now</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-white">Upcoming Tournaments</h2>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <button className="flex items-center text-white/70 hover:text-white transition-colors duration-300">
                  <Filter size={16} className="mr-2" />
                  Filter Events
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingTournaments.map((tournament) => (
                <div key={tournament.id} className="bg-udgDark-light glass rounded-xl overflow-hidden card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={tournament.image} 
                      alt={tournament.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-udgDark-dark to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-udgBlue/80 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-medium text-white">{tournament.game}</span>
                    </div>
                    {tournament.registrationOpen ? (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full">
                        <span className="text-xs font-medium text-white">Registration Open</span>
                      </div>
                    ) : (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-udgDark/80 backdrop-blur-sm rounded-full">
                        <span className="text-xs font-medium text-white">Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-3 text-white">{tournament.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-white/70">
                        <Calendar size={16} className="mr-2 text-udgBlue" />
                        <span className="text-sm">{tournament.date}</span>
                      </div>
                      <div className="flex items-center text-white/70">
                        <Clock size={16} className="mr-2 text-udgBlue" />
                        <span className="text-sm">{tournament.time}</span>
                      </div>
                      <div className="flex items-center text-white/70">
                        <MapPin size={16} className="mr-2 text-udgBlue" />
                        <span className="text-sm">{tournament.location}</span>
                      </div>
                      <div className="flex items-center text-white/70">
                        <Users size={16} className="mr-2 text-udgBlue" />
                        <span className="text-sm">{tournament.participants}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-t border-white/10">
                      <div className="flex items-center">
                        <Trophy size={16} className="text-udgBlue mr-2" />
                        <span className="text-sm font-medium text-white">{tournament.prize}</span>
                      </div>
                      <Link
                        to={`/tournaments/${tournament.id}`}
                        className="flex items-center text-udgBlue text-sm font-medium hover:underline"
                      >
                        Details
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Tournaments */}
        <section className="py-20 bg-udgDark-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12">
              <span className="text-xs font-medium text-udgBlue uppercase tracking-wider">Previous events</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-white">Past Tournaments</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastTournaments.map((tournament) => (
                <div key={tournament.id} className="bg-udgDark-light glass rounded-xl overflow-hidden card-hover">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={tournament.image} 
                      alt={tournament.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-udgDark-dark to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-udgBlue/80 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-medium text-white">{tournament.game}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold mb-2 text-white">{tournament.title}</h3>
                    
                    <div className="flex items-center text-white/70 mb-3">
                      <Calendar size={16} className="mr-2 text-udgBlue" />
                      <span className="text-sm">{tournament.date}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-t border-white/10">
                      <div className="flex items-center">
                        <Trophy size={16} className="text-udgBlue mr-2" />
                        <span className="text-sm font-medium text-white">Winner: {tournament.winner}</span>
                      </div>
                      <Link
                        to={`/tournaments/${tournament.id}`}
                        className="flex items-center text-udgBlue text-sm font-medium hover:underline"
                      >
                        Details
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <button className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300">
                Load More Tournaments
              </button>
            </div>
          </div>
        </section>

        {/* Host a Tournament CTA */}
        <section className="py-20 bg-gradient-to-r from-udgDark to-udgDark-dark relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-3 py-1 bg-udgBlue/10 backdrop-blur-sm border border-udgBlue/20 rounded-full">
                <span className="text-xs font-medium text-udgBlue">Partner with us</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                Looking to Host Your Own <span className="bg-gradient-to-r from-udgBlue to-udgAccent-blue bg-clip-text text-transparent">Esports Tournament?</span>
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                UDG Esports provides end-to-end tournament management services, from planning and production to broadcasting and promotion. Let us help you create an unforgettable gaming event.
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

export default Tournaments;
