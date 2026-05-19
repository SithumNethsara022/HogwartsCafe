
"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldPlus, UserPlus, X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";

export default function DeveloperManager() {
  const { user, developers, addDeveloper } = useAuth();
  const [newEmail, setNewEmail] = useState("");
  const isPrimary = user?.email === "sithumnethsara022@gmail.com";

  if (!isPrimary) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="glass border-primary/20 text-primary hover:bg-primary/10">
          <ShieldPlus className="mr-2 h-4 w-4" />
          Manage Council
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-dark border-primary/20 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-primary">Council of Developers</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label className="text-[10px] uppercase tracking-widest opacity-60">Induct New Developer</Label>
            <div className="flex gap-2">
              <Input 
                placeholder="email@example.com" 
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="glass"
              />
              <Button onClick={() => {
                if (newEmail) {
                  addDeveloper(newEmail);
                  setNewEmail("");
                }
              }}>
                <UserPlus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] uppercase tracking-widest opacity-60">Existing Council Members</Label>
            <div className="space-y-2">
              {developers.map(email => (
                <div key={email} className="glass p-3 rounded-lg flex items-center justify-between border-white/5">
                  <span className="text-sm">{email}</span>
                  {email === "sithumnethsara022@gmail.com" && (
                    <span className="text-[8px] bg-primary/20 text-primary px-2 py-0.5 rounded-full border border-primary/20 uppercase font-bold">Primary</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
