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
    name: 'Hot Buttered Popcorn',
    description: 'Freshly popped magical corn kernels.',
    category: 'Bites',
    prices: { base: 450 },
    image: '' // User to add photo
  },
  {
    id: 'bites-2',
    name: 'French Fries',
    description: 'Crispy golden fries served with wizard sauce.',
    category: 'Bites',
    prices: { base: 650 },
    image: '' // User to add photo
  },
  {
    id: 'bites-3',
    name: 'Chicken Wings (6pcs)',
    description: 'Spicy wings straight from the Owlery.',
    category: 'Bites',
    prices: { base: 1100 },
    image: '' // User to add photo
  },
  {
    id: 'bites-4',
    name: 'Cheesy Garlic Bread',
    description: 'Toasted bread infused with herbs and melted cheese.',
    category: 'Bites',
    prices: { base: 750 },
    image: '' // User to add photo
  },
  // Rice
  {
    id: 'rice-1',
    name: 'Hogwarts Special Nasi Goreng',
    description: 'Wok-fired rice with traditional wizarding spices.',
    category: 'Rice',
    prices: { base: 1250 },
    toppings: ['Fried Egg', 'Prawns', 'Cashew', 'Mushroom', 'Meatballs'],
    image: '' // User to add photo
  },
  {
    id: 'rice-2',
    name: 'Dragon Fire Fried Rice',
    description: 'Extra spicy rice for the brave of heart.',
    category: 'Rice',
    prices: { base: 1150 },
    image: '' // User to add photo
  },
  // Pasta
  {
    id: 'pasta-1',
    name: 'Creamy Carbonara',
    description: 'Rich creamy sauce with bits of smoke-cured meat.',
    category: 'Pasta',
    prices: { half: 850, full: 1450, base: 1450 },
    image: '' // User to add photo
  },
  {
    id: 'pasta-2',
    name: 'Basil Pesto Pasta',
    description: 'Fresh basil and herb infusion.',
    category: 'Pasta',
    prices: { half: 750, full: 1350, base: 1350 },
    image: '' // User to add photo
  },
  {
    id: 'pasta-3',
    name: 'Spicy Meatball Marinara',
    description: 'House-made meatballs in a zesty tomato sauce.',
    category: 'Pasta',
    prices: { half: 950, full: 1650, base: 1650 },
    image: '' // User to add photo
  }
];

export const TOPPING_PRICES: Record<string, number> = {
  'Fried Egg': 150,
  'Prawns': 350,
  'Cashew': 200,
  'Mushroom': 150,
  'Meatballs': 300
};

export const CATEGORIES = ['Bites', 'Rice', 'Pasta'];
