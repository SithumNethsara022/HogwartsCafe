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
  // Bites
  { id: 'bite-1', name: 'Kochchi Bite', description: 'Spicy local favorite with a magical kick.', category: 'Bites', prices: { base: 1400 }, image: '' },
  { id: 'bite-2', name: 'Cashew Plate', description: 'Premium roasted cashews.', category: 'Bites', prices: { base: 1600 }, image: '' },
  { id: 'bite-3', name: 'Chicken Fries', description: 'Crispy chicken strips served with house sauce.', category: 'Bites', prices: { base: 1700 }, image: '' },

  // French Fries
  { id: 'fries-1', name: 'Regular Fries', description: 'Classic golden crispy fries.', category: 'French Fries', prices: { base: 900 }, image: '' },
  { id: 'fries-2', name: 'Large Fries', description: 'Sharing portion of golden fries.', category: 'French Fries', prices: { base: 1100 }, image: '' },

  // Fried Rice
  { id: 'rice-1', name: 'Vege Fried Rice', description: 'Basmathi rice with garden vegetables.', category: 'Fried Rice', prices: { base: 1000 }, image: '' },
  { id: 'rice-2', name: 'Egg Fried Rice', description: 'Classic wok-fired egg rice.', category: 'Fried Rice', prices: { base: 1100 }, image: '' },
  { id: 'rice-3', name: 'Chicken Fried Rice', description: 'Savory chicken and Basmathi rice.', category: 'Fried Rice', prices: { base: 1200 }, image: '' },
  { id: 'rice-4', name: 'Sea Food Fried Rice', description: 'Mixed seafood with Basmathi rice.', category: 'Fried Rice', prices: { base: 1500 }, image: '' },
  { id: 'rice-5', name: 'Cashew Fried Rice', description: 'Rich cashew nuts with Basmathi rice.', category: 'Fried Rice', prices: { base: 1500 }, image: '' },
  { id: 'rice-6', name: 'Mix Fried Rice', description: 'A combination of meats and vegetables.', category: 'Fried Rice', prices: { base: 1600 }, image: '' },
  { id: 'rice-7', name: 'Hogwarts Special Fried Rice', description: 'Choice of chicken, cashew, prawns, cuttlefish, talapath fish, sausages, almond, pistachio, walnut, hazelnut, cherry, cranberry, kiwi, and three fried eggs.', category: 'Fried Rice', prices: { base: 2400 }, image: '' },

  // Cheese Kottu
  { id: 'ck-1', name: 'Vege Cheese Kottu', description: 'Creamy vegetable kottu with cheese.', category: 'Cheese Kottu', prices: { base: 1100 }, image: '' },
  { id: 'ck-2', name: 'Egg Cheese Kottu', description: 'Classic egg kottu with a cheesy twist.', category: 'Cheese Kottu', prices: { base: 1200 }, image: '' },
  { id: 'ck-3', name: 'Chicken Cheese Kottu', description: 'The ultimate comfort food.', category: 'Cheese Kottu', prices: { base: 1300 }, image: '' },
  { id: 'ck-4', name: 'Sea Food Cheese Kottu', description: 'Fresh seafood tossed with cheesy kottu.', category: 'Cheese Kottu', prices: { base: 1600 }, image: '' },
  { id: 'ck-5', name: 'Mix Cheese Kottu', description: 'A hearty mix of everything cheesy.', category: 'Cheese Kottu', prices: { base: 1700 }, image: '' },

  // Hot Butter
  { id: 'hb-1', name: 'Hot Butter Onion', description: 'Crispy fried onions with spicy butter.', category: 'Hot Butter', prices: { base: 1100 }, image: '' },
  { id: 'hb-2', name: 'Hot Butter Mushroom', description: 'Golden battered mushrooms.', category: 'Hot Butter', prices: { base: 1200 }, image: '' },
  { id: 'hb-3', name: 'Hot Butter Cuttle Fish', description: 'A signature spicy seafood delight.', category: 'Hot Butter', prices: { base: 1800 }, image: '' },
  { id: 'hb-4', name: 'Hot Butter Prawns', description: 'Spicy buttered premium prawns.', category: 'Hot Butter', prices: { base: 1800 }, image: '' },

  // Omelette
  { id: 'om-1', name: 'Vegetable Omelette', description: 'Fresh garden vegetables.', category: 'Omelette', prices: { base: 800 }, image: '' },
  { id: 'om-2', name: 'Cheese Omelette', description: 'Rich and gooey cheese.', category: 'Omelette', prices: { base: 1000 }, image: '' },
  { id: 'om-3', name: 'Chicken Omelette', description: 'Savory chicken bits.', category: 'Omelette', prices: { base: 1100 }, image: '' },
  { id: 'om-4', name: 'Sea Food Omelette', description: 'Mixed seafood medley.', category: 'Omelette', prices: { base: 1200 }, image: '' },
  { id: 'om-5', name: 'Mix Omelette', description: 'The grand mix.', category: 'Omelette', prices: { base: 1300 }, image: '' },

  // Deviled
  { id: 'dv-1', name: 'Deviled Sausage', description: 'Spicy and tangy sausages.', category: 'Deviled', prices: { base: 1400 }, image: '' },
  { id: 'dv-2', name: 'Deviled Chicken', description: 'Wok-fired spicy chicken.', category: 'Deviled', prices: { base: 1700 }, image: '' },
  { id: 'dv-3', name: 'Deviled Prawns', description: 'Fiery deviled prawns.', category: 'Deviled', prices: { base: 1900 }, image: '' },
  { id: 'dv-4', name: 'Deviled Pork', description: 'Classic spicy pork.', category: 'Deviled', prices: { base: 2200 }, image: '' },

  // Noodles
  { id: 'nd-1', name: 'Vege Noodles', description: 'Classic vegetable noodles.', category: 'Noodles', prices: { base: 900 }, image: '' },
  { id: 'nd-2', name: 'Egg Noodles', description: 'Wok-fired egg noodles.', category: 'Noodles', prices: { base: 1000 }, image: '' },
  { id: 'nd-3', name: 'Chicken Noodles', description: 'Savory chicken noodles.', category: 'Noodles', prices: { base: 1100 }, image: '' },
  { id: 'nd-4', name: 'Sea Food Noodles', description: 'Fresh seafood noodles.', category: 'Noodles', prices: { base: 1400 }, image: '' },
  { id: 'nd-5', name: 'Cashew Noodles', description: 'Crunchy cashew noodles.', category: 'Noodles', prices: { base: 1400 }, image: '' },
  { id: 'nd-6', name: 'Mix Noodles', description: 'Combination noodles.', category: 'Noodles', prices: { base: 1500 }, image: '' },
  { id: 'nd-7', name: 'Hogwarts Special Noodles', description: 'Choice of chicken, cashew, prawns, cuttlefish, talapath fish, sausages, and premium nuts.', category: 'Noodles', prices: { base: 2300 }, image: '' },

  // Nasi Goreng
  { id: 'ng-1', name: 'Chicken Nasi Goreng', description: 'Served with French Fries.', category: 'Nasi Goreng', prices: { base: 1400 }, image: '' },
  { id: 'ng-2', name: 'Sea Food Nasi Goreng', description: 'Served with French Fries.', category: 'Nasi Goreng', prices: { base: 1500 }, image: '' },
  { id: 'ng-3', name: 'Mix Nasi Goreng', description: 'Served with French Fries.', category: 'Nasi Goreng', prices: { base: 1700 }, image: '' },
  { id: 'ng-4', name: 'Hogwarts Special Nasi Goreng', description: 'Served with French Fries and a grand selection of proteins.', category: 'Nasi Goreng', prices: { base: 2500 }, image: '' },

  // Burgers
  { id: 'bg-1', name: 'Vegetable Burger', description: 'Served with French Fries.', category: 'Burgers', prices: { base: 900 }, image: '' },
  { id: 'bg-2', name: 'Vege Cheese Burger', description: 'Served with French Fries.', category: 'Burgers', prices: { base: 1000 }, image: '' },
  { id: 'bg-3', name: 'Egg Burger', description: 'Served with French Fries.', category: 'Burgers', prices: { base: 1100 }, image: '' },
  { id: 'bg-4', name: 'Chicken Burger', description: 'Served with French Fries.', category: 'Burgers', prices: { base: 1200 }, image: '' },
  { id: 'bg-5', name: 'Crispy Chicken Burger', description: 'Served with French Fries.', category: 'Burgers', prices: { base: 1300 }, image: '' },
  { id: 'bg-6', name: 'Tower Burger', description: 'Our giant signature creation. Served with French Fries.', category: 'Burgers', prices: { base: 4700 }, image: '' },

  // Submarine
  { id: 'sub-1', name: 'Vegetable Submarine', description: 'Served with French Fries.', category: 'Submarine', prices: { base: 1000 }, image: '' },
  { id: 'sub-2', name: 'Vege Cheese Submarine', description: 'Served with French Fries.', category: 'Submarine', prices: { base: 1200 }, image: '' },
  { id: 'sub-3', name: 'Egg Submarine', description: 'Served with French Fries.', category: 'Submarine', prices: { base: 1300 }, image: '' },
  { id: 'sub-4', name: 'Spicy Chicken Submarine', description: 'Served with French Fries.', category: 'Submarine', prices: { base: 1500 }, image: '' },

  // Sandwich
  { id: 'sw-1', name: 'Cheese Sandwich', description: 'Served with French Fries.', category: 'Sandwich', prices: { base: 1000 }, image: '' },
  { id: 'sw-2', name: 'Club Sandwich', description: 'Served with French Fries.', category: 'Sandwich', prices: { base: 1200 }, image: '' },

  // Biriyani
  { id: 'bir-1', name: 'Egg Biriyani', description: 'Fragrant rice with spiced eggs. Options: 1p, 2p, 3p, 4p.', category: 'Biriyani', prices: { base: 1400 }, image: '' },

  // Juices
  { id: 'j-1', name: 'Apple Juice', description: 'Freshly pressed.', category: 'Juices', prices: { base: 750 }, image: '' },
  { id: 'j-2', name: 'Orange Juice', description: 'Zesty orange.', category: 'Juices', prices: { base: 650 }, image: '' },
  { id: 'j-3', name: 'Anoda Juice', description: 'Tropical soursop.', category: 'Juices', prices: { base: 600 }, image: '' },
  { id: 'j-4', name: 'Avocado Juice', description: 'Creamy avocado.', category: 'Juices', prices: { base: 600 }, image: '' },
  { id: 'j-5', name: 'Passion Juice', description: 'Tart passion fruit.', category: 'Juices', prices: { base: 600 }, image: '' },
  { id: 'j-6', name: 'Strawberry Juice', description: 'Sweet strawberry.', category: 'Juices', prices: { base: 700 }, image: '' },
  { id: 'j-7', name: 'Mango Juice', description: 'Fresh mango.', category: 'Juices', prices: { base: 600 }, image: '' },
  { id: 'j-8', name: 'Lime Juice', description: 'Refreshing lime.', category: 'Juices', prices: { base: 900 }, image: '' },
  { id: 'j-9', name: 'Woodapple Juice', description: 'Local specialty.', category: 'Juices', prices: { base: 600 }, image: '' },

  // Milkshake
  { id: 'ms-1', name: 'Avocado Milkshake', description: 'Rich and creamy.', category: 'Milkshake', prices: { base: 650 }, image: '' },
  { id: 'ms-2', name: 'Vanilla Milkshake', description: 'Classic vanilla.', category: 'Milkshake', prices: { base: 750 }, image: '' },
  { id: 'ms-3', name: 'Mango Milkshake', description: 'Tropical mango.', category: 'Milkshake', prices: { base: 650 }, image: '' },
  { id: 'ms-4', name: 'Milo Milkshake', description: 'Local chocolate malt favorite.', category: 'Milkshake', prices: { base: 650 }, image: '' },
  { id: 'ms-5', name: 'Passion Milkshake', description: 'Unique passion blend.', category: 'Milkshake', prices: { base: 650 }, image: '' },
  { id: 'ms-6', name: 'Hogwarts Special Milkshake', description: 'Our grandest shake creation.', category: 'Milkshake', prices: { base: 1650 }, image: '' },

  // Hot Drinks
  { id: 'hd-1', name: 'Coffee', description: 'Freshly brewed.', category: 'Hot Drinks', prices: { base: 600 }, image: '' },
  { id: 'hd-2', name: 'Chai Masala Tea', description: 'Spiced aromatic tea.', category: 'Hot Drinks', prices: { base: 600 }, image: '' },
  { id: 'hd-3', name: 'Strawberry Tea', description: 'Fruit infused tea.', category: 'Hot Drinks', prices: { base: 600 }, image: '' },
  { id: 'hd-4', name: 'Hot Chocolate', description: 'Rich cocoa.', category: 'Hot Drinks', prices: { base: 750 }, image: '' },

  // Mojito
  { id: 'mj-1', name: 'Black Mojito', description: 'A dark magical twist.', category: 'Mojito', prices: { base: 500 }, image: '' },
  { id: 'mj-2', name: 'Passion Mojito', description: 'Zesty passion fruit.', category: 'Mojito', prices: { base: 550 }, image: '' },
  { id: 'mj-3', name: 'Strawberry Mojito', description: 'Fresh strawberry.', category: 'Mojito', prices: { base: 550 }, image: '' },
  { id: 'mj-4', name: 'Apple Mojito', description: 'Crisp apple.', category: 'Mojito', prices: { base: 550 }, image: '' },
  { id: 'mj-5', name: 'Virgin Mojito', description: 'Classic refreshing lime.', category: 'Mojito', prices: { base: 500 }, image: '' },
  { id: 'mj-6', name: 'Blueberry Mojito', description: 'Enchanting blueberry.', category: 'Mojito', prices: { base: 550 }, image: '' },
  { id: 'mj-7', name: 'Coconut & Jaggery Mojito', description: 'A local tropical blend.', category: 'Mojito', prices: { base: 900 }, image: '' },
  { id: 'mj-8', name: 'Cookie Espresso', description: 'Coffee based mojito.', category: 'Mojito', prices: { base: 900 }, image: '' },
  { id: 'mj-9', name: 'Passion Fruit Mojito', description: 'Pure passion fruit.', category: 'Mojito', prices: { base: 900 }, image: '' },

  // Bubble Shakes
  { id: 'bs-1', name: 'Chocolate Bubble Shake', description: 'Popping with flavor.', category: 'Bubble Shakes', prices: { base: 900 }, image: '' },
  { id: 'bs-2', name: 'Vanilla Bubble Shake', description: 'Smooth vanilla.', category: 'Bubble Shakes', prices: { base: 900 }, image: '' },
  { id: 'bs-3', name: 'Strawberry Bubble Shake', description: 'Sweet strawberry.', category: 'Bubble Shakes', prices: { base: 900 }, image: '' },
  { id: 'bs-4', name: 'Milo Bubble Shake', description: 'Chocolate malt bubbles.', category: 'Bubble Shakes', prices: { base: 900 }, image: '' },
  { id: 'bs-5', name: 'Coffee Bubble Shake', description: 'Caffeine kick bubbles.', category: 'Bubble Shakes', prices: { base: 900 }, image: '' },
  { id: 'bs-6', name: 'Passion Bubble Shake', description: 'Tart passion fruit bubbles.', category: 'Bubble Shakes', prices: { base: 900 }, image: '' },
  { id: 'bs-7', name: 'Mango Bubble Shake', description: 'Tropical mango bubbles.', category: 'Bubble Shakes', prices: { base: 900 }, image: '' },
  { id: 'bs-8', name: 'Kitkat Bubble Shake', description: 'Crunchy chocolate bubbles.', category: 'Bubble Shakes', prices: { base: 1200 }, image: '' },
  { id: 'bs-9', name: 'Nutella Bubble Shake', description: 'Hazelnut chocolate bubbles.', category: 'Bubble Shakes', prices: { base: 1400 }, image: '' },

  // Desserts
  { id: 'des-1', name: 'Chocolate Ice Cream', description: 'Rich chocolate scoop.', category: 'Desserts', prices: { base: 700 }, image: '' },
  { id: 'des-2', name: 'Vanilla Ice Cream', description: 'Classic vanilla scoop.', category: 'Desserts', prices: { base: 700 }, image: '' },
  { id: 'des-3', name: 'Strawberry Ice Cream', description: 'Sweet strawberry scoop.', category: 'Desserts', prices: { base: 700 }, image: '' },
  { id: 'des-4', name: 'Mango Ice Cream', description: 'Fresh mango scoop.', category: 'Desserts', prices: { base: 800 }, image: '' },
  { id: 'des-5', name: 'Fruit & Nut Ice Cream', description: 'Crunchy and fruity.', category: 'Desserts', prices: { base: 800 }, image: '' },
  { id: 'des-6', name: 'Butterscotch Ice Cream', description: 'Caramelized sweetness.', category: 'Desserts', prices: { base: 800 }, image: '' },
  { id: 'des-7', name: 'Cool Mint Ice Cream', description: 'Refreshing mint.', category: 'Desserts', prices: { base: 900 }, image: '' },
  { id: 'des-8', name: 'Salted Caramel Ice Cream', description: 'Perfect balance of flavors.', category: 'Desserts', prices: { base: 900 }, image: '' },
  { id: 'des-9', name: 'Cookie Dough Ice Cream', description: 'With chunks of cookie dough.', category: 'Desserts', prices: { base: 900 }, image: '' },
  { id: 'des-10', name: 'Rocky Road Ice Cream', description: 'Marshmallows and nuts.', category: 'Desserts', prices: { base: 900 }, image: '' },
  { id: 'des-11', name: 'Watalappan', description: 'Traditional jaggery pudding.', category: 'Desserts', prices: { base: 550 }, image: '' },
  { id: 'des-12', name: 'Kiri Peni', description: 'Curd and treacle.', category: 'Desserts', prices: { base: 650 }, image: '' },
  { id: 'des-13', name: 'Lava Cake', description: 'Warm chocolate heart.', category: 'Desserts', prices: { base: 350 }, image: '' },

  // Others
  { id: 'oth-1', name: 'Sprite', description: '250ml Bottle.', category: 'Others', prices: { base: 200 }, image: '' },
  { id: 'oth-2', name: 'Egb', description: 'Ginger Beer.', category: 'Others', prices: { base: 200 }, image: '' },
  { id: 'oth-3', name: 'Cocacola', description: 'Classic Coke.', category: 'Others', prices: { base: 200 }, image: '' },
  { id: 'oth-4', name: 'Fanta Orange', description: 'Orange soda.', category: 'Others', prices: { base: 200 }, image: '' },
  { id: 'oth-5', name: 'Fanta Portello', description: 'Grape soda.', category: 'Others', prices: { base: 200 }, image: '' },
  { id: 'oth-6', name: 'Pepsi', description: 'Classic Pepsi.', category: 'Others', prices: { base: 200 }, image: '' },
  { id: 'oth-7', name: 'Ice Coffee', description: 'Chilled caffeine.', category: 'Others', prices: { base: 600 }, image: '' },
  { id: 'oth-8', name: 'Water Bottle Small', description: '500ml.', category: 'Others', prices: { base: 80 }, image: '' },
  { id: 'oth-9', name: 'Water Bottle Large', description: '1500ml.', category: 'Others', prices: { base: 120 }, image: '' },
  { id: 'oth-10', name: 'Wplate', description: 'Special side plate.', category: 'Others', prices: { base: 1600 }, image: '' },
  { id: 'oth-11', name: 'Cin Pres', description: 'Cinnamon preserve.', category: 'Others', prices: { base: 600 }, image: '' },

  // Kottu
  { id: 'kt-1', name: 'Vege Kottu', description: 'Classic vegetable kottu.', category: 'Kottu', prices: { base: 800 }, image: '' },
  { id: 'kt-2', name: 'Egg Kottu', description: 'Standard egg kottu.', category: 'Kottu', prices: { base: 900 }, image: '' },
  { id: 'kt-3', name: 'Chicken Kottu', description: 'Popular chicken kottu.', category: 'Kottu', prices: { base: 1000 }, image: '' },
  { id: 'kt-4', name: 'Sea Food Kottu', description: 'Fresh seafood mix.', category: 'Kottu', prices: { base: 1300 }, image: '' },
  { id: 'kt-5', name: 'Cashew Kottu', description: 'Crunchy cashew mix.', category: 'Kottu', prices: { base: 1300 }, image: '' },
  { id: 'kt-6', name: 'Mix Kottu', description: 'Meat and seafood mix.', category: 'Kottu', prices: { base: 1400 }, image: '' },
  { id: 'kt-7', name: 'Hogwarts Special Kottu', description: 'Our grandest kottu selection.', category: 'Kottu', prices: { base: 2200 }, image: '' },

  // Cheese Pasta
  { id: 'cp-1', name: 'Vege Cheese Pasta', description: 'Cheesy vegetable pasta.', category: 'Cheese Pasta', prices: { base: 1000 }, image: '' },
  { id: 'cp-2', name: 'Egg Cheese Pasta', description: 'Cheesy egg pasta.', category: 'Cheese Pasta', prices: { base: 1000 }, image: '' },
  { id: 'cp-3', name: 'Chicken Cheese Pasta', description: 'Cheesy chicken pasta.', category: 'Cheese Pasta', prices: { base: 1300 }, image: '' },
  { id: 'cp-4', name: 'Sea Food Cheese Pasta', description: 'Cheesy seafood pasta.', category: 'Cheese Pasta', prices: { base: 1500 }, image: '' },
  { id: 'cp-5', name: 'Mix Cheese Pasta', description: 'Total cheese mix pasta.', category: 'Cheese Pasta', prices: { base: 1600 }, image: '' },
  { id: 'cp-6', name: 'Hogwarts Special Cheese Pasta', description: 'Premium cheesy pasta feast.', category: 'Cheese Pasta', prices: { base: 2300 }, image: '' },

  // Pasta Kottu
  { id: 'pk-1', name: 'Vege Pasta Kottu', description: 'Pasta based vegetable kottu.', category: 'Pasta Kottu', prices: { base: 800 }, image: '' },
  { id: 'pk-2', name: 'Egg Pasta Kottu', description: 'Pasta based egg kottu.', category: 'Pasta Kottu', prices: { base: 900 }, image: '' },
  { id: 'pk-3', name: 'Chicken Pasta Kottu', description: 'Pasta based chicken kottu.', category: 'Pasta Kottu', prices: { base: 1000 }, image: '' },
  { id: 'pk-4', name: 'Sea Food Pasta Kottu', description: 'Pasta based seafood kottu.', category: 'Pasta Kottu', prices: { base: 1300 }, image: '' },
  { id: 'pk-5', name: 'Cashew Pasta Kottu', description: 'Pasta based cashew kottu.', category: 'Pasta Kottu', prices: { base: 1300 }, image: '' },
  { id: 'pk-6', name: 'Mix Pasta Kottu', description: 'Pasta based grand mix.', category: 'Pasta Kottu', prices: { base: 1400 }, image: '' },

  // Pasta
  { id: 'pas-1', name: 'Vege Pasta', description: 'Classic vegetable pasta.', category: 'Pasta', prices: { base: 900 }, image: '' },
  { id: 'pas-2', name: 'Egg Pasta', description: 'Wok-fired egg pasta.', category: 'Pasta', prices: { base: 1000 }, image: '' },
  { id: 'pas-3', name: 'Chicken Pasta', description: 'Savory chicken pasta.', category: 'Pasta', prices: { base: 1100 }, image: '' },
  { id: 'pas-4', name: 'Sea Food Pasta', description: 'Mixed seafood pasta.', category: 'Pasta', prices: { base: 1400 }, image: '' },
  { id: 'pas-5', name: 'Cashew Pasta', description: 'Crunchy cashew pasta.', category: 'Pasta', prices: { base: 1400 }, image: '' },
  { id: 'pas-6', name: 'Mix Pasta', description: 'Combination pasta.', category: 'Pasta', prices: { base: 1500 }, image: '' },

  // Milk
  { id: 'mlk-1', name: 'Special Milk', description: 'House special blend.', category: 'Milk', prices: { base: 900 }, image: '' },
  { id: 'mlk-2', name: 'Avocado Milk', description: 'Fresh avocado blend.', category: 'Milk', prices: { base: 1100 }, image: '' },
  { id: 'mlk-3', name: 'Mango Milk', description: 'Tropical mango blend.', category: 'Milk', prices: { base: 1200 }, image: '' },
];

export const CATEGORIES = [
  'Bites', 'French Fries', 'Fried Rice', 'Cheese Kottu', 'Hot Butter', 'Omelette', 'Deviled', 'Noodles', 'Nasi Goreng', 'Burgers', 'Submarine', 'Sandwich', 'Biriyani', 'Juices', 'Milkshake', 'Hot Drinks', 'Mojito', 'Bubble Shakes', 'Desserts', 'Others', 'Kottu', 'Cheese Pasta', 'Pasta Kottu', 'Pasta', 'Milk'
];
