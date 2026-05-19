
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Simplified to a single Hogwarts theme as requested
interface HouseThemeContextType {
  theme: string;
}

const HouseThemeContext = createContext<HouseThemeContextType | undefined>(undefined);

export function HouseThemeProvider({ children }: { children: React.ReactNode }) {
  // Use a constant magical theme
  return (
    <HouseThemeContext.Provider value={{ theme: "hogwarts" }}>
      <div className="theme-hogwarts transition-colors duration-700">
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
