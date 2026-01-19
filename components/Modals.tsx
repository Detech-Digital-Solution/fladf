import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const BaseModal: React.FC<ModalProps> = ({ isOpen, onClose, title, subtitle, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-secondary/40 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white w-full max-w-lg rounded-2xl p-0 shadow-2xl relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 text-gray-400 hover:text-secondary hover:bg-gray-200 transition-all"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="relative px-8 pt-10 pb-2 text-center">
            {title === "Participate" ? (
                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 mb-6 shadow-sm border border-red-100 text-primary">
                 <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
               </div>
            ) : (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 mb-6 shadow-sm border border-blue-100 text-secondary">
                 <span className="material-symbols-outlined text-3xl">favorite</span>
               </div>
            )}
         
          <h2 className="text-3xl font-display font-bold text-secondary tracking-tight">{title}</h2>
          <p className="text-gray-500 mt-2 text-sm font-medium">{subtitle}</p>
        </div>
        
        <div className="px-8 pb-10 pt-6">
            {children}
        </div>
      </div>
    </div>
  );
};

export const DonateModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Support Our Mission"
      subtitle="Please fill in your details to contribute."
    >
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
            <div className="relative group">
                 <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">person</span>
                 <input className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-all placeholder:text-gray-400 text-sm font-medium outline-none" placeholder="Jane Doe" type="text" />
            </div>
        </div>

        <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
            <div className="relative group">
                 <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">mail</span>
                 <input className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-all placeholder:text-gray-400 text-sm font-medium outline-none" placeholder="jane@example.com" type="email" />
            </div>
        </div>

        <div className="space-y-3 pt-2">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Donation Amount</label>
            <div className="grid grid-cols-4 gap-3">
                <button type="button" className="py-2.5 rounded-lg border border-gray-200 text-gray-600 font-semibold hover:border-primary hover:text-primary hover:bg-red-50 transition-all text-sm">$25</button>
                <button type="button" className="py-2.5 rounded-lg border border-gray-200 text-gray-600 font-semibold hover:border-primary hover:text-primary hover:bg-red-50 transition-all text-sm">$50</button>
                <button type="button" className="py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-red-500/20 text-sm">$100</button>
                <button type="button" className="py-2.5 rounded-lg border border-gray-200 text-gray-600 font-semibold hover:border-primary hover:text-primary hover:bg-red-50 transition-all text-sm">Other</button>
            </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
          >
            <span>Complete Donation</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
           <div className="mt-4 flex items-center justify-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <p className="text-[10px] font-medium uppercase tracking-wide">Secure SSL Encrypted Payment</p>
            </div>
        </div>
      </form>
    </BaseModal>
  );
};

export const ParticipateModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Participate"
      subtitle="Become a part of our global volunteer network."
    >
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
            <div className="relative group">
                 <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">person</span>
                 <input className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-all placeholder:text-gray-400 text-sm font-medium outline-none" placeholder="Jane Doe" type="text" />
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</label>
                <div className="relative group">
                     <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">mail</span>
                     <input className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-all placeholder:text-gray-400 text-sm font-medium outline-none" placeholder="Email" type="email" />
                </div>
            </div>
             <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</label>
                <div className="relative group">
                     <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">call</span>
                     <input className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-all placeholder:text-gray-400 text-sm font-medium outline-none" placeholder="Phone" type="tel" />
                </div>
            </div>
        </div>

        <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Role Selection</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 text-[20px]">diversity_3</span>
                </div>
                <select className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-secondary text-sm font-medium appearance-none cursor-pointer">
                    <option value="" disabled selected>Select Role</option>
                    <option>Volunteer</option>
                    <option>Ambassador</option>
                    <option>Partner Org</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                     <span className="material-symbols-outlined text-gray-400 text-[20px]">expand_more</span>
                </div>
            </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3.5 bg-secondary text-white font-bold rounded-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
          >
             <span>Submit Application</span>
             <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </form>
    </BaseModal>
  );
};