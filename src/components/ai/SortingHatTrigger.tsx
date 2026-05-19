"use client";

import { useState } from "react";
import { sortingHatMenuSuggestion } from "@/ai/flows/sorting-hat-menu-suggestion-flow";
import { MENU_DATA } from "@/app/lib/menu-data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Loader2, Wand2 } from "lucide-react";

export default function SortingHatTrigger() {
  const [mood, setMood] = useState("");
  const [cravings, setCravings] = useState("");
  const [house, setHouse] = useState<string>("Gryffindor");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleGetSuggestions = async () => {
    setLoading(true);
    try {
      const result = await sortingHatMenuSuggestion({
        mood,
        cravings,
        housePreference: house,
        fullMenuJson: JSON.stringify(MENU_DATA),
      });
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="glass rounded-full px-6 py-6 group">
          <Sparkles className="mr-2 h-5 w-5 text-primary group-hover:animate-spin" />
          Consult the Sorting Hat
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-dark border-primary/20 max-w-2xl text-foreground">
        <DialogHeader>
          <DialogTitle className="text-3xl font-headline text-center text-primary flex items-center justify-center gap-3">
            <Wand2 className="h-8 w-8" />
            Sorting Hat Menu Tool
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground">Your Mood</Label>
              <Input 
                placeholder="Adventurous..." 
                className="glass"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Any Cravings?</Label>
              <Input 
                placeholder="Spicy, sweet..." 
                className="glass"
                value={cravings}
                onChange={(e) => setCravings(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Your House</Label>
              <Select value={house} onValueChange={setHouse}>
                <SelectTrigger className="glass">
                  <SelectValue placeholder="Select House" />
                </SelectTrigger>
                <SelectContent className="glass-dark border-white/10">
                  <SelectItem value="Gryffindor">Gryffindor</SelectItem>
                  <SelectItem value="Slytherin">Slytherin</SelectItem>
                  <SelectItem value="Ravenclaw">Ravenclaw</SelectItem>
                  <SelectItem value="Hufflepuff">Hufflepuff</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={handleGetSuggestions} 
            disabled={loading}
            className="w-full h-12 text-lg font-headline magical-glow"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 h-5 w-5" />}
            {loading ? "Sorting through destiny..." : "Sort my Meal!"}
          </Button>

          <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
            {suggestions.map((item, idx) => (
              <div key={idx} className="glass p-4 rounded-lg border-l-4 border-primary animate-in fade-in slide-in-from-bottom-2 duration-500">
                <h4 className="font-headline text-xl text-primary">{item.name}</h4>
                <p className="text-sm opacity-80 mb-2 italic">{item.description}</p>
                <div className="bg-white/5 p-3 rounded text-sm italic border border-white/10">
                  <span className="text-primary font-bold">Sorting Hat says: </span>
                  &ldquo;{item.reason}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
