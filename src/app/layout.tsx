import type { Metadata } from 'next';
import { Inter, Alegreya } from 'next/font/google'; // Removed Belleza, Inter will be headline
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // For headlines and general sans-serif
  display: 'swap',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
  variable: '--font-alegreya', // For body/longform text
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
          "min-h-screen bg-background font-serif text-foreground antialiased", 
          inter.variable, 
          alegreya.variable // Belleza variable removed
        )}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow"> 
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
