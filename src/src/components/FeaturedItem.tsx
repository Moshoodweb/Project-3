import { motion } from 'motion/react';
import { MenuItem } from '../types';

interface FeaturedItemProps {
  item: MenuItem;
}

export function FeaturedItem({ item }: FeaturedItemProps) {
  return (
    <div className="lg:col-span-1 xl:col-span-2 bg-secondary/10 rounded-[2.5rem] p-6 lg:p-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center group border border-secondary/20 shadow-xl shadow-secondary/5">
      <div className="w-full md:w-5/12 h-72 rounded-[2rem] overflow-hidden shadow-2xl relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      <div className="w-full md:w-7/12">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-secondary text-white font-black uppercase text-[10px] px-3 py-1 rounded-full tracking-widest shadow-md">
            Chef's Signature
          </span>
        </div>
        <h4 className="text-3xl lg:text-4xl font-extrabold text-on-surface mb-4 leading-tight">
          {item.name}
        </h4>
        <p className="text-on-surface-variant mb-10 text-lg font-medium opacity-80 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between gap-6">
          <span className="text-3xl font-black text-on-surface tracking-tight">
            ₦{item.price.toLocaleString()}
          </span>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-secondary/30 hover:shadow-secondary/40 transition-all flex-1 md:flex-none"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </div>
  );
}
