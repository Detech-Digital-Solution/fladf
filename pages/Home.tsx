import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { impactStories } from './Impact';

const slides = [
  {
    id: 1,
    type: "announcement",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=2000",
    title: "February Town Hall",
    description: "Join us for our monthly town hall where we discuss upcoming initiatives. This month, we are focusing on our new clean water projects.",
    stats: [
      { label: "Date", value: "Feb 24" },
      { label: "Time", value: "2:00 PM" }
    ],
    linkText: "Join Event",
    link: "/announcements?id=feb-town-hall"
  },
  {
      id: 2,
      type: "news",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
      title: "Fall Impact Assessment",
      description: "Our comprehensive report on the summer outreach programs is now available. We analyze the data to understand what worked and how we are adapting.",
      stats: [
         { label: "Category", value: "Report" },
         { label: "Status", value: "New" }
      ],
      linkText: "Read Full News",
      link: "/latest-updates?id=fall-impact-assessment"
    }
];

const partners = [
    // Row 1
    { name: "UNICEF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Unicef_logo.svg/1024px-Unicef_logo.svg.png", height: "h-16" },
    { name: "WWF", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/WWF_logo.svg/1200px-WWF_logo.svg.png", height: "h-20" },
    { name: "Red Cross", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Red_Cross_logo.svg/1200px-American_Red_Cross_logo.svg.png", height: "h-16" },
    { name: "Save The Children", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Save_the_Children_logo.svg/1200px-Save_the_Children_logo.svg.png", height: "h-16" },
    { name: "UNESCO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/UNESCO_Logo.svg/2560px-UNESCO_Logo.svg.png", height: "h-16" },
    // Row 2
    { name: "WHO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1200px-WHO_logo.svg.png", height: "h-20" },
    { name: "WFP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/WFP_logo.svg/1200px-WFP_logo.svg.png", height: "h-20" },
    { name: "Oxfam", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Oxfam_logo.svg/1200px-Oxfam_logo.svg.png", height: "h-14" },
    { name: "Habitat for Humanity", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Habitat_for_humanity_logo.svg/1200px-Habitat_for_humanity_logo.svg.png", height: "h-16" },
    { name: "Mercy Corps", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mercy_Corps_logo.svg/1200px-Mercy_Corps_logo.svg.png", height: "h-16" },
    // Row 3
    { name: "World Vision", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/World_Vision_logo.svg/1200px-World_Vision_logo.svg.png", height: "h-14" },
    { name: "Doctors Without Borders", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Msf_logo.svg/1200px-Msf_logo.svg.png", height: "h-16" },
    { name: "CARE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/CARE_logo.svg/1200px-CARE_logo.svg.png", height: "h-16" },
    { name: "Plan International", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Plan_International_logo.svg/1200px-Plan_International_logo.svg.png", height: "h-16" },
    { name: "ActionAid", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/ActionAid_logo.svg/1200px-ActionAid_logo.svg.png", height: "h-16" },
];

const PartnerRow = ({ items, direction }: { items: typeof partners, direction: 'left' | 'right' }) => {
    // Duplicate the items 4 times to ensure we have enough content to scroll smoothly on large screens
    // The animation moves -50% of the total width. So we need 2 identical halves.
    // Each half is [...items, ...items].
    // Total content = [...items, ...items, ...items, ...items]
    const scrollItems = [...items, ...items, ...items, ...items];
    
    return (
        <div className="w-full overflow-hidden flex relative">
            <div className={`flex items-center gap-16 md:gap-24 py-6 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
                {scrollItems.map((partner, idx) => (
                    <div key={idx} className="flex-shrink-0 w-48 h-24 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                         <img src={partner.logo} alt={partner.name} className={`${partner.height} w-auto object-contain`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Home: React.FC = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=3538", // Hands together
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=3432", // Friends group
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=3538"  // Diverse meeting
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();

  // Community Voices Animation State
  // Initially show first two stories
  const [visibleIndices, setVisibleIndices] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, [currentSlide]);

  // Logic to randomly update one of the testimonial cards
  useEffect(() => {
     const interval = setInterval(() => {
        setVisibleIndices(prev => {
            // Pick which slot to update (0 or 1)
            const slotToUpdate = Math.floor(Math.random() * 2);
            
            // Get current indices
            const currentIdx0 = prev[0];
            const currentIdx1 = prev[1];
            
            // Available indices from impactStories that are NOT currently shown
            const availableIndices = impactStories
                .map((_, i) => i)
                .filter(i => i !== currentIdx0 && i !== currentIdx1);
            
            if (availableIndices.length === 0) return prev;

            // Pick a random new story
            const randomNewIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
            
            // Return new state
            if (slotToUpdate === 0) {
                return [randomNewIndex, currentIdx1];
            } else {
                return [currentIdx0, randomNewIndex];
            }
        });
     }, 5000); // Change every 5 seconds
     return () => clearInterval(interval);
  }, []);

  // Handle Hash Scrolling
  useEffect(() => {
      if (location.hash) {
          const id = location.hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
              setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
              }, 100);
          }
      }
  }, [location]);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const contentCards = [
    {
      title: ["Character", "Development"],
      desc: "Fostering integrity, resilience, and ethical leadership to empower individuals to make positive choices."
    },
    {
      title: ["Personality", "Enhancement"],
      desc: "Workshops designed to build confidence, emotional intelligence, and interpersonal skills for personal growth."
    },
    {
      title: ["English", "Proficiency"],
      desc: "Advanced language training to master global communication and unlock international opportunities."
    }
  ];

  const activeSlide = slides[currentSlide];

  // Split partners into 3 rows
  const row1 = partners.slice(0, 5);
  const row2 = partners.slice(5, 10);
  const row3 = partners.slice(10, 15);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[750px] flex items-center overflow-hidden bg-neutral">
        {/* Background Slider */}
        {heroImages.map((img, index) => (
          <div 
             key={index}
             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
             <img src={img} alt="Community Impact" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}

        {/* Frosted Glass Content Bar */}
        <div className="absolute bottom-10 left-0 w-full z-20">
            {/* Restored glassy effect and height, now lifted with bottom gap */}
            <div className="w-full bg-secondary/20 backdrop-blur-xl border-y border-white/20 shadow-[0_-4px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
                    {contentCards.map((card, idx) => (
                        <div 
                            key={idx}
                            className="flex flex-col items-center justify-center py-12 px-6 hover:bg-white/10 transition-all duration-500 group cursor-default select-none outline-none"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                           <h3 className="text-white font-display font-bold text-xl lg:text-2xl tracking-wide uppercase drop-shadow-md text-center group-hover:-translate-y-2 transition-transform duration-500">
                               {card.title[0]}<br/>{card.title[1]}
                           </h3>
                           <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out w-full max-w-sm">
                                <div className="overflow-hidden">
                                    <p className="text-white/90 text-center font-light text-sm md:text-base leading-relaxed mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {card.desc}
                                    </p>
                                </div>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Dynamic Impact/News Slider */}
      <section id="latest-updates" className="py-32 bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-secondary">Latest Updates</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="relative group/slider">
             {/* Navigation Controls */}
             <button 
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-12 lg:-left-20 z-20 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white border border-gray-100 text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all shadow-xl hover:scale-110 active:scale-95"
                aria-label="Previous update"
             >
                <span className="material-symbols-outlined text-3xl">chevron_left</span>
             </button>

             <button 
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-12 lg:-right-20 z-20 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white border border-gray-100 text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all shadow-xl hover:scale-110 active:scale-95"
                aria-label="Next update"
             >
                <span className="material-symbols-outlined text-3xl">chevron_right</span>
             </button>

             <div className="min-h-[500px]">
                {/* Key on the container to force re-render animation when slide changes */}
                <div key={activeSlide.id} className="grid lg:grid-cols-2 gap-20 items-center animate-fade-in-up">
                    <div className="order-2 lg:order-1 relative group">
                    {/* Image Container with specific styling from screenshot */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] w-full">
                        <img
                            alt={activeSlide.title}
                            className="w-full h-full object-cover"
                            src={activeSlide.image}
                        />
                        {/* Dark overlay specifically for the image to make it look like the reference */}
                        <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
                        
                        {/* Announcement/News Badge */}
                        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full z-20 shadow-lg">
                            <span className="text-primary font-bold text-xs uppercase tracking-widest">
                                {activeSlide.type === 'announcement' ? 'Announcement' : 'Latest News'}
                            </span>
                        </div>
                    </div>
                    {/* Decorative background element behind image */}
                    <div className="absolute -inset-4 bg-secondary/5 rounded-[2.5rem] -z-10 transform rotate-2"></div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                    <h3 className="text-4xl font-bold text-secondary/80 font-display leading-tight">{activeSlide.title}</h3>
                    <p className="text-lg text-neutral-light/70 leading-relaxed font-light">
                        {activeSlide.description}
                    </p>
                    
                    {/* Updated Stats Styling to match screenshot (Salmon Pink) */}
                    <div className="grid grid-cols-2 gap-12 border-t border-gray-100 pt-8 pb-4">
                        {activeSlide.stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-4xl md:text-5xl font-display font-bold text-[#E07A7A] mb-2">{stat.value}</span>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2">
                        <Link to={activeSlide.link} className="inline-flex items-center gap-2 text-secondary/70 font-bold hover:text-primary hover:gap-3 transition-all">
                        {activeSlide.linkText} <span className="material-symbols-outlined text-lg">chevron_right</span>
                        </Link>
                    </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Community Outreach (Carousel-ish) */}
      <section id="community-outreach" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-secondary">Community Outreach</h2>
              <p className="text-neutral-light text-lg font-light">Transformative projects around the globe</p>
            </div>
            <div className="flex gap-3">
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-secondary hover:bg-gray-50 transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-opacity-90 transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-12 custom-scrollbar snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
            {[{
                id: 'clean-water-initiative',
                title: "Clean Water Initiative",
                desc: "Implementing sustainable filtration systems in remote villages across Sub-Saharan Africa.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC868qfgo_LkJ1T6Aa-CGyhobX-Raj4mfu3yEaXkFpzEWtl8135X9cJYeOswuJN3FQ3LHaINFLE0guv9zQKi6fywqXGs3xp7sbcGRsuLPMpRCt1488WrPqNcF6FhQEi1v0VYMG3jtSLXEqYfk68ljTZWd24LYGDJ-x0acR7K9X8XD4c5e_iBZ1OnZRYXZH1yIqSKA4Iwi1PBi5_37uqEGYtBgJswVm5G0dtf-5dtjq3GRCoWemTVLfBSWal_6a4D4XOMMZWNWoTZ5Wr"
            }, {
                id: 'education-first',
                title: "Education First",
                desc: "Building smart classrooms and providing digital literacy training to underprivileged youth.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfIhV-15Kypay6xBTK98dgjCUo0QGfETNHnA9Ui1T9KpY26eXCqEVkWOOO2nEr83yLmuqjVxnS7jruwfWO83j-pSgPgFx2urKyX85KDLxPGTPWp1tXqNIx7yUzoAMKdxkN2gB7QTYGL_39b5VWZHNV2g5wvO59qZO3BvAaqnCgFDUAblE91v0OrngiJQFMdvRQ4Ve3VF419p00tG4ZyPQOFwTlKfaFv_A85XvBHNFmpCZXr2TwC3JMakHO_jQCNu-oNBPjOvp1eLKA"
            }, {
                id: 'urban-farming',
                title: "Urban Farming",
                desc: "Reclaiming urban spaces to create sustainable food sources for metropolitan communities.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL5QW8rMSNdnUU8cFCjKiwjXSuUmfBwDXF81RcAUEh7PqathQ3TzmW4g9pZbURwDod7wjKNlYsU1_dG3OobGPAoDo_zqQQ2I4LeHKxPS9mD6y28M_3OyiIEoLl224H4PGuwRZR6413ys84_e13CnjYyk6WOZcWV3nNSSSM7lhS7SeTBymiDjbH2oUGp-SD69pY2gS8Jarl4A5SIoJGvfvYVCPTj2fkbsvMfuZukyZewf4ZN8JV9r4q5Wi9XkzXsM6zXAeCQ_iD6uLi"
            }].map((project, idx) => (
                <div key={idx} className="min-w-[340px] md:min-w-[420px] bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-hover transition-all duration-300 snap-center group">
                <div className="relative overflow-hidden h-64">
                    <img alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src={project.img} />
                </div>
                <div className="p-8">
                    <h4 className="text-xl font-display font-bold mb-3 text-secondary">{project.title}</h4>
                    <p className="text-neutral-light text-sm leading-relaxed mb-6 font-light">{project.desc}</p>
                    <Link to={`/outreach?id=${project.id}`} className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Read Project Details <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
                </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-20 border-y border-gray-100 bg-white overflow-hidden">
        <div className="w-full">
          <h3 className="text-center font-body text-sm font-bold mb-16 text-gray-400 uppercase tracking-[0.2em]">Our Trusted Partners</h3>
          <div className="space-y-4">
              <PartnerRow items={row1} direction="left" />
              <PartnerRow items={row2} direction="right" />
              <PartnerRow items={row3} direction="left" />
          </div>
        </div>
      </section>

      {/* Latest Newsletter - UPDATED TO MATCH REFERENCE */}
      <section id="newsletter" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold mb-4 text-secondary">Latest Newsletter</h2>
                <p className="text-neutral-light font-light text-lg">Stay informed about our work and impact</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[{
                    date: "January 2026",
                    title: "New Year, New Initiatives",
                    desc: "Discover our exciting plans for 2026 and how you can be part of the change.",
                    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
                }, {
                    date: "December 2025",
                    title: "Year in Review",
                    desc: "Celebrating our accomplishments and the amazing community that made it possible.",
                    img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800"
                }, {
                    date: "November 2025",
                    title: "Community Stories",
                    desc: "Hear from members whose lives were transformed through our programs.",
                    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                }].map((news, i) => (
                    <div key={i} className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="h-64 overflow-hidden">
                            <img alt={news.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src={news.img} />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="text-primary text-sm font-bold mb-3 block">{news.date}</span>
                            <h4 className="text-2xl font-display font-bold text-secondary mb-4 leading-tight">{news.title}</h4>
                            <p className="text-slate-500 text-base leading-relaxed mb-6 flex-grow">{news.desc}</p>
                            <Link to="/newsletter" className="inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform">
                                Read More <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-16 text-center">
                <Link to="/newsletter" className="inline-block px-8 py-3 rounded-lg border border-gray-200 text-secondary font-bold hover:bg-gray-50 transition-colors">
                    View All Newsletters
                </Link>
            </div>
        </div>
      </section>

      {/* Community Voices */}
      <section id="community-voices" className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-20">Community Voices</h2>
            <div className="grid md:grid-cols-2 gap-12">
                {visibleIndices.map((index) => {
                    const story = impactStories[index];
                    return (
                        <Link 
                            to={`/impact?id=${story.id}`} 
                            key={`${story.id}-${index}`} // Key includes story ID to trigger animation on change
                            className="block bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md relative hover:bg-white/10 transition-colors group cursor-pointer animate-fade-in-up"
                        >
                            <span className="material-symbols-outlined text-primary text-7xl absolute -top-5 -left-4 opacity-100 bg-secondary rounded-full p-2">format_quote</span>
                            
                            <div className="mt-8 mb-6">
                                <h4 className="text-2xl font-bold mb-4 font-display text-white">{story.title}</h4>
                                <p className="text-lg font-light text-gray-300 leading-relaxed min-h-[84px]">"{story.quote}"</p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                                <img alt={story.author} className="w-12 h-12 rounded-full ring-2 ring-primary object-cover" src={story.img} />
                                <div>
                                    <p className="font-bold text-white group-hover:underline">{story.author}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">{story.role}</p>
                                </div>
                                <span className="ml-auto material-symbols-outlined text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">arrow_forward</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
      </section>

       {/* FAQ */}
       <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="font-display text-4xl font-bold mb-6 text-secondary">Common Questions</h2>
                    <p className="text-neutral-light mb-10 text-lg font-light leading-relaxed">Find answers to the most frequent inquiries about our operations and how you can get involved.</p>
                    <Link to="/contact" className="inline-block px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-red-700 hover:shadow-lg transition-all">Ask your question</Link>
                </div>
                <div className="space-y-6">
                    {[{
                        q: "How are the donations allocated?",
                        a: "90% of all donations go directly to our active outreach projects, with 10% supporting operational sustainability."
                    }, {
                        q: "Can I volunteer internationally?",
                        a: "Yes, we have programs across four continents. Apply through our Participate portal above."
                    }, {
                        q: "Who can partner with the Forum?",
                        a: "We welcome both corporate entities and individual grassroots organizations that align with our core mission."
                    }].map((item, idx) => (
                         <div key={idx} className="border-b border-gray-100 pb-6">
                            <button className="w-full text-left font-bold text-secondary text-lg mb-2 flex justify-between items-center group">
                                {item.q}
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">expand_more</span>
                            </button>
                            <p className="text-neutral-light text-sm leading-relaxed font-light pl-1">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
       </section>
    </>
  );
};

export default Home;