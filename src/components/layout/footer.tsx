import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { CodeXml } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 text-muted-foreground py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-lg font-headline font-semibold text-foreground">
            <CodeXml className="h-6 w-6 text-primary" />
            Priyanshu Ranjan
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Priyanshu Ranjan on ${link.name}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm">
          &copy; {currentYear} Priyanshu Ranjan. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed with <span className="text-primary">&hearts;</span> and a touch of code.
        </p>
      </div>
    </footer>
  );
}
