import { UtensilsCrossed, Compass, ReceiptText, User } from 'lucide-react';

export function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-20 bg-stone-50 border-t border-stone-200 flex justify-around items-center z-50 px-6 backdrop-blur-lg bg-opacity-90">
      <button className="flex flex-col items-center gap-1.5 text-primary">
        <div className="p-2 bg-primary/10 rounded-xl">
          <UtensilsCrossed size={22} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider">Menu</span>
      </button>
      
      <button className="flex flex-col items-center gap-1.5 text-neutral-500">
        <Compass size={22} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Discover</span>
      </button>
      
      <button className="flex flex-col items-center gap-1.5 text-neutral-500">
        <ReceiptText size={22} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Orders</span>
      </button>
      
      <button className="flex flex-col items-center gap-1.5 text-neutral-500">
        <User size={22} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
      </button>
    </nav>
  );
}
