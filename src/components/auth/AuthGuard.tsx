
"use client";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, Wand2, ShieldCheck } from "lucide-react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading, signIn } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center space-y-4">
        <Wand2 className="h-12 w-12 text-primary animate-pulse" />
        <p className="font-headline text-primary tracking-widest uppercase">Revealing the magic...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent" />
        </div>
        
        <div className="relative z-10 glass-dark p-12 rounded-3xl border-primary/20 max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-4xl font-headline text-primary">Entrance Forbidden</h2>
            <p className="text-muted-foreground italic">Identification is required to enter the Hogwarts Cafe experience.</p>
          </div>

          <Button 
            onClick={signIn}
            className="w-full h-14 text-lg font-headline bg-primary text-primary-foreground magical-glow rounded-full"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Reveal Identity (Google Login)
          </Button>
          
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            Ministry of Magic strictly monitors all entries.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
