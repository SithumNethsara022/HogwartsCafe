
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type House = "gryffindor" | "slytherin" | "ravenclaw" | "hufflepuff";

interface HouseThemeContextType {
  house: House;
  setHouse: (house: House) => void;
}

const HouseThemeContext = createContext<HouseThemeContextType | undefined>(undefined);

export function HouseThemeProvider({ children }: { children: React.ReactNode }) {
  const [house, setHouse] = useState<House>("gryffindor");

  useEffect(() => {
    const saved = localStorage.getItem("marauders-house") as House;
    if (saved) setHouse(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("marauders-house", house);
    document.documentElement.className = `theme-${house}`;
  }, [house]);

  return (
    <HouseThemeContext.Provider value={{ house, setHouse }}>
      <div className={`theme-${house} transition-colors duration-700`}>
        {children}
      </div>
    </HouseThemeContext.Provider>
  );
}

export function useHouseTheme() {
  const context = useContext(HouseThemeContext);
  if (!context) throw new Error("useHouseTheme must be used within HouseThemeProvider");
  return context;
}
