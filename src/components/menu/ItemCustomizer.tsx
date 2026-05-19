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
  const [portion, setPortion] = useState<'half' | 'full'>(item.prices.half ? 'half' : 'full');

  const basePrice = portion === 'half' ? (item.prices.half || item.prices.base) : (item.prices.full || item.prices.base);
  const totalPrice = basePrice;

  const handleAdd = () => {
    onAdd({
      id: item.id,
      name: item.name,
      price: totalPrice,
      quantity,
      portion: item.prices.half ? portion : undefined,
    });
    onClose();
  };

  return (
    <div className="space-y-6 pt-2">
      <div className="flex items-center justify-between">
        <div className="text-muted-foreground text-sm italic pr-4">{item.description}</div>
        <div className="text-2xl font-bold text-primary whitespace-nowrap">Rs {totalPrice * quantity}</div>
      </div>

      {item.prices.half && (
        <div className="space-y-3 p-4 glass rounded-xl border-primary/10">
          <Label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Portion Size</Label>
          <RadioGroup 
            value={portion} 
            onValueChange={(v) => setPortion(v as 'half' | 'full')}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="half" id="half" className="border-primary text-primary" />
                <Label htmlFor="half" className="cursor-pointer">Half Portion</Label>
              </div>
              <span className="text-primary font-bold">Rs {item.prices.half}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="full" id="full" className="border-primary text-primary" />
                <Label htmlFor="full" className="cursor-pointer">Full Portion</Label>
              </div>
              <span className="text-primary font-bold">Rs {item.prices.full}</span>
            </div>
          </RadioGroup>
        </div>
      )}

      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <div className="flex items-center gap-4 bg-white/5 rounded-full px-4 py-2 border border-white/5">
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-bold text-xl min-w-[1.5ch] text-center">{quantity}</span>
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary" onClick={() => setQuantity(quantity + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button onClick={handleAdd} className="rounded-full h-12 px-8 font-headline text-lg bg-primary text-primary-foreground hover:bg-primary/90 magical-glow transition-all">
          <Wand2 className="mr-2 h-5 w-5" />
          Add to Cauldron
        </Button>
      </div>
    </div>
  );
}
