export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  prices: {
    base: number;
    half?: number;
    full?: number;
  };
  toppings?: string[];
  image: string;
}

export const MENU_DATA: MenuItem[] = [
  // Bites
  {
    id: 'bites-1',
    name: 'French Fries',
    description: 'Classic golden crispy fries served with house-made dipping sauce.',
    category: 'Bites',
    prices: { base: 650 },
    image: ''
  },
  {
    id: 'bites-2',
    name: 'Cheesy Garlic Bread',
    description: 'Toasted baguette infused with herbs and thick melted mozzarella.',
    category: 'Bites',
    prices: { base: 750 },
    image: ''
  },
  {
    id: 'bites-3',
    name: 'Chicken Wings (6pcs)',
    description: 'Succulent wings tossed in your choice of spicy or honey glaze.',
    category: 'Bites',
    prices: { base: 1150 },
    image: ''
  },
  {
    id: 'bites-4',
    name: 'Potato Wedges',
    description: 'Thick-cut seasoned wedges served with a magical sour cream dip.',
    category: 'Bites',
    prices: { base: 850 },
    image: ''
  },
  // Rice
  {
    id: 'rice-1',
    name: 'Hogwarts Special Rice',
    description: 'Our signature wok-fired rice with a blend of secret spices and premium ingredients.',
    category: 'Rice',
    prices: { base: 1450 },
    toppings: ['Fried Egg', 'Prawns', 'Cashew', 'Mushroom', 'Meatballs'],
    image: ''
  },
  {
    id: 'rice-2',
    name: 'Dragon Fire Fried Rice',
    description: 'Intensely spicy fried rice for those who seek adventure.',
    category: 'Rice',
    prices: { base: 1250 },
    image: ''
  },
  // Pasta
  {
    id: 'pasta-1',
    name: 'Creamy Carbonara',
    description: 'Rich, velvet sauce with crispy bacon bits and parmesan cheese.',
    category: 'Pasta',
    prices: { half: 850, full: 1550, base: 1550 },
    image: ''
  },
  {
    id: 'pasta-2',
    name: 'Basil Pesto Pasta',
    description: 'Fragrant house-made basil pesto with nuts and extra virgin olive oil.',
    category: 'Pasta',
    prices: { half: 750, full: 1450, base: 1450 },
    image: ''
  },
  // Beverages
  {
    id: 'bev-1',
    name: 'Butterbeer',
    description: 'The wizarding world\'s most famous frothy, butterscotch-flavored beverage.',
    category: 'Beverages',
    prices: { base: 850 },
    image: ''
  }
];

export const TOPPING_PRICES: Record<string, number> = {
  'Fried Egg': 150,
  'Prawns': 350,
  'Cashew': 200,
  'Mushroom': 150,
  'Meatballs': 300
};

export const CATEGORIES = ['Bites', 'Rice', 'Pasta', 'Beverages'];