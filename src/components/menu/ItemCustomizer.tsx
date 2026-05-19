
"use client";

import { useState } from "react";
import { MenuItem, TOPPING_PRICES } from "@/app/lib/menu-data";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const basePrice = portion === 'half' ? (item.prices.half || item.prices.base) : (item.prices.full || item.prices.base);
  const toppingsTotal = selectedToppings.reduce((sum, t) => sum + TOPPING_PRICES[t], 0);
  const totalPrice = basePrice + toppingsTotal;

  const handleToggleTopping = (topping: string) => {
    setSelectedToppings(prev => 
      prev.includes(topping) ? prev.filter(t => t !== topping) : [...prev, topping]
    );
  };

  const handleAdd = () => {
    onAdd({
      id: item.id,
      name: item.name,
      price: totalPrice,
      quantity,
      portion: item.prices.half ? portion : undefined,
      toppings: selectedToppings.length > 0 ? selectedToppings : undefined
    });
    onClose();
  };

  return (
    <div className="space-y-6 pt-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-headline text-primary">Customize your magical meal</h3>
        <div className="text-2xl font-bold">LKR {totalPrice}</div>
      </div>

      {item.prices.half && (
        <div className="space-y-3">
          <Label className="text-sm uppercase tracking-widest text-muted-foreground">Portion Size</Label>
          <RadioGroup 
            value={portion} 
            onValueChange={(v) => setPortion(v as 'half' | 'full')}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="half" id="half" />
              <Label htmlFor="half">Half Portion (LKR {item.prices.half})</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="full" id="full" />
              <Label htmlFor="full">Full Portion (LKR {item.prices.full})</Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {item.toppings && (
        <div className="space-y-3">
          <Label className="text-sm uppercase tracking-widest text-muted-foreground">Add Extras (Toppings)</Label>
          <div className="grid grid-cols-2 gap-3">
            {item.toppings.map((topping) => (
              <div key={topping} className="flex items-center space-x-3 p-3 glass rounded-md hover:bg-white/10 transition-colors">
                <Checkbox 
                  id={topping} 
                  checked={selectedToppings.includes(topping)}
                  onCheckedChange={() => handleToggleTopping(topping)}
                />
                <Label htmlFor={topping} className="flex-1 flex justify-between">
                  <span>{topping}</span>
                  <span className="text-xs opacity-70">+LKR {TOPPING_PRICES[topping]}</span>
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-4 bg-white/5 rounded-full px-4 py-2">
          <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-bold text-lg min-w-[1ch] text-center">{quantity}</span>
          <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button onClick={handleAdd} className="rounded-full px-8 magical-glow">
          <Wand2 className="mr-2 h-4 w-4" />
          Add to Cauldron
        </Button>
      </div>
    </div>
  );
}
