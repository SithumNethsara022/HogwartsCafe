
"use client";

import { useState } from "react";
import { MenuItem } from "@/app/lib/menu-data";
import { updateMenuItem } from "@/services/menu-service";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Save, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EditItemDialogProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function EditItemDialog({ item, onClose }: EditItemDialogProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: item?.name || "",
    description: item?.description || "",
    price: item?.prices.base || 0,
  });

  if (!item) return null;

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateMenuItem(item.id, {
        name: formData.name,
        description: formData.description,
        prices: { ...item.prices, base: Number(formData.price) }
      });
      toast({ title: "Enchantment Updated", description: `${formData.name} has been modified successfully.` });
      onClose();
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Spell Failed", description: "Failed to update item." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={!!item} onOpenChange={onClose}>
      <DialogContent className="glass-dark border-primary/20 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-primary">Modify Offering</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Item Name</Label>
            <Input 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="glass"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Price (LKR)</Label>
            <Input 
              type="number" 
              value={formData.price} 
              onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
              className="glass"
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea 
              value={formData.description} 
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="glass min-h-[100px]"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={loading} className="glass">Cancel</Button>
          <Button onClick={handleSave} disabled={loading} className="magical-glow bg-primary text-primary-foreground">
            {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : <Save className="mr-2 h-4 w-4" />}
            Apply Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
