
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { navLinksData, heroData } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
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
    const currentPathname = usePathname();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const determineActivity = () => {
        // Ensure href is a string and process
        const safeHref = typeof href === 'string' ? href : "";
        const hrefParts = safeHref.split('#');
        const linkBasePath = hrefParts[0] || "/"; // Default to root if no base path
        const linkHash = hrefParts[1];

        const isCurrentPageBasePath = currentPathname === linkBasePath;
        const currentWindowHash = typeof window !== 'undefined' ? window.location.hash : "";
        let newIsActiveState = false;

        if (safeHref === "/#top") {
          if (currentPathname === "/") {
            newIsActiveState = (currentWindowHash === "" || currentWindowHash === "#top");
          }
        } else if (isCurrentPageBasePath) {
          if (linkHash) {
            newIsActiveState = (currentWindowHash === `#${linkHash}`);
          } else {
            // For links without a hash, active if current hash is empty
            // (This might not be common for SPA-like hash navigation)
            newIsActiveState = (currentWindowHash === "");
          }
        }
        setIsActive(newIsActiveState);
      };

      determineActivity(); // Determine active state on mount and when dependencies change

      window.addEventListener('hashchange', determineActivity);
      return () => {
        window.removeEventListener('hashchange', determineActivity);
      };
    }, [currentPathname, href]); // Dependencies for useEffect

    return (
      <Link
        href={typeof href === 'string' ? href : "/"} // Fallback href if not string
        onClick={onClick}
        className={cn(
          "px-3 py-2 rounded-md text-sm transition-colors duration-300",
          isBrand 
            ? "text-xl font-headline font-bold text-foreground hover:text-primary"
            : "font-sans text-muted-foreground hover:text-foreground focus:text-foreground",
          isActive && !isBrand ? "text-primary font-semibold" : "",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        )}
        aria-current={isActive && !isBrand ? 'page' : undefined}
      >
        {label}
      </Link>
    );
  };
  
  const brandName = (heroData.name && typeof heroData.name === 'string') ? heroData.name.split(' ')[0] : 'Priyanshu';
  const brandLabel = brandName + '.'; 
  
  // Filter out the /#top link for the main nav items as it's handled by brandLabel
  const mainNavLinks = navLinksData.filter(link => typeof link.href === 'string' && link.href !== '/#top');
  // For the sheet, we might want all links including the top one if it's differently styled or just for completeness.
  // The current filter in data.ts already makes the first label dynamic for brand.
  // Here, we ensure `navLinksData` itself is used for the sheet, and filter for main nav.

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border/30" : "bg-transparent"
    )}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLinkItem href="/#top" label={brandLabel} isBrand />

          <nav className="hidden md:flex items-center space-x-1">
            {mainNavLinks.map((link) => (
              <NavLinkItem key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6 border-l border-border/50">
                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between items-center mb-4">
                     <NavLinkItem href="/#top" label={brandLabel} isBrand onClick={() => setIsSheetOpen(false)} />
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" aria-label="Close menu">
                         <X className="h-6 w-6 text-foreground" />
                       </Button>
                    </SheetClose>
                  </div>
                  {navLinksData.map((link) => ( // Use full navLinksData for mobile sheet
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
