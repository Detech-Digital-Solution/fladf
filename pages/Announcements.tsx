import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Announcement } from '../types';

const announcementsData: Announcement[] = [
  {
    id: 'feb-town-hall',
    title: 'February Town Hall: Community Voices',
    date: 'February 24, 2024 • 2:00 PM EST',
    location: 'Virtual via Google Meet',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=2000',
    description: 'Join us for our monthly town hall where we discuss upcoming initiatives, review the past month\'s impact, and open the floor for community questions. This month, we are focusing on our new clean water projects.',
    details: [
      'Agenda Item 1: Q1 Impact Report Review',
      'Agenda Item 2: Guest Speaker Dr. Alisha Jones',
      'Agenda Item 3: Open Floor Q&A'
    ],
    link: 'https://meet.google.com/',
    linkText: 'Join Google Meet'
  },
  {
    id: 'volunteer-orientation',
    title: 'New Volunteer Orientation',
    date: 'March 1, 2024 • 10:00 AM EST',
    location: '123 Global Plaza, Geneva (Room 4B)',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=2000',
    description: 'A mandatory session for all new volunteers joining the Spring cohort. We will cover safety protocols, our code of conduct, and break out into teams.',
    details: [
      'Bring a valid ID for check-in',
      'Lunch will be provided',
      'Wear comfortable clothing'
    ],
    link: '#',
    linkText: 'Register Now'
  },
  {
    id: 'fundraising-gala',
    title: 'Annual Charity Gala 2024',
    date: 'April 15, 2024 • 6:00 PM EST',
    location: 'The Grand Hotel Ballroom',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000',
    description: 'Our biggest night of the year! Celebrate our achievements and help us raise funds for the next year of operations. Black tie attire requested.',
    details: [
      'Live Music & Entertainment',
      'Silent Auction',
      'Keynote Address by CEO Arthur Sterling'
    ],
    link: '#',
    linkText: 'Buy Tickets'
  }
];

const Announcements: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const activeAnnouncement = announcementsData.find(a => a.id === id);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (activeAnnouncement) {
    return (
      <div className="bg-background-subtle min-h-screen">
        <header className="bg-secondary text-white py-12">
            <div className="max-w-4xl mx-auto px-4">
                <Link to="/announcements" className="inline-flex items-center text-gray-300 hover:text-white mb-6 text-sm font-medium transition-colors">
                    <span className="material-symbols-outlined text-lg mr-1">arrow_back</span>
                    Back to All Announcements
                </Link>
                <div className="flex flex-wrap gap-4 items-center text-sm text-primary font-bold uppercase tracking-wider mb-2">
                    <span className="bg-white px-3 py-1 rounded-full">Announcement</span>
                    <span className="text-gray-300 normal-case font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">calendar_month</span>
                        {activeAnnouncement.date}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold">{activeAnnouncement.title}</h1>
            </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 -mt-8 pb-20 relative z-10">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="aspect-video w-full relative">
                    <img src={activeAnnouncement.image} alt={activeAnnouncement.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white flex items-center gap-2 font-medium backdrop-blur-md bg-black/30 px-4 py-2 rounded-lg">
                        <span className="material-symbols-outlined">location_on</span>
                        {activeAnnouncement.location}
                    </div>
                </div>
                
                <div className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-secondary mb-4">Event Overview</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
                        {activeAnnouncement.description}
                    </p>

                    <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-100">
                        <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">format_list_bulleted</span>
                            Key Details & Preparation
                        </h3>
                        <ul className="space-y-3">
                            {activeAnnouncement.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {activeAnnouncement.link && (
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a 
                                href={activeAnnouncement.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-500/20"
                            >
                                {activeAnnouncement.linkText}
                                <span className="material-symbols-outlined text-xl">open_in_new</span>
                            </a>
                            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-secondary rounded-xl font-bold hover:bg-gray-50 transition-all">
                                Add to Calendar
                                <span className="material-symbols-outlined text-xl">event</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-background-light min-h-screen">
        <header className="bg-white border-b border-gray-200 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block animate-fade-in-up">Stay Connected</span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary mb-6 animate-fade-in-up delay-100">Announcements & Events</h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto animate-fade-in-up delay-200">
                    Keep up to date with our town halls, volunteer opportunities, and special events happening around the globe.
                </p>
            </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {announcementsData.map((item) => (
                    <Link 
                        to={`/announcements?id=${item.id}`} 
                        key={item.id}
                        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wide">
                                Upcoming
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="mb-4">
                                <h3 className="text-xl font-display font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">event</span>
                                    {item.date.split('•')[0]}
                                </p>
                            </div>
                            <p className="text-slate-600 text-sm line-clamp-3 mb-6 font-light">{item.description}</p>
                            <div className="mt-auto pt-6 border-t border-gray-50 w-full flex justify-between items-center text-primary font-bold text-sm">
                                View Details
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    </div>
  );
};

export default Announcements;