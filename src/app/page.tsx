"use client";

import MenuDisplay from "@/components/menu/MenuDisplay";
import SortingHatTrigger from "@/components/ai/SortingHatTrigger";
import CartDrawer from "@/components/cart/CartDrawer";
import Image from "next/image";
import { Scroll, Wand, Coffee, Clock, MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navigation / Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Wand className="text-primary-foreground h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-headline tracking-tighter leading-none text-primary">Marauder&apos;s</h1>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground">Menu & Spirits</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <a href="#menu" className="hover:text-primary transition-colors">The Menu</a>
            <a href="#find-us" className="hover:text-primary transition-colors">The Map</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="hidden sm:flex items-center gap-2 glass px-4 py-2 rounded-full text-[10px] font-bold tracking-widest text-primary/80 uppercase border-primary/20">
            Official Hogwarts Dining
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-secondary/20 to-accent/20">
            {/* User to add image here */}
            <div className="w-full h-full flex items-center justify-center opacity-10">
               <Wand className="w-64 h-64 text-primary animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          </div>

          <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
            <div className="inline-block glass rounded-full px-6 py-2 border-primary/20 mb-4 animate-bounce">
              <span className="text-primary font-headline italic">The Feast Has Begun!</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-headline text-primary drop-shadow-[0_0_30px_rgba(211,166,37,0.3)]">
              Hogwarts Cafe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-headline max-w-2xl mx-auto leading-relaxed italic">
              Experience the magic in every bite. From the Great Hall to your table, we serve enchantments disguised as flavors.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a href="#menu">
                <button className="bg-primary text-primary-foreground font-headline px-10 py-5 rounded-full text-xl magical-glow hover:scale-105 transition-transform">
                  View the Menu
                </button>
              </a>
              <SortingHatTrigger />
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 glass-dark border-y border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-center gap-6 p-8 glass rounded-2xl hover:bg-white/10 transition-colors border-primary/10">
              <div className="bg-primary/10 p-4 rounded-full"><Coffee className="text-primary h-8 w-8" /></div>
              <div>
                <h3 className="font-headline text-xl">Witchcraft Brews</h3>
                <p className="text-sm text-muted-foreground">Hand-picked magical beans.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-8 glass rounded-2xl hover:bg-white/10 transition-colors border-primary/10">
              <div className="bg-primary/10 p-4 rounded-full"><Clock className="text-primary h-8 w-8" /></div>
              <div>
                <h3 className="font-headline text-xl">Owl Delivery</h3>
                <p className="text-sm text-muted-foreground">Fastest wings in the valley.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-8 glass rounded-2xl hover:bg-white/10 transition-colors border-primary/10">
              <div className="bg-primary/10 p-4 rounded-full"><MapPin className="text-primary h-8 w-8" /></div>
              <div>
                <h3 className="font-headline text-xl">Secret Location</h3>
                <p className="text-sm text-muted-foreground">Check the Marauder&apos;s map.</p>
              </div>
            </div>
          </div>
        </section>

        <MenuDisplay />

        {/* Contact and Map Section */}
        <section id="find-us" className="py-32 relative overflow-hidden">
           <div className="max-w-6xl mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-4 text-primary mb-2">
                    <Scroll className="h-8 w-8 floating" />
                    <h2 className="text-4xl font-headline">Mischief Managed</h2>
                  </div>
                  <p className="text-muted-foreground text-lg italic leading-relaxed">
                    Can&apos;t find us? Tap the map three times and whisper the secret words. Or just follow the smell of butterbeer.
                  </p>
                  
                  <div id="contact" className="space-y-6 pt-8 border-t border-white/10">
                    <h4 className="text-xl font-headline text-primary">Contact the High Table</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-muted-foreground font-bold">[Add Contact Number Here]</span>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-muted-foreground font-bold">sithumnethsara022@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-muted-foreground font-bold">[Add Full Address Here]</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="aspect-square relative rounded-3xl overflow-hidden glass border-white/10 p-2 shadow-2xl group">
                  {/* Placeholder for user Map image */}
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/30 transition-colors flex items-center justify-center">
                    <span className="text-primary/40 font-headline italic">Add Your Map Photo Here</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="glass px-8 py-6 rounded-2xl text-center bg-black/60 backdrop-blur-xl border-primary/20">
                        <h4 className="font-headline text-2xl mb-1 text-primary">Hogwarts Cafe</h4>
                        <p className="text-xs text-muted-foreground">Hogsmeade Village</p>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </section>
      </main>

      <footer className="py-16 border-t border-white/5 glass-dark text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <Wand className="text-primary h-8 w-8" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <div className="space-y-4">
            <p className="text-primary font-headline text-2xl tracking-widest">MARAUDER&apos;S CAFE</p>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.6em] font-bold">
              &copy; 2024 - Managed by Sithum Nethsara
            </p>
          </div>
          <p className="text-[10px] text-muted-foreground/40 max-w-sm mx-auto uppercase tracking-tighter">
            Legal notice: All spells and potions consumed on premises are at the risk of the user. No dragons were harmed in the making of this menu.
          </p>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
}
