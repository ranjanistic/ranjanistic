import type { Metadata } from 'next';
import { Inter, Belleza, Alegreya } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // Kept for fallback or specific UI elements
  display: 'swap',
});

const belleza = Belleza({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-belleza',
  display: 'swap',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
  variable: '--font-alegreya',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Priyanshu Ranjan | Portfolio',
  description: 'Portfolio of Priyanshu Ranjan, showcasing 5 years of industry experience in technology leadership and product development.',
  keywords: 'Priyanshu Ranjan, portfolio, software developer, CTO, full stack, product development, technology leadership',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body 
        className={cn(
          "min-h-screen bg-background font-serif text-foreground antialiased", // Changed default font to serif (Alegreya)
          inter.variable, 
          belleza.variable, 
          alegreya.variable
        )}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow"> {/* Container removed, page.tsx will handle its own max-width */}
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
