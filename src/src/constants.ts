import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Swallows
  {
    id: 's1',
    name: 'Pounded Yam & Egusi',
    description: 'Fluffy pounded yam served with rich melon seed soup, assorted meat, and fresh spinach.',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1627404116524-734ed92f58be?auto=format&fit=crop&q=80&w=800',
    category: 'swallow'
  },
  {
    id: 's2',
    name: 'Eba & Seafood Okro',
    description: 'Traditional cassava flakes paired with crunchy okro soup loaded with fresh seafood.',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=800',
    category: 'swallow'
  },
  {
    id: 's3',
    name: 'Amala & Abula Special',
    description: 'The pride of Ibadan. Soft yam flour with Gbegiri, Ewedu, and spicy Obe Ata.',
    price: 6200,
    image: 'https://images.unsplash.com/photo-1512058560550-427499684611?auto=format&fit=crop&q=80&w=800',
    category: 'swallow'
  },
  // Rice
  {
    id: 'r1',
    name: 'Coconut Rice Delight',
    description: 'Fragrant rice cooked in fresh coconut milk with vegetables and king prawns.',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800',
    category: 'rice'
  },
  {
    id: 'r2',
    name: 'Village Ofada Rice',
    description: 'Unpolished local rice served in a wrap of green Ayamase stew with diced protein.',
    price: 5800,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    category: 'rice'
  },
  // Starters
  {
    id: 'st1',
    name: 'Premium Beef Suya',
    description: 'Thinly sliced beef marinated in authentic Yaji spice, flame-grilled and served with onions and cabbage.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1532636875304-1c89111d9b8b?auto=format&fit=crop&q=80&w=800',
    category: 'starters',
    chefSignature: true
  },
  {
    id: 'st2',
    name: 'Spiced Puff Puff',
    description: 'Soft, airy, and golden fried dough balls with a hint of nutmeg and chili.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    category: 'starters'
  },
  // Drinks
  {
    id: 'd1',
    name: 'Chilled Zobo',
    description: 'Refreshing hibiscus tea with a blend of ginger and cloves.',
    price: 800,
    image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=800',
    category: 'drinks'
  },
  {
    id: 'd2',
    name: 'Kunu Aya',
    description: 'Creamy tiger nut milk infused with dates and coconut.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=800',
    category: 'drinks'
  },
  {
    id: 'd3',
    name: 'Ginger Fusion',
    description: 'Zesty ginger and citrus blend for a natural energy boost.',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800',
    category: 'drinks'
  },
  {
    id: 'd4',
    name: 'Lagos Chapman',
    description: 'The iconic Nigerian mocktail refreshing ginger, citrus and bitters.',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800',
    category: 'drinks'
  }
];
