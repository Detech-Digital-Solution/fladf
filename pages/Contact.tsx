import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-background-light">
      <header className="pt-20 pb-12 px-4 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight font-display">Contact Us</h1>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            We’d love to hear from you. Whether you have a question about our initiatives, want to partner with us, or just want to say hello.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-subtle">
              <h2 className="text-2xl font-semibold mb-8 text-secondary">Send a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">First Name</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Jane" type="text" />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Last Name</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Smith" type="text" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="jane@example.com" type="email" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Topic</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Donation Support</option>
                      <option>Volunteer Opportunities</option>
                      <option>Media & Press</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <span className="material-symbols-outlined text-lg">expand_more</span>
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Message</label>
                  <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y" placeholder="How can we help you?" rows={5}></textarea>
                </div>
                <div className="pt-2">
                  <button className="w-full sm:w-auto px-8 py-3.5 bg-secondary hover:bg-slate-800 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group" type="submit">
                    Send Message
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Email</h3>
                  <p className="text-sm text-slate-500 mb-1">Our team is here to help.</p>
                  <a className="text-primary font-medium hover:underline" href="mailto:contact@theflagforum.org">contact@theflagforum.org</a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Phone</h3>
                  <p className="text-sm text-slate-500 mb-1">Mon-Fri from 9am to 6pm.</p>
                  <a className="text-secondary font-medium hover:underline" href="tel:+1555000000">+1 (555) 000-0000</a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Headquarters</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1">
                    123 Community Hub Plaza<br />
                    Social Impact District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 h-64 shadow-sm group">
              <img alt="Map Location" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUjKIjW9xwdUbi26HcM6T_tv7oaugmhfZTQV0iUWdoZT06JRh15em6SMguKd39ZnrhNFmmsfRqNhNzbTTFw7RWav6oDGXKIQrt1ezjakEhniXNIKER9MgiL6wVKYql5rmIEkyjkufXbngmPP0jpaYuUtUpX_8BWTVy8E_3m0-NjVTKC-OypBIbuoKqSpeb9_VnhsDgz2Jxv0U0zWXuHnFDrC2MiL8aEFjCybIEmWckDLatkbC8iWZwAB6Hxc4PnnJ8zz9IBmbrpRL2" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none"></div>
              <a className="absolute bottom-4 right-4 bg-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-1" href="#" target="_blank">
                Open in Maps <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Follow Us</p>
              <div className="flex gap-4">
                 <div className="flex gap-4">
                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-primary hover:text-white transition-all duration-300" href="#"><span className="font-bold text-xs">FB</span></a>
                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-primary hover:text-white transition-all duration-300" href="#"><span className="font-bold text-xs">IG</span></a>
                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-primary hover:text-white transition-all duration-300" href="#"><span className="font-bold text-xs">TW</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;