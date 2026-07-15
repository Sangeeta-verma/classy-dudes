import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="flex flex-col gap-6">
            <Logo 
              className="items-start" 
              textClassName="text-xl tracking-widest sm:text-2xl" 
              iconClassName="h-8 w-12 sm:h-10 sm:w-14" 
            />
            <p className="text-sm leading-relaxed text-muted dark:text-muted-foreground">
              A premium digital showroom offering the finest men's fashion. 
              Elevate your wardrobe with our luxury black, white, and gold aesthetic.
            </p>
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link href="#" className="hover:text-primary transition-colors">
                INSTAGRAM
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                FACEBOOK
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                YOUTUBE
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-lg font-semibold tracking-wider text-primary">
              QUICK LINKS
            </h3>
            <nav className="flex flex-col gap-4">
              <Link href="/new-arrivals" className="text-sm hover:text-primary transition-colors">
                New Arrivals
              </Link>
              <Link href="/categories" className="text-sm hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="/complete-look" className="text-sm hover:text-primary transition-colors">
                Complete the Look
              </Link>
              <Link href="/reviews" className="text-sm hover:text-primary transition-colors">
                Reviews
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-lg font-semibold tracking-wider text-primary">
              VISIT US
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed">
                  123 Fashion Avenue, <br />
                  Luxury District, <br />
                  City, State 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-primary" />
                <p className="text-sm">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Connect / CTA */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-lg font-semibold tracking-wider text-primary">
              CONNECT
            </h3>
            <p className="text-sm text-muted dark:text-muted-foreground">
              Questions? Our styling experts are ready to assist you.
            </p>
            <Button size="lg" className="w-fit rounded-full bg-primary text-primary-foreground hover:bg-primary/90" render={<a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" />}>
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-muted/20 pt-8 sm:flex-row text-sm text-muted dark:text-muted-foreground">
          <p>© {new Date().getFullYear()} Classy Dudes. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
