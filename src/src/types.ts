export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'swallow' | 'rice' | 'starters' | 'drinks';
  isFeatured?: boolean;
  chefSignature?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
