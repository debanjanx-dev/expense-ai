"use client";

import { Brain } from "lucide-react";
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function Navbar() {
  return (
    <div className="bg-black text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-playfair">ExpenseAI</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Pricing
            </a>

            {/* Auth Section */}
            <SignedOut>
              <SignUpButton mode="modal">
                <ShimmerButton className="px-4 py-2 text-sm font-medium">
                  Get Started
                </ShimmerButton>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </nav>
        </div>
      </header>
    </div>
  );
}
