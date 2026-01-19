import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=3538", // Hands together
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=3432", // Friends group
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=3538"  // Diverse meeting
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
             <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for text readability */}
          </div>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
          <div className="max-w-3xl">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full mb-8 animate-fade-in-up shadow-lg shadow-red-900/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-white text-sm font-bold tracking-wide">New announcement: Join our February town hall!</span>
             </div>
             
             <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight text-white mb-8 tracking-tight animate-fade-in-up delay-100">
               Building Bridges,<br />
               Empowering Communities
             </h1>
             
             <p className="text-xl text-gray-200 leading-relaxed font-light mb-10 max-w-2xl animate-fade-in-up delay-200">
               A platform for open dialogue, collaborative action, and meaningful change in our communities.
             </p>
             
             <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
               <Link 
                 to="/announcements?id=feb-town-hall" 
                 className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-base hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 flex items-center gap-2 group"
               >
                 Learn More 
                 <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-32 bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-secondary">Our Measurable Impact</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-secondary rounded-3xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <img
                alt="Volunteers working"
                className="relative rounded-3xl shadow-lg w-full h-[500px] object-cover bg-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLZez3KCvDI7NWc_PXt-0hOu99FbZfp3D2g9z7PgE4eGhmPTDQvxgWgbIe88g8g6ca6fWHsljbNJcgdftK63bsgiI73jzrFvh-nHzKP1NrsDPEAe1IMjfkUevTxPk1Y75Z49QSWg8J-S2wD_NFl97kxLI6-c_eW7e0z6BNy-ukM3g4HRKrNEHMLVxm_GP3IzjD07QZcWHav-7eolKjDCH6tJ7OWDDZE7IFaFGHCyqPYUxbjRHowfVX1qjIczBknunvQVTv1qhKpHIg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-3xl font-bold text-secondary leading-tight">Driving Change Across Continents</h3>
              <p className="text-lg text-neutral-light leading-relaxed font-light">
                Our initiatives focus on sustainable development and community outreach. We've disrupted traditional aid models to create lasting value through localized action.
              </p>
              <div className="grid grid-cols-2 gap-10 border-t border-gray-200 pt-8">
                <div>
                  <span className="text-5xl font-display font-bold text-primary block mb-1">50k+</span>
                  <p className="text-xs font-semibold text-secondary uppercase tracking-widest">Lives Touched</p>
                </div>
                <div>
                  <span className="text-5xl font-display font-bold text-primary block mb-1">120+</span>
                  <p className="text-xs font-semibold text-secondary uppercase tracking-widest">Global Partners</p>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary hover:gap-3 transition-all">
                  Contact us to get involved <span className="material-symbols-outlined text-lg">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Outreach (Carousel-ish) */}
      <section className="py-32 bg-white overflow-hidden">
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

      {/* Partners */}
      <section className="py-20 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-body text-sm font-semibold mb-12 text-gray-400 uppercase tracking-[0.2em]">Our Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Unicef_logo.svg/1024px-Unicef_logo.svg.png" alt="UNICEF" className="h-12 object-contain" />
             <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/24/WWF_logo.svg/1200px-WWF_logo.svg.png" alt="WWF" className="h-16 object-contain" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Red_Cross_logo.svg/1200px-American_Red_Cross_logo.svg.png" alt="Red Cross" className="h-12 object-contain" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Save_the_Children_logo.svg/1200px-Save_the_Children_logo.svg.png" alt="Save The Children" className="h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Latest Newsletter - UPDATED TO MATCH REFERENCE */}
      <section className="py-32 bg-white">
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
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-20">Community Voices</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <Link to="/impact?id=sarah-jenkins" className="block bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md relative hover:bg-white/10 transition-colors group cursor-pointer">
                    <span className="material-symbols-outlined text-primary text-6xl absolute -top-5 -left-4 opacity-80 bg-secondary rounded-full">format_quote</span>
                    <h4 className="text-xl font-bold mb-4 font-display">Life-changing Support</h4>
                    <p className="text-lg mb-8 font-light text-gray-200 leading-relaxed">"The Forum's commitment to our local project was the catalyst we needed to reach sustainability. Their guidance and network are unparalleled."</p>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                        <img alt="Sarah J." className="w-12 h-12 rounded-full ring-2 ring-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC058TYOGVrNBtHjvlqjNo_RLirR-ZUPO-YdbIWsNWo-Rs4Q7yE5Yx3y0HWzwhdinhrAQYxLqCF4GNMoWCTLh1iLdOJEAfV3H3shrhMvQBnmX5TZEk9d6P_uMz8qGrOptXbb_sE5a9nE5hVjhXedy46Q5YGoA-QYW7fE8VkjRMbjNhj9dsuyM6L6K-44NeEFK5536H7ItP8Zry-RfZA5bkwL43nL1XUFJQ_lNZOdzl61toahJvdKNwhGtWfgPu_lXGucX1ftcU_BtRx" />
                        <div>
                            <p className="font-bold text-white group-hover:underline">Sarah Jenkins</p>
                            <p className="text-xs text-gray-300 uppercase tracking-wider">Project Director, Oasis Hub</p>
                        </div>
                        <span className="ml-auto material-symbols-outlined text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </div>
                </Link>
                <Link to="/impact?id=mark-davidson" className="block bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md relative hover:bg-white/10 transition-colors group cursor-pointer">
                    <span className="material-symbols-outlined text-primary text-6xl absolute -top-5 -left-4 opacity-80 bg-secondary rounded-full">format_quote</span>
                    <h4 className="text-xl font-bold mb-4 font-display">Strategic Partnership</h4>
                    <p className="text-lg mb-8 font-light text-gray-200 leading-relaxed">"Working with The Flag Forum has bridged gaps between our corporate social goals and on-the-ground needs in ways we never thought possible."</p>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                        <img alt="Mark D." className="w-12 h-12 rounded-full ring-2 ring-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn_92hgJyBUFdCGahFvh0MZXV_KYYTFmFyysQeUSpb-Dfj6ZyUxJMGt-dKenW7nFe9w-jEqufRx9FSYWlCLxk1OpRe389IO0bk7AzKskjTQ6D3AJ3tcZZIDMba20oBmmJuMYh1BwIYLe6qHOWy-Oh42pGpHfrzwrSu33_mf-hh30V-hdrG5i7-NJRlnRWe87iesZ4hQ3MXYixNCzMhO6N_8jnU4zLoVROBMKcqAWz-Z-mchwGWcLCFu2H6ojDb3CZdqU_gBd1wqgt7" />
                        <div>
                            <p className="font-bold text-white group-hover:underline">Mark Davidson</p>
                            <p className="text-xs text-gray-300 uppercase tracking-wider">Head of CSR, Global Tech</p>
                        </div>
                         <span className="ml-auto material-symbols-outlined text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </div>
                </Link>
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