import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

interface UpdateItem {
  id: string;
  title: string;
  date: string;
  category: string;
  status: string;
  location: string;
  description: string;
  content: string;
  mainImage: string;
  galleryImages: string[];
}

const updatesData: UpdateItem[] = [
  {
    id: 'fall-impact-assessment',
    title: 'Fall Impact Assessment',
    date: 'October 24, 2025',
    category: 'Report',
    status: 'New',
    location: 'Global HQ, New York',
    description: 'Our comprehensive report on the summer outreach programs is now available. We analyze the data to understand what worked and how we are adapting.',
    content: `
      Our team has spent the last three weeks aggregating data from over 50 field locations. The results of the Fall Impact Assessment serve as a crucial barometer for our strategic direction heading into the new year.
      
      Key findings indicate a 40% increase in community engagement in our pilot zones, specifically in the urban farming sector. However, we also identified logistical bottlenecks in our supply chain for remote medical units, which we are actively addressing with new local partnerships.
      
      This report breaks down our metrics by region, program type, and demographic impact, offering a transparent view of where every donation dollar goes and the tangible difference it makes.
    `,
    mainImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000',
    galleryImages: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'clean-water-expansion',
    title: 'Clean Water Project Expansion',
    date: 'November 10, 2025',
    category: 'Project',
    status: 'In Progress',
    location: 'Nairobi, Kenya',
    description: 'Phase 2 of our water filtration initiative has been greenlit. We are moving equipment into three new districts this week.',
    content: `
      Following the success of our initial pilot in the Rift Valley, we are thrilled to announce the expansion of the Clean Water Initiative. This phase targets three additional districts that have been suffering from prolonged drought conditions.
      
      Our engineering teams are already on the ground, surveying sites for new solar-powered wells. We have also partnered with local suppliers to source materials, ensuring that the economic benefits of this project stay within the community.
    `,
    mainImage: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=2000',
    galleryImages: [
      'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

const LatestUpdates: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const activeUpdate = updatesData.find(u => u.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Detail View
  if (activeUpdate) {
    return (
      <div className="bg-background-light min-h-screen pb-20">
        {/* Header Image Section */}
        <div className="relative h-[60vh] min-h-[500px]">
           <img src={activeUpdate.mainImage} alt={activeUpdate.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent"></div>
           
           <div className="absolute top-0 left-0 p-8 w-full">
             <div className="max-w-7xl mx-auto">
               <Link to="/latest-updates" className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                  <span className="material-symbols-outlined text-lg mr-2">arrow_back</span>
                  Back to Updates
               </Link>
             </div>
           </div>

           <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 max-w-7xl mx-auto">
               <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {activeUpdate.category}
                  </span>
                  {activeUpdate.status === 'New' && (
                    <span className="bg-white text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      New Update
                    </span>
                  )}
               </div>
               <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight shadow-sm">
                 {activeUpdate.title}
               </h1>
               <div className="flex items-center gap-6 text-gray-200 text-sm md:text-base font-light">
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                    {activeUpdate.date}
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    {activeUpdate.location}
                 </div>
               </div>
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
               <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
                 <h2 className="text-2xl font-bold text-secondary mb-6 font-display">Update Details</h2>
                 <div className="prose prose-lg text-slate-600 leading-relaxed whitespace-pre-line">
                   {activeUpdate.content}
                 </div>
               </div>

               {/* Gallery */}
               <div className="space-y-6">
                 <h3 className="text-xl font-bold text-secondary pl-2">Media Gallery</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {activeUpdate.galleryImages.map((img, idx) => (
                     <div key={idx} className="rounded-2xl overflow-hidden h-64 shadow-md hover:shadow-xl transition-shadow duration-300">
                       <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Sidebar info */}
            <div className="space-y-8">
               <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary">
                 <h3 className="font-bold text-secondary text-lg mb-4">Quick Facts</h3>
                 <div className="space-y-4">
                   <div>
                     <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Location</span>
                     <span className="text-slate-700 font-medium">{activeUpdate.location}</span>
                   </div>
                   <div>
                     <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Status</span>
                     <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mt-1 ${activeUpdate.status === 'New' ? 'bg-red-100 text-primary' : 'bg-blue-100 text-secondary'}`}>
                       {activeUpdate.status}
                     </span>
                   </div>
                 </div>
               </div>

               <div className="bg-secondary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="font-bold text-xl mb-4">Stay in the loop</h3>
                    <p className="text-gray-300 text-sm mb-6">Get notified when we post new updates about this project.</p>
                    <button className="w-full py-3 bg-white text-secondary font-bold rounded-xl hover:bg-gray-100 transition-colors">
                      Subscribe to Updates
                    </button>
                  </div>
                  <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-white/5">notifications</span>
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
      <header className="bg-white pt-24 pb-16 border-b border-gray-200 relative">
        <div className="absolute top-10 left-4 sm:left-8 z-20">
            <Link to="/#latest-updates" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium text-sm group">
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                </span>
                <span className="hidden sm:inline">Back to Home</span>
            </Link>
        </div>

         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Current Progress</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary mb-6">Latest Updates</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Real-time news and progress reports from our teams on the ground.
            </p>
         </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
           {updatesData.map((item) => (
             <Link 
               to={`/latest-updates?id=${item.id}`} 
               key={item.id}
               className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
             >
               <div className="h-64 overflow-hidden relative">
                 <img src={item.mainImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute top-4 left-4 flex gap-2">
                   <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold uppercase tracking-wide rounded-full shadow-sm">
                     {item.category}
                   </span>
                   {item.status === 'New' && (
                     <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-sm animate-pulse">
                       New
                     </span>
                   )}
                 </div>
               </div>
               <div className="p-8 flex flex-col flex-grow">
                 <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 gap-2">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    {item.date}
                 </div>
                 <h3 className="text-2xl font-display font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                   {item.title}
                 </h3>
                 <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed font-light">
                   {item.description}
                 </p>
                 <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                       <span className="material-symbols-outlined text-lg">location_on</span>
                       {item.location}
                    </div>
                    <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </span>
                 </div>
               </div>
             </Link>
           ))}
        </div>
      </main>
    </div>
  );
};

export default LatestUpdates;