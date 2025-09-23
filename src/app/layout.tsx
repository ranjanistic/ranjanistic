import type { Metadata } from "next";
import { Archivo, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const archivo = Archivo({
    subsets: ["latin"],
    variable: "--font-archivo",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"], // Added more weights
});

const interTight = Inter_Tight({
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-inter-tight",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"], // Added more weights
});

export const metadata: Metadata = {
    title: "Priyanshu Ranjan | Portfolio",
    description:
        "Portfolio of Priyanshu Ranjan, showcasing 5 years of industry experience in technology leadership and product development.",
    keywords:
        "Priyanshu Ranjan, portfolio, software developer, CTO, full stack, product development, technology leadership",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head></head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans text-foreground antialiased", // font-sans will use Inter Tight
                    archivo.variable,
                    interTight.variable,
                )}
            >
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
                <Toaster />
            </body>
        </html>
    );
}
