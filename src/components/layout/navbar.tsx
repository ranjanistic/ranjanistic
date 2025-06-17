
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { navLinksData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { heroData } from '@/lib/data';

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
    const isCurrentPageLink = pathname === href.split('#')[0]; // Check if it's for the current page
    const hash = href.split('#')[1];
    let isActive = false;
    if (typeof window !== 'undefined') {
      isActive = isCurrentPageLink && (hash ? window.location.hash === `#${hash}` : pathname === href);
    }


    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
          isBrand 
            ? "text-xl font-headline font-semibold text-foreground hover:text-primary" 
            : "text-muted-foreground hover:text-foreground focus:text-foreground",
          isActive && !isBrand ? "text-primary font-semibold" : "",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {label}
      </Link>
    );
  };
  
  const brandLabel = heroData.name.split(' ')[0]; // Use first name for brand
  const navLinks = navLinksData.filter(link => link.label !== heroData.name);


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLinkItem href="/#top" label={brandLabel} isBrand />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
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
                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between items-center mb-4">
                     <NavLinkItem href="/#top" label={brandLabel} isBrand onClick={() => setIsSheetOpen(false)} />
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" aria-label="Close menu">
                         <X className="h-6 w-6 text-foreground" />
                       </Button>
                    </SheetClose>
                  </div>
                  {navLinks.map((link) => (
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
