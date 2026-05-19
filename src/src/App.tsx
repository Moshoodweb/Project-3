/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryTabs } from './components/CategoryTabs';
import { Section } from './components/Section';
import { FoodItemCard, DrinkCard } from './components/FoodCard';
import { FeaturedItem } from './components/FeaturedItem';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { MENU_ITEMS } from './constants';
import { UtensilsCrossed, ShoppingCart, Menu } from 'lucide-react';

export default function App() {
  const swallows = MENU_ITEMS.filter(item => item.category === 'swallow');
  const rice = MENU_ITEMS.filter(item => item.category === 'rice');
  const starters = MENU_ITEMS.filter(item => item.category === 'starters');
  const drinks = MENU_ITEMS.filter(item => item.category === 'drinks');
  const featuredSuya = starters.find(s => s.chefSignature) || starters[0];
  const regularStarters = starters.filter(s => !s.chefSignature);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Sidebar - Desktop Only */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen relative flex flex-col">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 adire-pattern pointer-events-none opacity-[0.03] z-0"></div>

        {/* Mobile Header */}
        <header className="sticky top-0 z-40 lg:hidden flex justify-between items-center h-20 px-6 w-full bg-stone-50/90 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white p-1.5 rounded-lg">
              <UtensilsCrossed size={20} />
            </div>
            <span className="font-black text-primary tracking-tighter">MOSHOOD</span>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-primary relative group">
              <ShoppingCart size={22} strokeWidth={2.5} />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-[9px] w-4.5 h-4.5 flex items-center justify-center rounded-full font-black shadow-sm">3</span>
            </button>
            <button className="text-primary p-1 bg-stone-100 rounded-lg">
              <Menu size={22} strokeWidth={2.5} />
            </button>
          </div>
        </header>

        {/* Web Header */}
        <Header />

        {/* Page Content Container */}
        <div className="p-6 lg:p-10 max-w-7xl mx-auto flex-1 w-full relative z-10">
          
          <Hero />

          <div className="mt-12">
            <CategoryTabs />
          </div>

          <div className="mt-16 space-y-12">
            {/* Swallow & Soups Section */}
            <Section title="Swallow & Soups" subtitle="The heart of Nigerian hospitality">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {swallows.map(item => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </Section>

            {/* Rice & Grains Section */}
            <Section title="Rice & Grains" subtitle="The soul of the party">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {rice.map(item => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </Section>

            {/* Small Chops Section */}
            <Section title="Small Chops & Starters" subtitle="Crunchy, spicy, and irresistible">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <FeaturedItem item={featuredSuya} />
                <div className="flex flex-col gap-8">
                  {regularStarters.map(item => (
                    <FoodItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </Section>

            {/* Drinks Section */}
            <Section title="Drinks" subtitle="Refreshing native beverages" viewAll={false}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {drinks.map(item => (
                  <DrinkCard key={item.id} item={item} />
                ))}
              </div>
            </Section>
          </div>
        </div>

        <Footer />
      </main>

      {/* Mobile Nav - Bottom Sticky */}
      <MobileNav />
    </div>
  );
}
