
"use client";

import { HouseThemeProvider } from "@/components/theme/HouseThemeContext";
import HouseSwitcher from "@/components/layout/HouseSwitcher";
import MenuDisplay from "@/components/menu/MenuDisplay";
import SortingHatTrigger from "@/components/ai/SortingHatTrigger";
import CartDrawer from "@/components/cart/CartDrawer";
import Image from "next/image";
import { Scroll, Wand, Coffee, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <HouseThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Navigation / Header */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-white/10 bg-black/20">
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
              <a href="#sorting-hat" className="hover:text-primary transition-colors">Sorting Hat</a>
              <a href="#find-us" className="hover:text-primary transition-colors">The Map</a>
            </nav>

            <HouseSwitcher />
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://picsum.photos/seed/hogwarts-castle/1920/1080" 
                alt="Magical Castle"
                fill
                className="object-cover opacity-40 scale-105 animate-pulse"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e1b15]/50 to-[#1e1b15]" />
            </div>

            <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
              <div className="inline-block glass rounded-full px-6 py-2 border-primary/20 mb-4 animate-bounce">
                <span className="text-primary font-headline italic">Newest Magical Brews Just Arrived!</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-headline text-primary drop-shadow-[0_0_30px_rgba(211,166,37,0.3)] animate-in fade-in zoom-in duration-1000">
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

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
              <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to reveal</span>
              <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
            </div>
          </section>

          {/* Core Features / Quick Info */}
          <section className="py-20 glass-dark border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex items-center gap-6 p-8 glass rounded-2xl hover:bg-white/10 transition-colors">
                <div className="bg-primary/20 p-4 rounded-full"><Coffee className="text-primary h-8 w-8" /></div>
                <div>
                  <h3 className="font-headline text-xl">Witchcraft Brews</h3>
                  <p className="text-sm text-muted-foreground">Hand-picked magical beans.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 glass rounded-2xl hover:bg-white/10 transition-colors">
                <div className="bg-primary/20 p-4 rounded-full"><Clock className="text-primary h-8 w-8" /></div>
                <div>
                  <h3 className="font-headline text-xl">Owl Delivery</h3>
                  <p className="text-sm text-muted-foreground">Fastest wings in the valley.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 glass rounded-2xl hover:bg-white/10 transition-colors">
                <div className="bg-primary/20 p-4 rounded-full"><MapPin className="text-primary h-8 w-8" /></div>
                <div>
                  <h3 className="font-headline text-xl">Secret Location</h3>
                  <p className="text-sm text-muted-foreground">Check the Marauder&apos;s map.</p>
                </div>
              </div>
            </div>
          </section>

          <MenuDisplay />

          <section id="find-us" className="py-32 relative overflow-hidden">
             <div className="max-w-5xl mx-auto px-4 text-center">
               <div className="mb-12">
                 <Scroll className="h-16 w-16 text-primary mx-auto mb-6 floating" />
                 <h2 className="text-4xl font-headline text-primary mb-4">Mischief Managed</h2>
                 <p className="text-muted-foreground max-w-xl mx-auto italic">
                   Can&apos;t find us? Tap the map three times and whisper the secret words. Or just follow the smell of butterbeer.
                 </p>
               </div>
               <div className="aspect-video relative rounded-3xl overflow-hidden glass border-white/10 p-2 shadow-2xl">
                 <div className="absolute inset-0 bg-[#1e1b15]/20 z-10 pointer-events-none" />
                 <Image 
                   src="https://picsum.photos/seed/vintage-map/1200/800" 
                   alt="Vintage Map" 
                   fill
                   className="object-cover sepia-[.5] brightness-50"
                 />
                 <div className="absolute inset-0 flex items-center justify-center z-20">
                   <div className="glass px-12 py-8 rounded-2xl text-center">
                      <h4 className="font-headline text-2xl mb-2">Hogwarts Cafe, Hogsmeade Village</h4>
                      <p className="text-sm text-muted-foreground">Opening hours: Until the castle curfew</p>
                   </div>
                 </div>
               </div>
             </div>
          </section>
        </main>

        <footer className="py-12 border-t border-white/5 glass-dark text-center">
          <div className="max-w-7xl mx-auto px-4 space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-1 bg-primary/30 rounded-full" />
              <Wand className="text-primary h-6 w-6" />
              <div className="w-12 h-1 bg-primary/30 rounded-full" />
            </div>
            <p className="text-muted-foreground text-sm uppercase tracking-[0.5em] font-bold">
              Marauder&apos;s Menu © 2024
            </p>
            <p className="text-[10px] text-muted-foreground/50 max-w-sm mx-auto">
              Legal notice: All spells and potions consumed on premises are at the risk of the user. No dragons were harmed in the making of this menu.
            </p>
          </div>
        </footer>

        <CartDrawer />
      </div>
    </HouseThemeProvider>
  );
}
