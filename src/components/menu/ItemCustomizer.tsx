"use client";

import { useState } from "react";
import { MenuItem } from "@/app/lib/menu-data";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Minus, Wand2 } from "lucide-react";
import { CartItem } from "@/hooks/use-cart";

interface ItemCustomizerProps {
  item: MenuItem;
  onAdd: (item: Omit<CartItem, 'cartId'>) => void;
  onClose: () => void;
}

export default function ItemCustomizer({ item, onAdd, onClose }: ItemCustomizerProps) {
  const [quantity, setQuantity] = useState(1);
  const [portion, setPortion] = useState<'half' | 'full' | undefined>(undefined);

  const basePrice = item.prices.base;
  const totalPrice = basePrice;

  const handleAdd = () => {
    onAdd({
      id: item.id,
      name: item.name,
      price: totalPrice,
      quantity,
    });
    onClose();
  };

  return (
    <div className="space-y-6 pt-2">
      <div className="flex items-start justify-between">
        <div className="text-muted-foreground text-sm italic pr-4">
          {item.description || "Authentic preparation from the Hogwarts kitchens."}
        </div>
        <div className="text-2xl font-bold text-primary whitespace-nowrap">Rs {(totalPrice * quantity).toLocaleString()}</div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <div className="flex items-center gap-4 bg-white/5 rounded-full px-4 py-2 border border-white/5">
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary h-8 w-8" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-bold text-xl min-w-[1.5ch] text-center">{quantity}</span>
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary h-8 w-8" onClick={() => setQuantity(quantity + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button onClick={handleAdd} className="rounded-full h-12 px-8 font-headline text-lg bg-primary text-primary-foreground hover:bg-primary/90 magical-glow transition-all">
          <Wand2 className="mr-2 h-5 w-5" />
          Add to Order
        </Button>
      </div>
    </div>
  );
}
