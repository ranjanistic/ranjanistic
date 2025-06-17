// @ts-nocheck
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, CodeXml, LayoutDashboard, Users, Briefcase, Code as CodeIcon, TerminalSquare, PenTool, Mic2, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Users,
  Briefcase,
  Code: CodeIcon, // Renamed to avoid conflict with CodeXml
  TerminalSquare,
  PenTool,
  Mic2,
};

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

  const NavLinkItem: React.FC<{ href: string; label: string; iconName: string; onClick?: () => void }> = ({ href, label, iconName, onClick }) => {
    const IconComponent = iconMap[iconName];
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
          pathname === href
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover:bg-accent hover:text-accent-foreground",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
        aria-current={pathname === href ? 'page' : undefined}
      >
        {IconComponent && <IconComponent className="h-4 w-4" />}
        <span>{label}</span>
      </Link>
    );
  };


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-headline font-semibold text-foreground hover:text-primary transition-colors">
            <CodeXml className="h-7 w-7 text-primary" />
            Priyanshu Ranjan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} href={link.href} label={link.label} iconName={link.iconName} />
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
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <Link href="/" className="flex items-center gap-2 text-lg font-headline font-semibold text-foreground" onClick={() => setIsSheetOpen(false)}>
                      <CodeXml className="h-6 w-6 text-primary" />
                       Priyanshu Ranjan
                    </Link>
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" aria-label="Close menu">
                         <X className="h-6 w-6 text-foreground" />
                       </Button>
                    </SheetClose>
                  </div>
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                       <NavLinkItem href={link.href} label={link.label} iconName={link.iconName} onClick={() => setIsSheetOpen(false)} />
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
