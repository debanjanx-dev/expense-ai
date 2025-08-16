"use client";

import { Brain } from "lucide-react";
import {
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="bg-black text-foreground">
      <header className="border-b border-border/40 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold font-playfair tracking-tight">
              ExpenseAI
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <a
              href="#features"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              Pricing
            </a>

            {/* Auth Section */}
            <SignedOut>
              <SignUpButton mode="modal">
                <ShimmerButton className="px-5 py-2 rounded-xl text-sm font-semibold shadow-md">
                  Get Started
                </ShimmerButton>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-4">
                {/* Welcome text */}
                <Link href="/dashboard">
                  <Button className="rounded-xl px-5 py-2 font-medium shadow-md hover:shadow-lg transition-all duration-200">
                    Dashboard
                  </Button>
                </Link>
                <span className="text-sm text-muted-foreground">
                  Hi,{" "}
                  <span className="font-semibold text-foreground">
                    {user?.firstName ??
                      user?.emailAddresses[0].emailAddress.split("@")[0]}
                  </span>
                </span>

                {/* Dashboard Button */}
                

                {/* User menu */}
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </nav>
        </div>
      </header>
    </div>
  );
}
