
"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingBasket, Trash2, Plus, Minus, Receipt } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed bottom-8 right-8 h-16 w-16 rounded-full magical-glow shadow-2xl z-50 p-0 group overflow-hidden">
          <div className="relative">
            <ShoppingBasket className="h-8 w-8 group-hover:scale-110 transition-transform" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-primary text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center animate-bounce">
                {items.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="glass-dark border-white/10 text-foreground w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 pb-2">
          <SheetTitle className="text-3xl font-headline text-primary flex items-center gap-3">
            Your Cauldron
          </SheetTitle>
          <p className="text-muted-foreground text-sm italic">Ingredients for a magical feast...</p>
        </SheetHeader>
        
        <Separator className="bg-white/10" />

        <ScrollArea className="flex-1 px-6 py-4">
          {items.length === 0 ? (
            <div className="h-[50vh] flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50">
              <ShoppingBasket className="h-20 w-20" />
              <p className="text-lg italic font-headline">Your cauldron is empty...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.cartId} className="flex gap-4 group animate-in fade-in slide-in-from-right-4">
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFromCart(item.cartId)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {item.portion && (
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.portion} Portion</p>
                    )}
                    
                    {item.toppings && (
                      <div className="flex flex-wrap gap-1 py-1">
                        {item.toppings.map(t => (
                          <span key={t} className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-3 bg-white/5 rounded-full px-3 py-1 scale-90 -ml-2">
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.cartId, -1)}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-bold">{item.quantity}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.cartId, 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <span className="font-headline font-bold">LKR {item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <Separator className="bg-white/10" />

        <SheetFooter className="p-6 bg-black/40">
          <div className="w-full space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-muted-foreground uppercase tracking-tighter">Galleons Total</span>
              <span className="text-3xl font-headline font-bold text-primary">LKR {total.toLocaleString()}</span>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1 glass border-white/20"
                onClick={clearCart}
                disabled={items.length === 0}
              >
                Clear
              </Button>
              <Button 
                className="flex-[2] magical-glow h-12 text-lg font-headline"
                disabled={items.length === 0}
              >
                <Receipt className="mr-2 h-5 w-5" />
                Order Now
              </Button>
            </div>
            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
              By clicking order, you agree to the ministry of magic terms.
            </p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
