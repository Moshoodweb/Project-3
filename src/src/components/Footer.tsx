import { UtensilsCrossed, Globe, ThumbsUp, Camera, Smartphone, Play } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-on-surface text-white pt-20 pb-10 px-10 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-tertiary"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative z-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary text-white p-2 rounded-xl">
              <UtensilsCrossed size={24} />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tighter">MOSHOOD FOODS</h2>
          </div>
          <p className="text-white/60 font-medium mb-8 leading-relaxed max-w-xs">
            Bringing the authentic flavors of Nigeria's heritage to your doorstep with modern convenience.
          </p>
          <div className="flex gap-5">
            {[Globe, ThumbsUp, Camera].map((Icon, idx) => (
              <a key={idx} href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-xs opacity-50">Quick Links</h3>
          <ul className="space-y-4 text-white/70 font-semibold">
            {['Our Story', 'Become a Vendor', 'Franchise', 'Corporate Catering'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-xs opacity-50">Legal</h3>
          <ul className="space-y-4 text-white/70 font-semibold">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Delivery Terms'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-xs opacity-50">Download App</h3>
          <p className="text-white/70 font-semibold mb-6">Get the best experience on mobile.</p>
          <div className="flex flex-col gap-3">
            <button className="bg-white/10 p-4 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-all border border-white/5 group">
              <Smartphone size={32} className="text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60">Download on the</p>
                <p className="font-bold text-lg leading-none">App Store</p>
              </div>
            </button>
            <button className="bg-white/10 p-4 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-white/20 transition-all border border-white/5 group">
              <Play size={32} fill="currentColor" className="text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60">Get it on</p>
                <p className="font-bold text-lg leading-none">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm font-medium">© 2024 Moshood Foods Premium Dining. All rights reserved.</p>
        <div className="flex gap-8 text-white/20 text-[10px] uppercase font-black tracking-widest">
          <span>Lagos</span>
          <span>Abuja</span>
          <span>London</span>
          <span>New York</span>
        </div>
      </div>
    </footer>
  );
}
