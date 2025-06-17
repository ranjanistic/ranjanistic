import type { Metadata } from 'next';
import { Inter, Belleza, Alegreya } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
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
  variable: '--font-alegreya',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Priyanshu Ranjan | Design Portfolio',
  description: 'Portfolio of Priyanshu Ranjan, a forward-thinking design expert.',
  keywords: 'Priyanshu Ranjan, design, portfolio, UI, UX, web design, product design',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts are handled by next/font, no need for <link> tags here if using next/font */}
      </head>
      <body 
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          inter.variable, 
          belleza.variable, 
          alegreya.variable
        )}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
