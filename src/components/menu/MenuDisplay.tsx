
"use client";

import { useState, useRef, useEffect } from "react";
import { CATEGORIES, MenuItem } from "@/app/lib/menu-data";
import { useCart } from "@/hooks/use-cart";
import { useAuth } from "@/context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ItemCustomizer from "./ItemCustomizer";
import EditItemDialog from "@/components/admin/EditItemDialog";
import Image from "next/image";
import { Plus, Image as ImageIcon, ChevronLeft, ChevronRight, Edit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { subscribeToMenu, initializeMenu } from "@/services/menu-service";

export default function MenuDisplay() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const { addToCart } = useCart();
  const { isDeveloper } = useAuth();
  const tabsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeMenu(); // Seed if empty
    const unsubscribe = subscribeToMenu(setMenuItems);
    return () => unsubscribe();
  }, []);

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (tabsListRef.current) {
      const scrollAmount = 300;
      tabsListRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="menu" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-headline text-primary mb-4 drop-shadow-lg uppercase tracking-tight">The Great Hall Menu</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6" />
        <p className="text-muted-foreground italic font-headline text-xl">
          Authentic magical flavors and premium culinary preparations...
        </p>
      </div>

      <Tabs defaultValue={CATEGORIES[0]} onValueChange={setActiveCategory} className="space-y-12">
        <div className="relative max-w-5xl mx-auto group">
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block z-10"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          
          <div className="overflow-x-auto no-scrollbar scroll-smooth" ref={tabsListRef}>
            <TabsList className="bg-white/5 border border-white/10 p-1 h-auto rounded-full flex w-max min-w-full">
              {CATEGORIES.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-full py-3 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-headline text-base whitespace-nowrap transition-all"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block z-10"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>

        <TabsContent value={activeCategory} className="animate-in fade-in duration-700 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuItemCard 
                key={item.id} 
                item={item} 
                onAdd={addToCart} 
                onEdit={() => setEditingItem(item)}
                isDev={isDeveloper}
              />
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-muted-foreground italic">
              Searching for this collection in the forbidden section...
            </div>
          )}
        </TabsContent>
      </Tabs>

      {editingItem && (
        <EditItemDialog 
          item={editingItem} 
          onClose={() => setEditingItem(null)} 
        />
      )}
    </section>
  );
}

function MenuItemCard({ item, onAdd, onEdit, isDev }: { item: MenuItem; onAdd: any; onEdit: () => void; isDev: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative magical-hover">
      {isDev && (
        <button 
          onClick={(e) => { e.stopPropagation(); onEdit(); }}
          className="absolute top-4 right-4 z-20 h-10 w-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-primary border border-primary/20 hover:scale-110 transition-transform shadow-xl"
        >
          <Edit2 className="h-4 w-4" />
        </button>
      )}
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="cursor-pointer h-full">
            <Card className="glass overflow-hidden border-white/5 hover:border-primary/50 transition-colors h-full flex flex-col">
              <div className="relative h-48 w-full bg-secondary/10 flex items-center justify-center">
                {item.image ? (
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 opacity-5 group-hover:opacity-20 transition-opacity">
                    <ImageIcon className="w-12 h-12 text-primary" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Photo Coming Soon</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/60 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-headline group-hover:text-primary transition-colors leading-tight">{item.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground flex-1 mb-4 italic leading-relaxed line-clamp-2">
                  {item.description || "Freshly prepared with the finest ingredients."}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="text-lg font-headline font-bold text-primary">
                    Rs {item.prices.base.toLocaleString()}
                  </div>
                  <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg magical-glow group-hover:rotate-90 transition-transform">
                    <Plus className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </DialogTrigger>
        <DialogContent className="glass-dark border-primary/20 max-w-xl text-foreground">
          <DialogHeader>
            <DialogTitle className="text-2xl font-headline text-primary">
              {item.name}
            </DialogTitle>
          </DialogHeader>
          <ItemCustomizer item={item} onAdd={onAdd} onClose={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
