import React from 'react';

const Impact: React.FC = () => {
  return (
    <div className="bg-background-subtle">
      <header className="relative pt-24 pb-16 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">Voices of Change</span>
          <h1 className="font-display font-medium text-5xl md:text-7xl mb-8 text-slate-900 leading-tight">Impact Stories</h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-light">Real stories from the people building bridges and transforming communities with The Flag Forum.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
                cat: "Community", title: "Life-Changing Impact", quote: "The community outreach program provided me with the tools I needed to start my own local initiative. I never thought I could make such a difference.", author: "Sarah Jenkins", role: "Community Leader", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVxJX8-xAZ35RJG9vi5hNmA9ceo0PmEQ4E1Bwxnea5lEAbw5d4a1A0xWIOFOwdGUJc3Osh1AxfSYlMrI5R4szq70ch50QJhUGjXIevgZ-eFlykDx1CGJ9No2g4q1F_talpfisvuK0dxrU3_wS4j7DVETvzZD_poty4vvE2-LWTZm5vcS3Iwud5HpHB5gAnnjA9KSE1NB2XzXb4M5N13TVnpaK0N6GAQiZeOcJmt4Rcyz0YcMLlIBBAvevY3_t49G5lkKBdb3Nhy_K9", accent: "bg-accent"
            }, {
                cat: "Partnership", title: "Global Perspective", quote: "Through The Flag Forum, we've connected with partners across three continents. The synergy is unlike anything we've experienced before.", author: "David Chen", role: "Project Director", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRBwNqWja0hzSwUCTReFe-RKB61JjpYqe09m9vTZ0R5enIv8Btfdvpm5-1LCzjxPa8eQ_PLA2Tc6n8m8FfE1sbfjpzHqfz9uT0sR8uoEs7pGQuFFL-rZnv4bC7GEt0czhDnPStwLXPa7FqdGxuV9L1LbEL0K9PC7snEtxjFCB8V4z-Hn35I3j78Z-7g0qWc6xAiPNs-QepiTxVQlRn6_CUc6qjL9fM8STbYAic2ICwxcr4rFD80qpEg0M8LbsdBOscU2RCHEeD5kGb", accent: "bg-primary"
            }, {
                cat: "Education", title: "Empowering Youth", quote: "The education projects have changed the trajectory for hundreds of students in our district. We are forever grateful for this partnership.", author: "Dr. Amara Okoro", role: "Educational Consultant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5rllKfnnLYr3QL9JAuWgEV1z1N3RmtqiEhkVkoef1tcy4g55gCnnZrTHs2UQJCA2oefkIVhZc0YDW0kO95SeAfExlwuu4Z-30XJkrHLklEAG4c3tgsEA4fXfXaE5Gjjc0cyX87thSud8TQ4oJzcspdS00L5P5cGUHNvloAwglsK1RWNsrorxMBa_TGKYmmxvoNY5alJN80Zu6B6dhJpveGcmlyURDe02F9T4iYTieqLDAiI95iJ8JsQxHrU6RmIlZ56BRtNk367Ub", accent: "bg-accent"
            }, {
                cat: "Infrastructure", title: "Structural Change", quote: "It's not just about one-off donations. The Flag Forum builds infrastructure and long-term systems that support community growth.", author: "Marcus Thompson", role: "Social Impact Advisor", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnevkrUW9aM9Rc17lFc2_cYGcaHg6MfDoxrPlUSYxatTg78xKteAhf4AUOBXEThyLcVM7JX1762GeRC_x75Xf1rYSgxKSDNJbuy-VDNUZDhEWPwdp1FxV-LSehG3BIO7sHJl3V8xj4sC_IT5S2hlPMNgayEEc3ROB6vFX7NyLtbzy7KuuolSQ-oC83V6RjinyKTI49PcWMyJbsPo-b493zfusixIayD45aIWQrKZZkyJ-AUurXQDR2F_hDrCVu0S_RUfIZ5gPNXQoq", accent: "bg-primary"
            }, {
                cat: "Leadership", title: "A Visionary Model", quote: "I've seen many NGOs, but the way they integrate local leadership into their decision-making is truly visionary.", author: "Elena Rodriguez", role: "Policy Researcher", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLIqIazVT8FCctnlxU-z9tjHAaY97xbI236kYlbKpfzwfGcMrSE7KLM9fS7j3d6GEPW_JNVo8-fjo0W7TvT2nUdGeW2TQ-AJ8HS7zeWXiylReuge7ZpYf2A_oYb44spQT5MMN3yX6SAoPsNSdSI9dwE587DmjgF9X8WDE8i_-7RsVB_7F4zXQSl0lzO-C5dk0umXz1fnutFbcXs8cdMaU9sbinLlAyNpuFwzQ244zGUInXRBXstLuuetBK-abGShWgDy5CHuFBBaaw", accent: "bg-accent"
            }, {
                cat: "Inspiration", title: "Pure Inspiration", quote: "Every time I attend a Forum event, I leave feeling like the world is a better place than I thought. They bridge divides effortlessly.", author: "Julian Meyer", role: "Volunteer Advocate", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPfE_Mxff5Dk88Oe1EMbFpsJawPcC5tre7nMerMoU2VFltl0W3ARe8K0yG0PeKYme9P0bEQbQaNN-ZKlgvdVtkO114qHl82umNkkmZsW5oyLytNCL5k67pLdSBI6ObVQv9GXvK8FBP3JtEl9g7o89AvV1ksXm1lnzAiRaaBW1E48pOqkEy6WP4hCNOhmgd4dA4D35kNnbLT7dX2F0ozM6roI8yws_hoasVoTvv8TMWNUSiwM6a3U80I2imJyQqtW9aObkCdjiTHY-Q", accent: "bg-primary"
            }].map((story, idx) => (
                <div key={idx} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col h-full relative overflow-hidden">
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