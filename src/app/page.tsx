
"use client";

import MenuDisplay from "@/components/menu/MenuDisplay";
import SortingHatTrigger from "@/components/ai/SortingHatTrigger";
import CartDrawer from "@/components/cart/CartDrawer";
import AuthGuard from "@/components/auth/AuthGuard";
import DeveloperManager from "@/components/admin/DeveloperManager";
import { useAuth } from "@/context/AuthContext";
import { Scroll, Wand, Coffee, Clock, MapPin, Phone, Mail, ExternalLink, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { user, logOut, isDeveloper } = useAuth();
  const contactDetails = {
    phone: "[Add Your Phone Number]",
    email: "hogwartscafe@gmail.com",
    address: "[Add Your Address]",
    googleMapsLink: "https://maps.google.com"
  };

  return (
    <AuthGuard>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Navigation / Header */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-white/10 bg-black/60">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <Wand className="text-primary-foreground h-7 w-7" />
              </div>
              <div>
                <h1 className="text-2xl font-headline tracking-tighter leading-none text-primary uppercase">Hogwarts Cafe</h1>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground">Premium Dining</span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
              <a href="#find-us" className="hover:text-primary transition-colors">Location</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              {isDeveloper && <DeveloperManager />}
              
              <div className="hidden sm:flex items-center gap-3 glass px-4 py-2 rounded-full border-primary/20">
                <UserCircle className="h-4 w-4 text-primary" />
                <div className="flex flex-col">
                  <span className="text-[9px] text-muted-foreground uppercase leading-none">Wizards Account</span>
                  <span className="text-[11px] font-bold text-primary truncate max-w-[100px]">{user?.displayName?.split(' ')[0]}</span>
                </div>
                <Button variant="ghost" size="icon" onClick={logOut} className="h-6 w-6 hover:text-destructive">
                  <LogOut className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-accent/30" />
              <div className="w-full h-full flex items-center justify-center opacity-10">
                 <Wand className="w-64 h-64 text-primary animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
            </div>

            <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
              <div className="inline-block glass rounded-full px-6 py-2 border-primary/20 mb-4 animate-bounce">
                <span className="text-primary font-headline italic">Step into Enchantment</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-headline text-primary drop-shadow-[0_0_40px_rgba(211,166,37,0.4)] uppercase">
                Hogwarts Cafe
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-headline max-w-2xl mx-auto leading-relaxed italic">
                Experience the magic of authentic flavors and premium surroundings fit for a feast. 
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <a href="#menu">
                  <button className="bg-primary text-primary-foreground font-headline px-10 py-5 rounded-full text-xl magical-glow hover:scale-105 transition-transform">
                    Explore Menu
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
                  <h3 className="font-headline text-xl">Potions & Brews</h3>
                  <p className="text-sm text-muted-foreground">Expertly crafted beverages.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 glass rounded-2xl hover:bg-white/10 transition-colors border-primary/10">
                <div className="bg-primary/10 p-4 rounded-full"><Clock className="text-primary h-8 w-8" /></div>
                <div>
                  <h3 className="font-headline text-xl">Open Daily</h3>
                  <p className="text-sm text-muted-foreground">Join us for the daily feast.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 glass rounded-2xl hover:bg-white/10 transition-colors border-primary/10">
                <div className="bg-primary/10 p-4 rounded-full"><MapPin className="text-primary h-8 w-8" /></div>
                <div>
                  <h3 className="font-headline text-xl">Premium Location</h3>
                  <p className="text-sm text-muted-foreground">Visit us in the heart of the city.</p>
                </div>
              </div>
            </div>
          </section>

          <MenuDisplay />

          {/* Contact and Map Section */}
          <section id="find-us" className="py-32 relative overflow-hidden bg-black/20">
             <div className="max-w-6xl mx-auto px-4">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <div className="inline-flex items-center gap-4 text-primary mb-2">
                      <Scroll className="h-8 w-8 floating" />
                      <h2 className="text-4xl font-headline">Find Our Entrance</h2>
                    </div>
                    <p className="text-muted-foreground text-lg italic leading-relaxed">
                      Step into a world of enchantment. Our doors are open to all who seek a truly magical dining experience.
                    </p>
                    
                    <div id="contact" className="space-y-6 pt-8 border-t border-white/10">
                      <h4 className="text-xl font-headline text-primary">Contact Details</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-muted-foreground font-bold">{contactDetails.phone}</span>
                        </div>
                        <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-muted-foreground font-bold">{contactDetails.email}</span>
                        </div>
                        <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex flex-col">
                             <span className="text-muted-foreground font-bold">{contactDetails.address}</span>
                             <a 
                               href={contactDetails.googleMapsLink}
                               target="_blank" 
                               className="text-primary text-xs flex items-center gap-1 hover:underline mt-1 font-bold"
                             >
                               Open in Google Maps <ExternalLink className="h-3 w-3" />
                             </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-square relative rounded-3xl overflow-hidden glass border-white/10 p-2 shadow-2xl group">
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors flex items-center justify-center">
                      <span className="text-primary/20 font-headline italic text-center px-10">Visit our Magical Space</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                      <div className="glass px-8 py-6 rounded-2xl text-center bg-black/60 backdrop-blur-xl border-primary/20">
                          <h4 className="font-headline text-2xl mb-1 text-primary">Hogwarts Cafe</h4>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Magical Hub</p>
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
            <div className="space-y-2">
              <p className="text-primary font-headline text-2xl tracking-widest uppercase">Hogwarts Cafe</p>
              <p className="text-muted-foreground text-[10px] uppercase tracking-[0.4em]">Official Dining Experience</p>
            </div>
          </div>
        </footer>

        <CartDrawer />
      </div>
    </AuthGuard>
  );
}
