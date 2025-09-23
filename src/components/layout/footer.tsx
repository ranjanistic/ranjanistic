import Link from "next/link";
import { socialLinksFooter, heroData } from "@/lib/data";

export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground py-12 mt-16 border-t border-border/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="text-2xl font-headline font-bold text-foreground mb-2">{heroData.name}</div>
                        <p className="text-sm font-sans">
                            Crafting digital experiences, one line of code and pixel at a time.
                        </p>
                    </div>

                    <div className="flex md:justify-end space-x-4">
                        {socialLinksFooter.map((link) => (
                            <Link
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${heroData.name} on ${link.name}`}
                                className="text-muted-foreground hover:text-primary transition-colors duration-300 group"
                            >
                                <link.icon className="h-7 w-7 group-hover:text-accent group-hover:scale-110 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
