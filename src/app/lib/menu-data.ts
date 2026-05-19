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
  image: string;
}

export const MENU_DATA: MenuItem[] = [
  // Starters / Bites
  { id: 'bites-1', name: 'Kochchi Bite', description: 'Spicy local favorite with a magical kick.', category: 'Bites', prices: { base: 1400 }, image: '' },
  { id: 'bites-2', name: 'Cashew Plate', description: 'Premium roasted cashews.', category: 'Bites', prices: { base: 1600 }, image: '' },
  { id: 'bites-3', name: 'Chicken Fries', description: 'Crispy chicken strips served with house sauce.', category: 'Bites', prices: { base: 1700 }, image: '' },
  
  // French Fries
  { id: 'fries-1', name: 'Regular Fries', description: 'Classic golden crispy fries.', category: 'Fries', prices: { base: 900 }, image: '' },
  { id: 'fries-2', name: 'Large Fries', description: 'Sharing portion of golden fries.', category: 'Fries', prices: { base: 1100 }, image: '' },

  // Fried Rice
  { id: 'rice-1', name: 'Vege Fried Rice', description: 'Basmathi rice with garden vegetables.', category: 'Fried Rice', prices: { base: 1000, half: 600, full: 1000 }, image: '' },
  { id: 'rice-2', name: 'Egg Fried Rice', description: 'Classic wok-fired egg rice.', category: 'Fried Rice', prices: { base: 1100, half: 650, full: 1100 }, image: '' },
  { id: 'rice-3', name: 'Chicken Fried Rice', description: 'Savory chicken and Basmathi rice.', category: 'Fried Rice', prices: { base: 1200, half: 700, full: 1200 }, image: '' },
  { id: 'rice-4', name: 'Sea Food Fried Rice', description: 'Mixed seafood with Basmathi rice.', category: 'Fried Rice', prices: { base: 1500, half: 850, full: 1500 }, image: '' },
  { id: 'rice-5', name: 'Hogwarts Special Fried Rice', description: 'Choice of chicken, cashew, prawns, cuttlefish, talapath fish, sausages, nuts, dried fruits, and three fried eggs.', category: 'Fried Rice', prices: { base: 2400 }, image: '' },

  // Cheese Kottu
  { id: 'ckottu-1', name: 'Vege Cheese Kottu', description: 'Creamy and cheesy vegetable kottu.', category: 'Cheese Kottu', prices: { base: 1100, half: 650, full: 1100 }, image: '' },
  { id: 'ckottu-2', name: 'Chicken Cheese Kottu', description: 'The ultimate comfort food.', category: 'Cheese Kottu', prices: { base: 1300, half: 750, full: 1300 }, image: '' },
  { id: 'ckottu-3', name: 'Mix Cheese Kottu', description: 'A mix of everything cheesy.', category: 'Cheese Kottu', prices: { base: 1700, half: 950, full: 1700 }, image: '' },

  // Hot Butter
  { id: 'hb-1', name: 'Hot Butter Onion', description: 'Crispy fried onions with spicy butter.', category: 'Hot Butter', prices: { base: 1100 }, image: '' },
  { id: 'hb-2', name: 'Hot Butter Mushroom', description: 'Golden battered mushrooms.', category: 'Hot Butter', prices: { base: 1200 }, image: '' },
  { id: 'hb-3', name: 'Hot Butter Cuttle Fish', description: 'A signature spicy seafood delight.', category: 'Hot Butter', prices: { base: 1800 }, image: '' },

  // Burgers
  { id: 'burger-1', name: 'Vegetable Burger', description: 'Served with French Fries.', category: 'Burgers', prices: { base: 900 }, image: '' },
  { id: 'burger-2', name: 'Chicken Burger', description: 'Served with French Fries.', category: 'Burgers', prices: { base: 1200 }, image: '' },
  { id: 'burger-3', name: 'Tower Burger', description: 'Our giant signature burger. Served with French Fries.', category: 'Burgers', prices: { base: 4700 }, image: '' },

  // Juices
  { id: 'juice-1', name: 'Apple Juice', description: 'Freshly pressed.', category: 'Juices', prices: { base: 750 }, image: '' },
  { id: 'juice-2', name: 'Avocado Juice', description: 'Creamy and refreshing.', category: 'Juices', prices: { base: 600 }, image: '' },
  { id: 'juice-3', name: 'Lime Juice', description: 'Zesty and fresh.', category: 'Juices', prices: { base: 900 }, image: '' },

  // Milkshakes
  { id: 'shake-1', name: 'Milo Milkshake', description: 'Local favorite chocolate malt.', category: 'Milkshakes', prices: { base: 650 }, image: '' },
  { id: 'shake-2', name: 'Hogwarts Special Milkshake', description: 'Our grandest shake creation.', category: 'Milkshakes', prices: { base: 1650 }, image: '' },

  // Mojitos
  { id: 'mojito-1', name: 'Passion Mojito', description: 'Tropical passion fruit blend.', category: 'Mojito', prices: { base: 550 }, image: '' },
  { id: 'mojito-2', name: 'Blueberry Mojito', description: 'Magical blue refreshment.', category: 'Mojito', prices: { base: 550 }, image: '' },
  { id: 'mojito-3', name: 'Cookie Espresso', description: 'A unique coffee-based mojito.', category: 'Mojito', prices: { base: 900 }, image: '' },

  // Desserts
  { id: 'dessert-1', name: 'Watalappan', description: 'Traditional jaggery pudding.', category: 'Desserts', prices: { base: 550 }, image: '' },
  { id: 'dessert-2', name: 'Lava Cake', description: 'Warm chocolate heart.', category: 'Desserts', prices: { base: 350 }, image: '' },
  { id: 'dessert-3', name: 'Kiri Peni', description: 'Curd and treacle.', category: 'Desserts', prices: { base: 650 }, image: '' },
];

export const CATEGORIES = [
  'Bites', 'Fries', 'Fried Rice', 'Cheese Kottu', 'Hot Butter', 'Burgers', 'Juices', 'Milkshakes', 'Mojito', 'Desserts'
];
