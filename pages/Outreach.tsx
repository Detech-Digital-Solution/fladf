import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 'clean-water-initiative',
    title: "Clean Water Initiative",
    category: "Infrastructure",
    description: "Implementing sustainable filtration systems in remote villages across Sub-Saharan Africa.",
    content: "Access to clean water is a fundamental human right, yet millions lack it. Our Clean Water Initiative focuses on installing solar-powered filtration systems and digging sustainable wells in remote communities. We work closely with local engineers to ensure that the infrastructure can be maintained by the community long-term. Beyond installation, we provide hygiene education workshops to maximize the health benefits of the new water sources.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC868qfgo_LkJ1T6Aa-CGyhobX-Raj4mfu3yEaXkFpzEWtl8135X9cJYeOswuJN3FQ3LHaINFLE0guv9zQKi6fywqXGs3xp7sbcGRsuLPMpRCt1488WrPqNcF6FhQEi1v0VYMG3jtSLXEqYfk68ljTZWd24LYGDJ-x0acR7K9X8XD4c5e_iBZ1OnZRYXZH1yIqSKA4Iwi1PBi5_37uqEGYtBgJswVm5G0dtf-5dtjq3GRCoWemTVLfBSWal_6a4D4XOMMZWNWoTZ5Wr",
    location: "Sub-Saharan Africa",
    stats: [
        { label: "Wells Built", value: "45" },
        { label: "People Served", value: "12,000+" },
        { label: "Maintenance Teams", value: "15" }
    ]
  },
  {
    id: 'education-first',
    title: "Education First",
    category: "Education",
    description: "Building smart classrooms and providing digital literacy training to underprivileged youth.",
    content: "The digital divide is widening, leaving many students behind. Our Education First program revitalizes existing school structures into 'Smart Classrooms' equipped with internet access, tablets, and solar power. We pair this infrastructure with a comprehensive coding and digital literacy curriculum taught by volunteer experts. Our goal is to prepare the next generation for the global digital economy.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfIhV-15Kypay6xBTK98dgjCUo0QGfETNHnA9Ui1T9KpY26eXCqEVkWOOO2nEr83yLmuqjVxnS7jruwfWO83j-pSgPgFx2urKyX85KDLxPGTPWp1tXqNIx7yUzoAMKdxkN2gB7QTYGL_39b5VWZHNV2g5wvO59qZO3BvAaqnCgFDUAblE91v0OrngiJQFMdvRQ4Ve3VF419p00tG4ZyPQOFwTlKfaFv_A85XvBHNFmpCZXr2TwC3JMakHO_jQCNu-oNBPjOvp1eLKA",
    location: "Southeast Asia & South America",
    stats: [
        { label: "Schools Upgraded", value: "32" },
        { label: "Tablets Donated", value: "5,000" },
        { label: "Graduates", value: "1,200" }
    ]
  },
  {
    id: 'urban-farming',
    title: "Urban Farming",
    category: "Sustainability",
    description: "Reclaiming urban spaces to create sustainable food sources for metropolitan communities.",
    content: "Food deserts in major cities contribute to poor health outcomes. Our Urban Farming project transforms vacant lots and rooftops into lush, productive gardens. These spaces not only provide fresh, organic produce to local residents at affordable prices but also serve as community hubs for education on nutrition and sustainability. We employ local youth to manage the gardens, providing green jobs and mentorship.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL5QW8rMSNdnUU8cFCjKiwjXSuUmfBwDXF81RcAUEh7PqathQ3TzmW4g9pZbURwDod7wjKNlYsU1_dG3OobGPAoDo_zqQQ2I4LeHKxPS9mD6y28M_3OyiIEoLl224H4PGuwRZR6413ys84_e13CnjYyk6WOZcWV3nNSSSM7lhS7SeTBymiDjbH2oUGp-SD69pY2gS8Jarl4A5SIoJGvfvYVCPTj2fkbsvMfuZukyZewf4ZN8JV9r4q5Wi9XkzXsM6zXAeCQ_iD6uLi",
    location: "Detroit, London, Nairobi",
    stats: [
        { label: "Gardens Created", value: "18" },
        { label: "Produce Harvested", value: "25 Tons" },
        { label: "Youth Employed", value: "85" }
    ]
  },
  {
    id: 'healthcare-access',
    title: "Mobile Healthcare Units",
    category: "Health",
    description: "Deploying mobile clinics to provide primary care in isolated rural regions.",
    content: "For many, the nearest doctor is days away. We bridge this gap with our Mobile Healthcare Units—vans equipped with diagnostic tools, vaccines, and basic medicines. These units travel on a regular schedule to isolated villages, providing prenatal care, vaccinations, and chronic disease management. We also train local Community Health Workers to provide ongoing support between visits.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    location: "Rural India & Andes Mountains",
    stats: [
        { label: "Patients Treated", value: "30,000+" },
        { label: "Miles Traveled", value: "150k" },
        { label: "Vaccines Given", value: "12,000" }
    ]
  },
  {
    id: 'women-empowerment',
    title: "Women's Micro-Finance",
    category: "Economic Growth",
    description: "Providing micro-loans and business training to women entrepreneurs.",
    content: "When women thrive, communities thrive. Our Micro-Finance program offers small, low-interest loans to women looking to start or expand their businesses. Coupled with rigorous financial literacy and business management training, these loans have an incredibly high repayment rate and a massive multiplier effect on the local economy.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=2000",
    location: "Global",
    stats: [
        { label: "Loans Issued", value: "$2.5M" },
        { label: "Businesses Started", value: "4,500" },
        { label: "Repayment Rate", value: "98%" }
    ]
  }
];

const Outreach: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const activeProject = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Detail View
  if (activeProject) {
    return (
      <div className="bg-white min-h-screen pb-20">
        {/* Project Header Image */}
        <div className="relative h-[60vh] min-h-[400px]">
             <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white max-w-7xl mx-auto">
                 <Link to="/outreach" className="inline-flex items-center text-gray-300 hover:text-white mb-6 text-sm font-bold transition-colors">
                    <span className="material-symbols-outlined text-lg mr-1">arrow_back</span>
                    Back to Projects
                 </Link>
                 <span className="inline-block py-1 px-3 rounded-full bg-primary text-white text-xs font-bold tracking-widest uppercase mb-4">{activeProject.category}</span>
                 <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4">{activeProject.title}</h1>
                 {activeProject.location && (
                     <div className="flex items-center gap-2 text-lg font-light text-gray-200">
                         <span className="material-symbols-outlined">location_on</span>
                         {activeProject.location}
                     </div>
                 )}
             </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <h2 className="text-2xl font-bold text-secondary mb-6">About the Project</h2>
                    <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line mb-8">
                        {activeProject.content || activeProject.description}
                    </p>
                    
                    <h3 className="text-xl font-bold text-secondary mb-4">The Challenge</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        Many communities face systemic barriers that prevent sustainable growth. This project directly addresses these challenges by implementing long-term, community-led solutions rather than temporary fixes.
                    </p>

                    <div className="pt-8 border-t border-gray-100">
                        <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-500/20">
                            Support This Project
                        </button>
                    </div>
                </div>

                {/* Sidebar Stats */}
                <div className="space-y-6">
                    {activeProject.stats && (
                        <div className="bg-secondary text-white rounded-2xl p-8 shadow-xl">
                            <h3 className="font-display font-bold text-xl mb-6 border-b border-white/20 pb-4">Project Impact</h3>
                            <div className="space-y-6">
                                {activeProject.stats.map((stat, idx) => (
                                    <div key={idx}>
                                        <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    <div className="bg-background-subtle rounded-2xl p-8 border border-gray-200">
                        <h3 className="font-bold text-secondary text-lg mb-4">Share this project</h3>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors shadow-sm">
                                <span className="font-bold text-xs">FB</span>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors shadow-sm">
                                <span className="font-bold text-xs">TW</span>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors shadow-sm">
                                <span className="font-bold text-xs">LN</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="bg-background-subtle min-h-screen">
      <header className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block animate-fade-in-up">Global Initiatives</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary mb-6 animate-fade-in-up delay-100">Our Projects</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto animate-fade-in-up delay-200">
                Explore the diverse range of projects we are undertaking to create a more equitable and sustainable world.
            </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
                <Link 
                    to={`/outreach?id=${project.id}`} 
                    key={project.id}
                    className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                >
                    <div className="relative h-64 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold uppercase tracking-wide rounded-full shadow-sm">
                                {project.category}
                            </span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-display font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6 font-light line-clamp-3">{project.description}</p>
                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center text-primary font-bold text-sm gap-2">
                            View Project Details
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Outreach;