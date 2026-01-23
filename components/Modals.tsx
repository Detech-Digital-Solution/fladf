import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  maxWidth?: string;
}

const BaseModal: React.FC<ModalProps> = ({ isOpen, onClose, title, subtitle, children, maxWidth = "max-w-lg" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-secondary/40 backdrop-blur-sm animate-fade-in-up">
      <div className={`bg-white w-full ${maxWidth} rounded-2xl p-0 shadow-2xl relative overflow-hidden transition-all`}>
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
      maxWidth="max-w-2xl"
    >
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>

        <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Description <span className="text-gray-400 font-normal normal-case">(Optional)</span></label>
            <div className="relative group">
                 <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">description</span>
                 <textarea className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-all placeholder:text-gray-400 text-sm font-medium outline-none resize-none" placeholder="Tell us about your contribution or cause..." rows={3}></textarea>
            </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-white text-secondary flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="material-symbols-outlined">mark_email_read</span>
            </div>
            <div>
                <p className="text-secondary font-bold text-sm">We will contact you via email</p>
                <p className="text-slate-500 text-xs mt-0.5">Our team will reach out shortly to finalize your contribution details securely.</p>
            </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <span>Complete Donation</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
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

        <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Description <span className="text-gray-400 font-normal normal-case">(Optional)</span></label>
            <div className="relative group">
                 <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">description</span>
                 <textarea className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-all placeholder:text-gray-400 text-sm font-medium outline-none resize-none" placeholder="Tell us more about how you'd like to help..." rows={3}></textarea>
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