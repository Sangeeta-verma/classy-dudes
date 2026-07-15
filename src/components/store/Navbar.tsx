"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/shared/Logo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Categories", href: "/categories" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
              <Menu className="size-5" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 pt-10">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="mt-4 w-full rounded-full" render={<a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" />}>
                  WhatsApp Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Logo 
          textClassName="text-base sm:text-xl tracking-widest" 
          iconClassName="h-6 w-10 sm:h-8 sm:w-12 mb-0.5" 
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="size-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="size-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="size-5" />
            <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              0
            </span>
            <span className="sr-only">Cart</span>
          </Button>
          <Button className="hidden rounded-full md:flex" render={<a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" />}>
            WhatsApp Us
          </Button>
        </div>
      </div>
    </header>
  );
}
