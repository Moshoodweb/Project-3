import { Utensils, ArrowLeftRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="space-y-6">
      {/* Restaurant Header */}
      <div className="bg-stone-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-stone-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-inner">
            <Utensils size={24} />
          </div>
          <div>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Ordering from</p>
            <h3 className="font-bold text-lg text-on-surface">The Jollof House</h3>
          </div>
        </div>
        <button className="flex items-center gap-2 text-primary hover:text-primary-container font-semibold text-sm px-5 py-2.5 rounded-xl bg-white border border-outline-variant shadow-sm hover:shadow-md transition-all">
          <ArrowLeftRight size={16} />
          Change Restaurant
        </button>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-primary rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-end min-h-[360px] group shadow-2xl shadow-emerald-950/20">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
          <img
            src="https://images.unsplash.com/photo-1627404116524-734ed92f58be?auto=format&fit=crop&q=80&w=1200"
            alt="Smokey Jollof"
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="relative z-20">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold mb-4 inline-block uppercase tracking-wider shadow-lg"
            >
              Daily Special
            </motion.span>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-3 leading-tight tracking-tight drop-shadow-lg">
              Smokey Jollof & <br /> Suya Fusion
            </h2>
            <p className="text-white/90 text-lg max-w-lg font-medium leading-relaxed drop-shadow-md">
              The authentic taste of Lagos streets, elevated for your palate. Perfectly spiced, smoky, and unforgettable.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 bg-tertiary-container rounded-[2rem] p-8 flex flex-col justify-center items-center text-center text-white relative overflow-hidden shadow-2xl shadow-tertiary/20">
          <div className="absolute top-0 right-0 p-6 opacity-30">
            <Sparkles size={64} className="text-white animate-pulse" />
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
          >
            <span className="text-5xl font-black mb-2 block">30% OFF</span>
          </motion.div>
          <p className="font-bold uppercase tracking-[0.2em] text-xs mb-6 opacity-90">First Order Discount</p>
          <button className="bg-white text-tertiary font-bold py-3 px-8 rounded-full shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-0.5 transition-all active:scale-95">
            Claim Now
          </button>
        </div>
      </div>
    </div>
  );
}
