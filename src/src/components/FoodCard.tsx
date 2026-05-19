import { ShoppingCart, Plus, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { MenuItem } from '../types';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface FoodItemCardProps {
  item: MenuItem;
}

export function FoodItemCard({ item }: FoodItemCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    setIsAdded(true);
    // Optional: reset after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white border border-stone-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full"
    >
      <div className="h-screen overflow-hidden relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-8 right-8 bg-white/95 backdrop-blur px-6 py-3 rounded-2xl text-2xl font-black text-primary shadow-lg">
          ₦{item.price.toLocaleString()}
        </div>
      </div>
      
      <div className="p-12 flex flex-col flex-1">
        <h4 className="text-4xl font-bold text-on-surface mb-4 leading-tight">{item.name}</h4>
        <p className="text-base text-on-surface-variant font-medium line-clamp-3 mb-10 flex-1 opacity-80 leading-relaxed">
          {item.description}
        </p>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className={`w-full font-bold py-6 rounded-2xl flex items-center justify-center gap-3 text-xl transition-all shadow-sm ${
            isAdded
              ? 'bg-green-500 text-white'
              : 'bg-stone-100 text-primary group-hover:bg-primary group-hover:text-white'
          }`}
        >
          {isAdded ? (
            <>
              <Check size={24} />
              Added
            </>
          ) : (
            <>
              <ShoppingCart size={24} />
              Add to Cart
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}

export function DrinkCard({ item }: FoodItemCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-stone-50 rounded-[2.5rem] p-5 text-center group border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-xl transition-all"
    >
      <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-5 shadow-inner">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h5 className="font-bold text-on-surface mb-1">{item.name}</h5>
      <p className="text-primary font-black mb-5">₦{item.price.toLocaleString()}</p>
      
      <motion.button
        whileHover={{ rotate: 90 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => {
          handleAddToCart();
        }}
        className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/20 active:scale-90 transition-transform ${
          isAdded ? 'bg-green-500' : 'bg-primary text-white'
        }`}
      >
        {isAdded ? <Check size={24} /> : <Plus size={24} strokeWidth={3} />}
      </motion.button>
    </motion.div>
  );
}
