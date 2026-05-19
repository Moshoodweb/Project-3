import { motion } from 'motion/react';
import { 
  UtensilsCrossed, 
  Compass, 
  ReceiptText, 
  Heart, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

const navItems = [
  { id: 'naija', label: 'Naija Specials', icon: UtensilsCrossed, active: true },
  { id: 'discover', label: 'Discover', icon: Compass },
  { id: 'orders', label: 'My Orders', icon: ReceiptText },
  { id: 'favorites', label: 'Favorites', icon: Heart },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden lg:flex flex-col p-6 gap-2 h-screen w-72 border-r border-stone-200 bg-stone-50 shadow-xl shadow-emerald-950/5 z-50">
      <div className="mb-10 px-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2 rounded-xl">
            <UtensilsCrossed size={32} />
          </div>
          <div>
            <h1 className="font-bold text-xl leading-none text-primary">MOSHOOD</h1>
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-medium">Foods</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`flex items-center gap-3 rounded-lg px-4 py-3 font-semibold transition-all duration-200 ${
              item.active 
                ? 'bg-emerald-100 text-primary shadow-sm' 
                : 'text-neutral-600 hover:bg-stone-100'
            }`}
          >
            <item.icon size={20} className={item.active ? 'text-primary' : 'text-neutral-600'} />
            <span className="text-sm font-semibold">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-stone-200">
        <a 
          href="#" 
          className="flex items-center gap-3 text-neutral-600 px-4 py-3 hover:bg-stone-100 rounded-lg transition-all"
        >
          <HelpCircle size={20} />
          <span className="text-sm font-semibold">Help & Support</span>
        </a>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 w-full bg-primary text-on-primary py-3 rounded-xl font-semibold shadow-lg shadow-primary/20 transition-transform"
        >
          Order Now
        </motion.button>
      </div>
    </aside>
  );
}
