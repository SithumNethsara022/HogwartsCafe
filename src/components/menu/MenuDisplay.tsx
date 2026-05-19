"use client";

import { useState } from "react";
import { MENU_DATA, CATEGORIES, MenuItem } from "@/app/lib/menu-data";
import { useCart } from "@/hooks/use-cart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ItemCustomizer from "./ItemCustomizer";
import Image from "next/image";
import { Plus, Image as ImageIcon } from "lucide-react";

export default function MenuDisplay() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const { addToCart } = useCart();

  const filteredItems = MENU_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-headline text-primary mb-4 drop-shadow-lg">Marauder&apos;s Menu</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6" />
        <p className="text-muted-foreground italic font-headline text-xl">
          I solemnly swear that I am up to no good...
        </p>
      </div>

      <Tabs defaultValue={CATEGORIES[0]} onValueChange={setActiveCategory} className="space-y-12">
        <TabsList className="bg-white/5 border border-white/10 p-1 h-auto rounded-full max-w-lg mx-auto grid grid-cols-3">
          {CATEGORIES.map((cat) => (
            <TabsTrigger 
              key={cat} 
              value={cat}
              className="rounded-full py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-headline text-lg"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeCategory} className="animate-in fade-in duration-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} onAdd={addToCart} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function MenuItemCard({ item, onAdd }: { item: MenuItem; onAdd: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="group relative cursor-pointer magical-hover">
          <Card className="glass overflow-hidden border-white/5 hover:border-primary/50 transition-colors h-full flex flex-col">
            <div className="relative h-56 w-full bg-secondary/20 flex items-center justify-center">
              {item.image ? (
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
                  <ImageIcon className="w-12 h-12 text-primary" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Add Photo</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 bg-black/40 backdrop-blur-md px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-headline group-hover:text-primary transition-colors">{item.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground flex-1 mb-6 italic leading-relaxed">
                {item.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="text-lg font-headline font-bold text-primary">
                  {item.prices.half ? `From LKR ${item.prices.half}` : `LKR ${item.prices.base}`}
                </div>
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg magical-glow group-hover:rotate-90 transition-transform">
                  <Plus className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="glass-dark border-primary/20 max-w-xl text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-primary">
            Customize {item.name}
          </DialogTitle>
        </DialogHeader>
        <ItemCustomizer item={item} onAdd={onAdd} onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
