
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  User, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut 
} from "firebase/auth";
import { doc, getDoc, setDoc, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "@/firebase/config";

interface AuthContextType {
  user: User | null;
  isDeveloper: boolean;
  loading: boolean;
  signIn: () => Promise<void>;
  logOut: () => Promise<void>;
  developers: string[];
  addDeveloper: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const PRIMARY_ADMIN = "sithumnethsara022@gmail.com";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isDeveloper, setIsDeveloper] = useState(false);
  const [loading, setLoading] = useState(true);
  const [developers, setDevelopers] = useState<string[]>([PRIMARY_ADMIN]);

  useEffect(() => {
    // Sync developer list from Firestore
    const devDocRef = doc(db, "settings", "developers");
    const unsubscribeDevs = onSnapshot(devDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const list = docSnap.data().emails || [];
        if (!list.includes(PRIMARY_ADMIN)) list.push(PRIMARY_ADMIN);
        setDevelopers(list);
      } else {
        setDoc(devDocRef, { emails: [PRIMARY_ADMIN] });
      }
    });

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Check if current user is a developer
        const isDev = developers.includes(user.email || "") || user.email === PRIMARY_ADMIN;
        setIsDeveloper(isDev);
      } else {
        setIsDeveloper(false);
      }
      setLoading(false);
    });

    return () => {
      unsubscribeDevs();
      unsubscribeAuth();
    };
  }, [developers]);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const addDeveloper = async (email: string) => {
    if (user?.email !== PRIMARY_ADMIN) return;
    const devDocRef = doc(db, "settings", "developers");
    const newList = Array.from(new Set([...developers, email.toLowerCase()]));
    await setDoc(devDocRef, { emails: newList });
  };

  return (
    <AuthContext.Provider value={{ user, isDeveloper, loading, signIn, logOut, developers, addDeveloper }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
