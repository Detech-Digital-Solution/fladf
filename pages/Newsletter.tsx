import React, { useState } from 'react';
import { NewsItem } from '../types';
import { Link } from 'react-router-dom';

const newsletters: NewsItem[] = [
    {
        id: "jan-2026",
        date: "January 2026",
        title: "New Year, New Initiatives",
        excerpt: "Discover our exciting plans for 2026 and how you can be part of the change. We outline our quarterly goals, introduce new team members, and spotlight our major upcoming projects in sustainable development.",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200",
        category: "Quarterly Update",
        pdfUrl: "https://pdfobject.com/pdf/sample.pdf" // Placeholder PDF
    },
    {
        id: "dec-2025",
        date: "December 2025",
        title: "Year in Review",
        excerpt: "Celebrating our accomplishments and the amazing community that made it possible. A look back at the metrics that mattered and the stories that moved us.",
        image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800",
        category: "Annual Report",
        pdfUrl: "https://pdfobject.com/pdf/sample.pdf"
    },
    {
        id: "nov-2025",
        date: "November 2025",
        title: "Community Stories",
        excerpt: "Hear from members whose lives were transformed through our programs. In-depth interviews with scholarship recipients and local volunteers.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
        category: "Community Spotlight",
        pdfUrl: "https://pdfobject.com/pdf/sample.pdf"
    },
    {
        id: "oct-2025",
        date: "October 2025",
        title: "Fall Impact Assessment",
        excerpt: "Analyzing the data from our summer outreach programs. What worked, what didn't, and how we are adapting for the future.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
        category: "Impact Report",
        pdfUrl: "https://pdfobject.com/pdf/sample.pdf"
    },
     {
        id: "sep-2025",
        date: "September 2025",
        title: "Back to School Drive",
        excerpt: "Highlights from our most successful education initiative yet. Over 5,000 students received supplies thanks to your donations.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        category: "Education",
        pdfUrl: "https://pdfobject.com/pdf/sample.pdf"
    }
];

const Newsletter: React.FC = () => {
  const [activePdf, setActivePdf] = useState<NewsItem | null>(null);

  const handleReadMore = (item: NewsItem) => {
      setActivePdf(item);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
      setActivePdf(null);
  };

  if (activePdf) {
      return (
          <div className="bg-background-light min-h-screen pb-20">
              <div className="bg-secondary text-white py-8 px-4 sticky top-0 z-30 shadow-md">
                  <div className="max-w-7xl mx-auto flex items-center justify-between">
                      <button 
                        onClick={handleBack}
                        className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white transition-colors"
                      >
                          <span className="material-symbols-outlined">arrow_back</span>
                          Back to Archive
                      </button>
                      <span className="text-sm font-medium opacity-80 hidden md:block">{activePdf.title}</span>
                  </div>
              </div>
              <div className="max-w-5xl mx-auto px-4 pt-12">
                   <div className="mb-10 text-center">
                       <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">{activePdf.date}</span>
                       <h1 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-6">{activePdf.title}</h1>
                       <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{activePdf.excerpt}</p>
                   </div>
                   
                   <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                       <div className="w-full h-[800px] bg-slate-100 flex items-center justify-center relative">
                           {/* Using a sample PDF for demonstration */}
                           <iframe 
                                src={`${activePdf.pdfUrl}#toolbar=0`} 
                                className="w-full h-full"
                                title={activePdf.title}
                            >
                                <p>Your browser does not support PDFs. <a href={activePdf.pdfUrl}>Download the PDF</a>.</p>
                            </iframe>
                       </div>
                   </div>
              </div>
          </div>
      )
  }

  const latestNewsletter = newsletters[0];
  const pastNewsletters = newsletters.slice(1);

  return (
    <div className="bg-background-light">
      <header className="relative bg-white border-b border-gray-200 py-20 lg:py-24">
        <div className="absolute inset-0 bg-gray-50 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
         {/* Link to Home Newsletter Section */}
        <div className="absolute top-10 left-4 sm:left-8 z-20">
            <Link to="/#newsletter" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium text-sm group">
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                </span>
                <span className="hidden sm:inline">Back to Home</span>
            </Link>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Archive & Resources</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-secondary leading-tight">Newsletter Archive</h1>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Stay up to date with our quarterly reports, community highlights, and impact assessments.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Latest Newsletter Section (Big) */}
        <section className="mb-24">
            <div className="flex items-center space-x-2 mb-8">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-primary">Latest Edition</span>
            </div>
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="grid lg:grid-cols-2 lg:h-[500px]">
                    <div className="relative overflow-hidden h-64 lg:h-full">
                        <img 
                            alt={latestNewsletter.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            src={latestNewsletter.image} 
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
                    </div>
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
                        <span className="text-primary font-bold text-sm mb-2">{latestNewsletter.date}</span>
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-secondary leading-tight">{latestNewsletter.title}</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">{latestNewsletter.excerpt}</p>
                        
                        <div className="flex gap-4">
                             <button 
                                onClick={() => handleReadMore(latestNewsletter)}
                                className="inline-flex items-center px-8 py-4 bg-secondary text-white rounded-xl font-bold hover:bg-primary transition-colors shadow-lg"
                             >
                                Read Full Issue
                                <span className="material-symbols-outlined ml-2">open_in_new</span>
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Past Newsletters Grid (Small) */}
        <section>
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-2">
                    <span className="h-px w-8 bg-gray-300"></span>
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Past Editions</span>
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastNewsletters.map((item) => (
                    <div key={item.id} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                        <div className="h-48 overflow-hidden relative">
                             <img 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                src={item.image} 
                             />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">{item.date}</span>
                            <h3 className="font-display text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                            <button 
                                onClick={() => handleReadMore(item)}
                                className="mt-auto inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform"
                            >
                                Show More <span className="material-symbols-outlined text-lg ml-1">description</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

      </main>
    </div>
  );
};

export default Newsletter;