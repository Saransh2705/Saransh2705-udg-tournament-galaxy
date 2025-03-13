
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ChevronRight, Calendar, Clock, Users, MapPin } from 'lucide-react';

interface TournamentCardProps {
  id: string;
  title: string;
  game: string;
  date: string;
  time: string;
  location: string;
  participants: string;
  image: string;
}

const TournamentCard: React.FC<TournamentCardProps> = ({
  id,
  title,
  game,
  date,
  time,
  location,
  participants,
  image,
}) => {
  return (
    <div className="bg-udgDark-light glass rounded-xl overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-udgDark-dark to-transparent" />
        <div className="absolute top-4 left-4 px-3 py-1 bg-udgBlue/80 backdrop-blur-sm rounded-full">
          <span className="text-xs font-medium text-white">{game}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-3 text-white">{title}</h3>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-white/70">
            <Calendar size={16} className="mr-2 text-udgBlue" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-white/70">
            <Clock size={16} className="mr-2 text-udgBlue" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center text-white/70">
            <MapPin size={16} className="mr-2 text-udgBlue" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center text-white/70">
            <Users size={16} className="mr-2 text-udgBlue" />
            <span className="text-sm">{participants}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Trophy size={16} className="text-udgBlue mr-2" />
            <span className="text-xs font-medium text-white/80">Prize Pool Available</span>
          </div>
          <Link
            to={`/tournaments/${id}`}
            className="flex items-center text-udgBlue text-sm font-medium hover:underline"
          >
            View Details
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeaturedTournaments: React.FC = () => {
  const tournaments = [
    {
      id: 'bgmi-championship',
      title: 'BGMI Pro Championship',
      game: 'BGMI',
      date: 'June 15-18, 2023',
      time: '14:00 - 19:00 IST',
      location: 'Online',
      participants: '128 Teams',
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
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070',
    },
  ];

  return (
    <section className="py-20 bg-udgDark-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-medium text-udgBlue uppercase tracking-wider">Compete with the best</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-white">Featured Tournaments</h2>
          </div>
          <Link
            to="/tournaments"
            className="mt-4 md:mt-0 flex items-center text-udgBlue font-medium hover:underline"
          >
            View All Tournaments
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              {...tournament}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTournaments;
