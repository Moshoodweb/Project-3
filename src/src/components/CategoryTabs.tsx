import { 
  Menu, 
  Soup, 
  Wheat, 
  Cookie, 
  GlassWater 
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Menu', icon: Menu },
  { id: 'swallow', name: 'Swallow & Soups', icon: Soup },
  { id: 'rice', name: 'Rice & Grains', icon: Wheat },
  { id: 'starters', name: 'Small Chops', icon: Cookie },
  { id: 'drinks', name: 'Drinks', icon: GlassWater },
];

export function CategoryTabs() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
      {categories.map((cat, idx) => (
        <button
          key={cat.id}
          className={`whitespace-nowrap flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-sm ${
            idx === 0 
              ? 'bg-emerald-950 text-white shadow-emerald-950/20 shadow-lg' 
              : 'bg-white border border-stone-200 text-on-surface hover:bg-stone-50 hover:shadow-md'
          }`}
        >
          <cat.icon size={18} className={idx === 0 ? 'text-white' : 'text-primary'} />
          {cat.name}
        </button>
      ))}
    </div>
  );
}
