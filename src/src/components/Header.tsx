import { Search, Bell, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Header() {
  const { cartCount } = useCart();
  
  return (
    <header className="hidden lg:flex justify-between items-center h-20 px-10 w-full sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200 shadow-sm shadow-emerald-900/5">
      <div className="flex items-center gap-10">
        <div className="relative">
          <input
            type="text"
            className="bg-stone-100 border-none rounded-full py-2.5 px-11 w-96 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
            placeholder="Search for your cravings..."
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={18} />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-neutral-500 hover:text-primary transition-colors">
          <Bell size={22} />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-secondary border-2 border-stone-50 rounded-full"></span>
        </button>
        
        <button className="relative text-neutral-500 hover:text-primary transition-colors p-2">
          <ShoppingCart size={22} />
          <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-md">
            {cartCount}
          </span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-stone-200">
          <div className="text-right">
            <p className="text-sm font-bold text-on-surface">Moshood</p>
            <p className="text-[10px] text-on-surface-variant uppercase font-semibold">Premium Member</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-emerald-100 overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
