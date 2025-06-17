import Link from 'next/link';
import { socialLinksFooter, heroData } from '@/lib/data'; // Updated to socialLinksFooter

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 text-muted-foreground py-8 mt-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* Matched max-width */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-sm font-headline text-foreground">
            {heroData.name}
          </div>
          
          <div className="flex space-x-4">
            {socialLinksFooter.map((link) => ( // Use socialLinksFooter
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${heroData.name} on ${link.name}`}
                className="text-muted-foreground hover:text-primary-foreground transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs">
          &copy; {currentYear} {heroData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
