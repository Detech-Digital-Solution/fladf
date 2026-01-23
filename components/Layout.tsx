import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DonateModal, ParticipateModal } from './Modals';

interface LayoutProps {
  children: React.ReactNode;
}

const FlagLogo: React.FC<{ variant?: 'default' | 'footer' }> = ({ variant = 'default' }) => {
  // Colors adapted for background
  const blackFlag = variant === 'footer' ? 'text-white' : 'text-neutral';
  const redFlag = 'text-primary';
  const blueFlag = variant === 'footer' ? 'text-blue-400' : 'text-secondary';

  return (
    <div className="relative w-12 h-10 flex-shrink-0 select-none">
      {/* Top Center Flag (Black) */}
      <span 
        className={`material-symbols-outlined absolute top-[-6px] left-1/2 -translate-x-1/2 text-[28px] z-10 ${blackFlag}`}
        style={{ fontVariationSettings: "'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 48" }}
      >
        flag
      </span>
      {/* Left Flag (Red) */}
      <span 
        className={`material-symbols-outlined absolute bottom-[-2px] left-[-2px] text-[22px] z-20 ${redFlag}`}
        style={{ fontVariationSettings: "'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 48", transform: "rotate(-10deg)" }}
      >
        flag
      </span>
      {/* Right Flag (Blue) */}
      <span 
        className={`material-symbols-outlined absolute bottom-[-2px] right-[-2px] text-[22px] z-20 ${blueFlag}`}
        style={{ fontVariationSettings: "'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 48", transform: "rotate(10deg)" }}
      >
        flag
      </span>
    </div>
  );
};

const Header: React.FC<{
  onDonate: () => void;
  onParticipate: () => void;
  isScrolled: boolean;
}> = ({ onDonate, onParticipate, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'COPs', path: '/outreach' },
    { name: 'Impact Stories', path: '/impact' },
    { name: 'Newsletters', path: '/newsletter' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-gray-100 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 group z-50 relative">
              <FlagLogo />
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-secondary uppercase">
                The Flag Forum
              </span>
            </Link>

            {/* Desktop Navigation & Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/about" className="text-sm font-medium text-secondary hover:text-primary transition-colors">About Us</Link>
              <Link to="/outreach" className="text-sm font-medium text-secondary hover:text-primary transition-colors">COPs</Link>
              <Link to="/newsletter" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Newsletters</Link>
              
              <div className="flex items-center gap-3 ml-4">
                <Link 
                    to="/contact"
                    className="px-6 py-2.5 border-2 border-neutral text-neutral rounded-full text-sm font-bold hover:bg-neutral hover:text-white transition-all active:scale-95"
                >
                    Contact Us
                </Link>

                <button
                    onClick={onParticipate}
                    className="px-6 py-2.5 border-2 border-secondary text-secondary bg-transparent rounded-full text-sm font-bold hover:bg-secondary hover:text-white transition-all active:scale-95"
                >
                    Participate
                </button>

                <button
                    onClick={onDonate}
                    className="px-6 py-2.5 border-2 border-primary text-primary bg-transparent rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all active:scale-95"
                >
                    Donate
                </button>
              </div>
            </div>

            {/* Mobile Hamburger (Only visible on small screens) */}
            <div className="flex lg:hidden items-center gap-4">
                 <button
                    className="p-2 text-secondary hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <span className="material-symbols-outlined text-3xl">menu</span>
                  </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Off-canvas Menu Drawer */}
      <div className={`fixed inset-0 z-50 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
            className={`absolute inset-0 bg-secondary/20 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer Panel */}
        <div 
            className={`absolute right-0 top-0 h-full w-full max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <span className="font-display font-bold text-lg text-secondary uppercase tracking-wider">Navigation</span>
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 -mr-2 text-gray-400 hover:text-secondary hover:bg-gray-100 rounded-full transition-all"
                >
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
                {menuLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-3 px-4 rounded-xl text-lg font-display font-bold transition-all ${
                            location.pathname === link.path 
                                ? 'bg-red-50 text-primary translate-x-2' 
                                : 'text-secondary hover:bg-gray-50 hover:text-primary hover:translate-x-1'
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <div className="p-6 bg-gray-50 space-y-3">
                 <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 px-1">Actions</p>
                 <button
                    onClick={() => {
                      onDonate();
                      setIsMenuOpen(false);
                    }}
                    className="w-full py-3.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-red-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
                  >
                    <span>Donate Now</span>
                    <span className="material-symbols-outlined text-sm">volunteer_activism</span>
                  </button>
                  <button
                    onClick={() => {
                      onParticipate();
                      setIsMenuOpen(false);
                    }}
                    className="w-full py-3.5 border-2 border-secondary text-secondary bg-white rounded-xl text-sm font-bold hover:bg-secondary hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Participate</span>
                    <span className="material-symbols-outlined text-sm">handshake</span>
                  </button>
            </div>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FlagLogo variant="footer" />
              <span className="font-display font-bold text-lg tracking-tight text-white uppercase">
                The Flag Forum
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              The Flag Forum is a global initiative dedicated to social impact through collaborative outreach and transparent community support.
            </p>
             <div className="flex gap-4 pt-2">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors text-white">
                  <span className="font-bold text-xs">TW</span>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors text-white">
                  <span className="font-bold text-xs">LN</span>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors text-white">
                  <span className="font-bold text-xs">IG</span>
                </a>
             </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h6 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h6>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our History</Link></li>
              <li><Link to="/outreach" className="hover:text-primary transition-colors">Project Portfolio</Link></li>
              <li><Link to="/impact" className="hover:text-primary transition-colors">Annual Reports</Link></li>
              <li><Link to="/announcements" className="hover:text-primary transition-colors">Announcements</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Legal/Resources */}
          <div>
            <h6 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Legal & Help</h6>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div>
            <h6 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Subscribe to Newsletter</h6>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest impact stories and announcements.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">mail</span>
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>
                <button className="w-full py-3 bg-primary text-white font-bold rounded-lg text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
                    Subscribe
                </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
             <p className="text-xs text-gray-500 uppercase tracking-widest">© {new Date().getFullYear()} The Flag Forum. All rights reserved.</p>
          </div>
          <div className="text-gray-500 text-xs flex gap-4">
             <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                Made with ❤️ by <a href="https://www.detech.live" target="_blank" rel="noopener noreferrer" className="hover:text-[#0066A5] transition-colors">Detech</a>
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [donateOpen, setDonateOpen] = useState(false);
  const [participateOpen, setParticipateOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onDonate={() => setDonateOpen(true)}
        onParticipate={() => setParticipateOpen(true)}
        isScrolled={isScrolled}
      />
      <main className="flex-grow pt-24">{children}</main>
      <Footer />
      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
      <ParticipateModal isOpen={participateOpen} onClose={() => setParticipateOpen(false)} />
    </div>
  );
};