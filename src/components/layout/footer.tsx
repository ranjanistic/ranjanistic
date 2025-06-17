import Link from 'next/link';
import { socialLinksFooter, heroData } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-10 mt-16 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="text-lg font-headline font-semibold text-foreground">
            {heroData.name}
          </div>
          
          <div className="flex space-x-4">
            {socialLinksFooter.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${heroData.name} on ${link.name}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <link.icon className="h-6 w-6 group-hover:text-accent group-hover:scale-110 transition-all" />
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center text-sm">
          <p>
            &copy; {currentYear} {heroData.name}. All rights reserved.
          </p>
          <p className="mt-1">
            Crafted with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
