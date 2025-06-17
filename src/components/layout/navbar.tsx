
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { navLinksData } from '@/lib/data'; // Updated import
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItem: React.FC<{ href: string; label: string; onClick?: () => void; isBrand?: boolean }> = ({ href, label, onClick, isBrand = false }) => {
    // For single-page navigation, active state based on hash is tricky and often not needed with scroll spy.
    // Simple hover effects are generally sufficient.
    // const isActive = pathname + (typeof window !== 'undefined' ? window.location.hash : '') === href;

    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isBrand ? "text-lg font-headline font-semibold text-foreground hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          // isActive && !isBrand ? "text-foreground font-semibold" : "", // Simplified active state
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
        )}
        // aria-current={isActive ? 'page' : undefined}
      >
        {label}
      </Link>
    );
  };

  const brandLink = navLinksData.find(link => link.href === '/#top') || { href: '/#top', label: 'Priyanshu Ranjan' };
  const otherNavLinks = navLinksData.filter(link => link.href !== '/#top');


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Matched max-width of page.tsx */}
        <div className="flex h-16 items-center justify-between">
          <NavLinkItem href={brandLink.href} label={brandLink.label} isBrand />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {otherNavLinks.map((link) => (
              <NavLinkItem key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <div className="flex flex-col space-y-2"> {/* Reduced space-y */}
                  <div className="flex justify-between items-center mb-4">
                     <NavLinkItem href={brandLink.href} label={brandLink.label} isBrand onClick={() => setIsSheetOpen(false)} />
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" aria-label="Close menu">
                         <X className="h-6 w-6 text-foreground" />
                       </Button>
                    </SheetClose>
                  </div>
                  {otherNavLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                       <NavLinkItem href={link.href} label={link.label} onClick={() => setIsSheetOpen(false)} />
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
