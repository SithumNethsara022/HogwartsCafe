
"use client";

import { useHouseTheme } from "@/components/theme/HouseThemeContext";
import { Button } from "@/components/ui/button";
import { Shield, ShieldAlert, ShieldCheck, ShieldOff } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function HouseSwitcher() {
  const { house, setHouse } = useHouseTheme();

  const houses = [
    { id: "gryffindor", color: "bg-[#740001]", label: "Gryffindor" },
    { id: "slytherin", color: "bg-[#1A472A]", label: "Slytherin" },
    { id: "ravenclaw", color: "bg-[#0E1A40]", label: "Ravenclaw" },
    { id: "hufflepuff", color: "bg-[#ECB939]", label: "Hufflepuff" },
  ] as const;

  return (
    <div className="flex gap-2 glass px-4 py-2 rounded-full border-white/5">
      <TooltipProvider>
        {houses.map((h) => (
          <Tooltip key={h.id}>
            <TooltipTrigger asChild>
              <button
                onClick={() => setHouse(h.id)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  house === h.id ? "border-white scale-110 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                } ${h.color}`}
              />
            </TooltipTrigger>
            <TooltipContent className="glass border-white/10">
              <p className="font-headline">{h.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
