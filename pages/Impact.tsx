import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

export interface Story {
  id: string;
  cat: string;
  title: string;
  quote: string;
  author: string;
  role: string;
  img: string;
  accent: string;
  fullStory: string;
}

export const impactStories: Story[] = [
    {
        id: "sarah-jenkins",
        cat: "Community",
        title: "Life-Changing Impact",
        quote: "The community outreach program provided me with the tools I needed to start my own local initiative. I never thought I could make such a difference.",
        author: "Sarah Jenkins",
        role: "Community Leader",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC058TYOGVrNBtHjvlqjNo_RLirR-ZUPO-YdbIWsNWo-Rs4Q7yE5Yx3y0HWzwhdinhrAQYxLqCF4GNMoWCTLh1iLdOJEAfV3H3shrhMvQBnmX5TZEk9d6P_uMz8qGrOptXbb_sE5a9nE5hVjhXedy46Q5YGoA-QYW7fE8VkjRMbjNhj9dsuyM6L6K-44NeEFK5536H7ItP8Zry-RfZA5bkwL43nL1XUFJQ_lNZOdzl61toahJvdKNwhGtWfgPu_lXGucX1ftcU_BtRx",
        accent: "bg-accent",
        fullStory: "Before I encountered The Flag Forum, I was struggling to find resources for our neighborhood cleanup initiative. We had the will, but not the way. \n\nThe Forum's 'Community Hub' grant didn't just give us funding; it gave us a blueprint. I attended their leadership workshops in 2022, which completely changed my approach to organizing. They taught me how to structure our volunteer teams, manage micro-budgets transparently, and most importantly, how to tell our story to attract more local support.\n\nNow, three years later, what started as a weekend trash pickup has evolved into 'Oasis Hub,' a fully functional community center offering after-school programs and urban gardening workshops. The Flag Forum believed in us when we were just an idea on a piece of paper. That belief was the spark we needed to ignite real change."
    },
    {
        id: "mark-davidson",
        cat: "Partnership",
        title: "Strategic Partnership",
        quote: "Working with The Flag Forum has bridged gaps between our corporate social goals and on-the-ground needs in ways we never thought possible.",
        author: "Mark Davidson",
        role: "Head of CSR, Global Tech",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn_92hgJyBUFdCGahFvh0MZXV_KYYTFmFyysQeUSpb-Dfj6ZyUxJMGt-dKenW7nFe9w-jEqufRx9FSYWlCLxk1OpRe389IO0bk7AzKskjTQ6D3AJ3tcZZIDMba20oBmmJuMYh1BwIYLe6qHOWy-Oh42pGpHfrzwrSu33_mf-hh30V-hdrG5i7-NJRlnRWe87iesZ4hQ3MXYixNCzMhO6N_8jnU4zLoVROBMKcqAWz-Z-mchwGWcLCFu2H6ojDb3CZdqU_gBd1wqgt7",
        accent: "bg-primary",
        fullStory: "At Global Tech, we've always had a strong desire to give back, but we often struggled with the 'last mile' problem—ensuring our resources actually reached the people who needed them most without being absorbed by bureaucracy.\n\nThe Flag Forum changed that equation for us. Their transparent operational model allowed us to track the impact of our 'Tech for Good' initiative in real-time. We partnered with them to deploy solar-powered learning stations in rural Southeast Asia. \n\nUnlike other partners, The Flag Forum facilitated direct dialogue between our engineers and the local village elders. This collaboration ensured the technology was not just dropped off, but integrated into the community's daily life in a culturally respectful way. It has been our most successful CSR project to date, and we are expanding the partnership to three new regions next year."
    },
    {
        id: "david-chen",
        cat: "Partnership",
        title: "Global Perspective",
        quote: "Through The Flag Forum, we've connected with partners across three continents. The synergy is unlike anything we've experienced before.",
        author: "David Chen",
        role: "Project Director",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRBwNqWja0hzSwUCTReFe-RKB61JjpYqe09m9vTZ0R5enIv8Btfdvpm5-1LCzjxPa8eQ_PLA2Tc6n8m8FfE1sbfjpzHqfz9uT0sR8uoEs7pGQuFFL-rZnv4bC7GEt0czhDnPStwLXPa7FqdGxuV9L1LbEL0K9PC7snEtxjFCB8V4z-Hn35I3j78Z-7g0qWc6xAiPNs-QepiTxVQlRn6_CUc6qjL9fM8STbYAic2ICwxcr4rFD80qpEg0M8LbsdBOscU2RCHEeD5kGb",
        accent: "bg-primary",
        fullStory: "Our organization focuses on sustainable agriculture, but we were operating in a silo. We knew what worked in our region, but we had no way to share knowledge or learn from others facing similar climate challenges elsewhere.\n\nEnter The Flag Forum. Their annual 'Cross-Continental Summit' brought us together with farmers from Peru and Kenya. We realized that despite the distance, our challenges with soil erosion were identical. \n\nFacilitated by the Forum, we established a knowledge-exchange program. We sent two of our agronomists to Kenya, and they sent two irrigation specialists to us. The result? A 30% increase in crop yields for both communities within a single season. This kind of synergy—removing borders to solve human problems—is exactly what the world needs right now."
    },
    {
        id: "amara-okoro",
        cat: "Education",
        title: "Empowering Youth",
        quote: "The education projects have changed the trajectory for hundreds of students in our district. We are forever grateful for this partnership.",
        author: "Dr. Amara Okoro",
        role: "Educational Consultant",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5rllKfnnLYr3QL9JAuWgEV1z1N3RmtqiEhkVkoef1tcy4g55gCnnZrTHs2UQJCA2oefkIVhZc0YDW0kO95SeAfExlwuu4Z-30XJkrHLklEAG4c3tgsEA4fXfXaE5Gjjc0cyX87thSud8TQ4oJzcspdS00L5P5cGUHNvloAwglsK1RWNsrorxMBa_TGKYmmxvoNY5alJN80Zu6B6dhJpveGcmlyURDe02F9T4iYTieqLDAiI95iJ8JsQxHrU6RmIlZ56BRtNk367Ub",
        accent: "bg-accent",
        fullStory: "In our district, the drop-out rate for girls after primary school was alarmingly high. It wasn't a lack of interest; it was a lack of safe facilities and mentorship.\n\nThe Flag Forum didn't just come in and build a school; they built an ecosystem. They worked with us to renovate the sanitation facilities, ensuring privacy and safety. Then, they launched the 'Big Sister' mentorship program, connecting our students with successful female professionals in the capital city via video calls.\n\nThe impact has been measurable and profound. Attendance is up 40%, and for the first time in a decade, more girls graduated high school than boys last year. The Forum understands that education isn't just about books; it's about dignity and possibility."
    },
    {
        id: "marcus-thompson",
        cat: "Infrastructure",
        title: "Structural Change",
        quote: "It's not just about one-off donations. The Flag Forum builds infrastructure and long-term systems that support community growth.",
        author: "Marcus Thompson",
        role: "Social Impact Advisor",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnevkrUW9aM9Rc17lFc2_cYGcaHg6MfDoxrPlUSYxatTg78xKteAhf4AUOBXEThyLcVM7JX1762GeRC_x75Xf1rYSgxKSDNJbuy-VDNUZDhEWPwdp1FxV-LSehG3BIO7sHJl3V8xj4sC_IT5S2hlPMNgayEEc3ROB6vFX7NyLtbzy7KuuolSQ-oC83V6RjinyKTI49PcWMyJbsPo-b493zfusixIayD45aIWQrKZZkyJ-AUurXQDR2F_hDrCVu0S_RUfIZ5gPNXQoq",
        accent: "bg-primary",
        fullStory: "I've advised many NGOs over my 20-year career, and the most common pitfall is the 'donor-recipient' dependency loop. The Flag Forum is different because they focus on infrastructure sovereignty.\n\nTake their clean water project in the Andes. Instead of just installing pumps and leaving, they spent six months training a local cooperative to maintain and repair the equipment. They helped set up a small fee-collection system managed by the village council to pay for spare parts, ensuring the system pays for itself.\n\nFive years later, that system is still running perfectly without a single dollar of external aid since the launch. That is what structural change looks like. It's not flashy, but it's permanent."
    },
    {
        id: "elena-rodriguez",
        cat: "Leadership",
        title: "A Visionary Model",
        quote: "I've seen many NGOs, but the way they integrate local leadership into their decision-making is truly visionary.",
        author: "Elena Rodriguez",
        role: "Policy Researcher",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLIqIazVT8FCctnlxU-z9tjHAaY97xbI236kYlbKpfzwfGcMrSE7KLM9fS7j3d6GEPW_JNVo8-fjo0W7TvT2nUdGeW2TQ-AJ8HS7zeWXiylReuge7ZpYf2A_oYb44spQT5MMN3yX6SAoPsNSdSI9dwE587DmjgF9X8WDE8i_-7RsVB_7F4zXQSl0lzO-C5dk0umXz1fnutFbcXs8cdMaU9sbinLlAyNpuFwzQ244zGUInXRBXstLuuetBK-abGShWgDy5CHuFBBaaw",
        accent: "bg-accent",
        fullStory: "Policy research often highlights the disconnect between international aid strategies and local realities. The Flag Forum has effectively closed this gap by flipping the script: the locals set the strategy, and the Forum provides the logistics.\n\nI studied their intervention in urban food deserts for my latest paper. They didn't bring in outside experts to dictate what to grow. They funded existing local urban farmers and gave them a platform to teach others. \n\nThis respect for indigenous knowledge and local leadership is why their projects have such high community buy-in. They aren't saviors; they are partners. That distinction makes all the difference in the world."
    },
    {
        id: "julian-meyer",
        cat: "Inspiration",
        title: "Pure Inspiration",
        quote: "Every time I attend a Forum event, I leave feeling like the world is a better place than I thought. They bridge divides effortlessly.",
        author: "Julian Meyer",
        role: "Volunteer Advocate",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPfE_Mxff5Dk88Oe1EMbFpsJawPcC5tre7nMerMoU2VFltl0W3ARe8K0yG0PeKYme9P0bEQbQaNN-ZKlgvdVtkO114qHl82umNkkmZsW5oyLytNCL5k67pLdSBI6ObVQv9GXvK8FBP3JtEl9g7o89AvV1ksXm1lnzAiRaaBW1E48pOqkEy6WP4hCNOhmgd4dA4D35kNnbLT7dX2F0ozM6roI8yws_hoasVoTvv8TMWNUSiwM6a3U80I2imJyQqtW9aObkCdjiTHY-Q",
        accent: "bg-primary",
        fullStory: "I started volunteering because I was cynical about the state of the world. The news cycle is relentless, and it's easy to feel helpless.\n\nMy first Forum event was a town hall on renewable energy. I expected a dry lecture. Instead, I found a vibrant room full of engineers, artists, students, and retirees, all brainstorming solutions together. There was no hierarchy, just a shared purpose.\n\nThe Flag Forum creates these spaces where optimism is fueled by action. Seeing people from totally different political and social backgrounds working together to install solar panels on a community center restored my faith in humanity. It showed me that we aren't as divided as we're told we are."
    }
];

const Impact: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  useEffect(() => {
    const storyId = searchParams.get('id');
    if (storyId) {
        const story = impactStories.find(s => s.id === storyId);
        if (story) {
            setActiveStory(story);
            // Scroll to top to ensure modal is visible nicely if page was scrolled
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        setActiveStory(null);
    }
  }, [searchParams]);

  const openStory = (story: Story) => {
      setSearchParams({ id: story.id });
  };

  const closeStory = () => {
      setSearchParams({});
      setActiveStory(null);
  };

  return (
    <div className="bg-background-subtle">
      <header className="relative pt-24 pb-16 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        {/* Link to Home Community Voices */}
        <div className="absolute top-10 left-4 sm:left-8 z-20">
            <Link to="/#community-voices" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium text-sm group">
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                </span>
                <span className="hidden sm:inline">Back to Home</span>
            </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">Voices of Change</span>
          <h1 className="font-display font-medium text-5xl md:text-7xl mb-8 text-slate-900 leading-tight">Impact Stories</h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-light">Real stories from the people building bridges and transforming communities with The Flag Forum.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStories.map((story, idx) => (
                <div 
                    key={idx} 
                    className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col h-full relative overflow-hidden cursor-pointer"
                    onClick={() => openStory(story)}
                >
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                         <span className={`material-symbols-outlined text-9xl ${idx % 2 === 0 ? 'text-accent' : 'text-primary'} -mr-4 -mt-4`}>format_quote</span>
                    </div>
                    <div className="relative z-10 flex-grow">
                        <div className="flex items-center gap-2 mb-6">
                            <span className={`h-0.5 w-8 ${idx % 2 === 0 ? 'bg-accent' : 'bg-primary'}`}></span>
                            <span className={`text-xs font-bold ${idx % 2 === 0 ? 'text-accent' : 'text-primary'} uppercase tracking-widest`}>{story.cat}</span>
                        </div>
                        <h3 className="text-2xl font-display font-semibold mb-6 text-primary">{story.title}</h3>
                        <blockquote className="mb-8">
                            <p className="font-display italic text-lg text-slate-600 leading-relaxed">"{story.quote}"</p>
                        </blockquote>
                    </div>
                    <div className="relative z-10 mt-auto pt-6 border-t border-slate-100">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img alt={story.author} className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src={story.img} />
                                <div>
                                    <h4 className="font-bold text-sm text-slate-900">{story.author}</h4>
                                    <p className="text-xs text-slate-500">{story.role}</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-6 w-full py-3 rounded-lg border border-primary/10 text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:border-primary">
                            Read Full Story
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </main>

      {/* Full Story Modal */}
      {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-md animate-fade-in-up" onClick={closeStory}>
              <div 
                className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden" 
                onClick={(e) => e.stopPropagation()}
              >
                  <button 
                      onClick={closeStory}
                      className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-full transition-all text-secondary"
                  >
                      <span className="material-symbols-outlined text-2xl">close</span>
                  </button>

                  <div className="md:w-2/5 relative min-h-[300px] md:min-h-0">
                      <img src={activeStory.img} alt={activeStory.author} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex flex-col justify-end p-8 text-white">
                          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-4 w-fit">{activeStory.cat}</span>
                          <h2 className="text-3xl font-display font-bold mb-2">{activeStory.title}</h2>
                          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/20">
                              <div>
                                  <p className="font-bold text-sm">{activeStory.author}</p>
                                  <p className="text-xs text-gray-300 uppercase tracking-wide">{activeStory.role}</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="md:w-3/5 p-8 md:p-12 bg-white overflow-y-auto custom-scrollbar">
                      <span className="material-symbols-outlined text-6xl text-gray-100 mb-4 block">format_quote</span>
                      <h3 className="text-xl font-bold text-secondary mb-6 italic">"{activeStory.quote}"</h3>
                      <div className="prose prose-lg text-slate-600">
                          {activeStory.fullStory.split('\n\n').map((paragraph, idx) => (
                              <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
                          ))}
                      </div>
                      <div className="mt-10 pt-8 border-t border-gray-100 flex gap-4">
                          <button className="flex-1 py-3 bg-secondary text-white rounded-xl font-bold text-sm hover:bg-primary transition-colors">
                              Share Story
                          </button>
                          <button className="flex-1 py-3 border border-gray-200 text-secondary rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
                              View More Stories
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      )}

      <section className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <span className="text-accent font-bold tracking-wider text-sm uppercase mb-3 block">Common Queries</span>
                    <h2 className="text-4xl font-display font-medium text-slate-900 mb-6">Frequently Asked Questions</h2>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed">We believe in full transparency. Here are answers to common questions about our stories, funding, and verification processes.</p>
                    <a className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30" href="#">
                        Ask a question <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                    </a>
                </div>
                <div className="space-y-6">
                    <div className="bg-background-subtle p-6 rounded-xl transition-colors hover:bg-slate-50">
                        <button className="w-full flex justify-between items-center text-left font-bold text-slate-900">
                            <span className="text-lg">How are the testimonials verified?</span>
                            <span className="material-symbols-outlined text-slate-400">add_circle</span>
                        </button>
                        <div className="text-slate-600 mt-4 text-sm leading-relaxed">All testimonials come from verified partners and program participants who have directly engaged with our initiatives over the past 24 months. We conduct interviews and obtain written consent.</div>
                    </div>
                    <div className="bg-background-subtle p-6 rounded-xl transition-colors hover:bg-slate-50">
                        <button className="w-full flex justify-between items-center text-left font-bold text-slate-900">
                            <span className="text-lg">Can I submit my own story?</span>
                            <span className="material-symbols-outlined text-slate-400">add_circle</span>
                        </button>
                    </div>
                    <div className="bg-background-subtle p-6 rounded-xl transition-colors hover:bg-slate-50">
                        <button className="w-full flex justify-between items-center text-left font-bold text-slate-900">
                            <span className="text-lg">How is funding distributed?</span>
                            <span className="material-symbols-outlined text-slate-400">add_circle</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;