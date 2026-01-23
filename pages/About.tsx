import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="relative h-[65vh] min-h-[500px] flex items-center justify-center text-white bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.7)), url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=3400)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>
        
        {/* Link to Home */}
        <div className="absolute top-10 left-4 sm:left-8 z-20">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors font-medium text-sm group">
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/10">
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                </span>
                <span className="hidden sm:inline">Back to Home</span>
            </Link>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wide mb-6">EST. 2015</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight font-display">
            United for <span className="text-blue-400">Change</span>.
          </h1>
          <p className="text-lg md:text-2xl font-light text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Building a future where community and impact fly high together. We are the bridge between resources and reality.
          </p>
        </div>
      </header>

      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 -z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">Driving Social Impact</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
                { title: "Character Development", icon: "psychology", color: "primary", desc: "Fostering integrity, resilience, and ethical leadership to empower individuals to make positive choices." },
                { title: "Personality Enhancement", icon: "sentiment_satisfied", color: "accent", desc: "Workshops designed to build confidence, emotional intelligence, and interpersonal skills for personal growth." },
                { title: "English Proficiency", icon: "translate", color: "secondary", desc: "Advanced language training to master global communication and unlock international opportunities." }
            ].map((item, idx) => (
                <div key={idx} className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color === 'primary' ? 'from-primary to-blue-400' : item.color === 'accent' ? 'from-accent to-red-400' : 'from-secondary to-slate-400'} rounded-t-2xl`}></div>
                    <div className={`w-16 h-16 ${item.color === 'primary' ? 'bg-blue-50' : item.color === 'accent' ? 'bg-red-50' : 'bg-slate-100'} rounded-2xl flex items-center justify-center mb-8 group-hover:${item.color === 'primary' ? 'bg-primary' : item.color === 'accent' ? 'bg-accent' : 'bg-secondary'} transition-colors duration-300`}>
                        <span className={`material-symbols-outlined ${item.color === 'primary' ? 'text-primary' : item.color === 'accent' ? 'text-accent' : 'text-secondary'} text-3xl group-hover:text-white transition-colors`}>{item.icon}</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-slate-900 font-display">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-200/50 rounded-full blur-3xl"></div>
                    <img alt="Founder Arthur Sterling" className="relative z-10 w-full h-auto object-cover rounded-[2rem] shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrYUCg6oDHpeF5KfZHEIsMcd6q64m0ZQLKBu2YSP9_dgd-izZk0bTMT3Ua5NQ5NqeEpvnuOjU01TAFeTJtmS-HW1zVmXem1-j9vqB7OMbbUP-OeWzo9-vPfGdJXvHOwmN_YuG1MKeNcppxBtgYgjvbRyXnB147ivRI2u6l1PyG3wIjuJhBgRxaHR_rHg8OcOuKWIsc5zsbzYl2nWmWE-j9Fu40rXoXBe2bu3nmhiVag9go-d1lDM4xMVyOp5FnkpRWLtfyXtG2dKIV" />
                    <div className="absolute -bottom-8 -right-4 md:-right-12 z-20 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-primary hidden md:block">
                        <p className="text-slate-700 italic text-sm font-medium">"It started with a single flag—a symbol of identity and home."</p>
                        <p className="text-slate-400 text-xs mt-2 font-bold uppercase">- Arthur Sterling</p>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight font-display">The Founder's <span className="relative inline-block">Story<span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"></span></span></h2>
                    <div className="prose prose-lg text-slate-600">
                        <p className="mb-6">The Flag Forum was born from a realization that many communities felt unheard and unrepresented. Our founder, <strong>Arthur Sterling</strong>, witnessed firsthand the power of collective action during a local outreach program in 2015.</p>
                        <p className="mb-6">What began as a small forum for discussion quickly evolved into a platform for action. Arthur's vision was to create a 'neutral ground' where resources could be shared efficiently, moving away from bureaucratic hurdles toward direct community impact.</p>
                        <p>Today, that same spirit of personal connection drives every project we undertake. We aren't just an organization; we are a community of thousands, united under the banner of progress.</p>
                    </div>
                    <div className="mt-10">
                        <div className="font-display font-medium text-2xl text-slate-400 italic">Arthur Sterling</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">Supervisory Board</h2>
                <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Guiding our strategic direction with integrity and experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {name: "Sarah Jenkins", role: "Chairperson", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"},
                    {name: "Dr. Marcus Wei", role: "Ethics & Compliance", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"},
                    {name: "Elena Rodriguez", role: "Strategic Operations", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"},
                    {name: "James Thompson", role: "Financial Oversight", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"}
                ].map((member, idx) => (
                    <div key={idx} className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
                        <div className="aspect-[4/5] overflow-hidden relative">
                             <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10"></div>
                             <img alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={member.img} />
                        </div>
                        <div className="p-6 text-center border-t border-slate-50 relative z-20 bg-white">
                            <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                            <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">The Team</h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">Dedicated professionals working tirelessly to make our vision a reality.</p>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {[
                    {
                        name: "Jennifer Liu", 
                        role: "Communications Director", 
                        desc: "Jennifer leads our global messaging strategy, ensuring our stories reach the right audiences with clarity and impact.",
                        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                    },
                    {
                        name: "David Martinez", 
                        role: "Program Coordinator", 
                        desc: "David oversees on-the-ground operations for our education initiatives, managing logistics and partner relationships.",
                        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
                    },
                    {
                        name: "Emily Johnson", 
                        role: "Volunteer Manager", 
                        desc: "Emily coordinates our thousands of volunteers worldwide, matching passion with purpose to drive efficiency.",
                        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600"
                    },
                    {
                        name: "Alex Kim", 
                        role: "Community Outreach", 
                        desc: "Alex focuses on building trust within new regions, facilitating dialogue and understanding local needs.",
                        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
                    },
                    {
                        name: "Rachel Green", 
                        role: "Development Officer", 
                        desc: "Rachel spearheads our fundraising efforts, securing the vital resources needed to expand our mission.",
                        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
                    },
                    {
                        name: "Thomas Anderson", 
                        role: "Operations Manager", 
                        desc: "Thomas ensures our internal systems run smoothly, from finance to HR, optimizing our organizational health.",
                        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
                    }
                ].map((member, idx) => (
                    <div key={idx} className="flex bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-1/3 min-w-[120px] md:min-w-[150px] relative overflow-hidden">
                             <img 
                                alt={member.name} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                src={member.img} 
                             />
                             <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                        </div>
                        <div className="w-2/3 p-6 flex flex-col justify-center">
                             <h5 className="font-bold text-slate-900 text-xl font-display mb-1">{member.name}</h5>
                             <p className="text-primary font-medium text-sm mb-3 uppercase tracking-wide">{member.role}</p>
                             <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
                        </div>
                    </div>
                ))}
             </div>
        </div>
      </section>
    </div>
  );
};

export default About;