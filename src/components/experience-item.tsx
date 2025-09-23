"use client";
import Image from "next/image";
import type { WorkExperienceEntry } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, CalendarDays, CheckCircle, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ExperienceItemProps {
    experience: WorkExperienceEntry;
    animationDelay?: number;
}

export function ExperienceItem({ experience, animationDelay = 0 }: ExperienceItemProps) {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: true });

    return (
        <div
            ref={ref}
            className={cn("scroll-reveal-hidden", isVisible && "scroll-reveal-visible")}
            style={isVisible ? { transitionDelay: `${animationDelay}ms` } : {}}
        >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card text-card-foreground border border-border">
                <CardHeader className="p-6 bg-muted/30">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="flex-1">
                            <CardTitle className="text-2xl font-headline text-foreground mb-1">
                                {experience.role}
                            </CardTitle>
                            <CardDescription className="text-md text-primary font-semibold font-sans">
                                {experience.companyLink ? (
                                    <a
                                        href={
                                            experience.companyLink.startsWith("http")
                                                ? experience.companyLink
                                                : `https://${experience.companyLink}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline inline-flex items-center"
                                    >
                                        {experience.company} <ExternalLink className="ml-1.5 h-4 w-4" />
                                    </a>
                                ) : (
                                    experience.company
                                )}
                            </CardDescription>
                            <div className="flex items-center text-sm text-muted-foreground mt-1 font-sans">
                                <CalendarDays className="h-4 w-4 mr-2" />
                                <span>{experience.period}</span>
                                {experience.location && <span className="ml-2">• {experience.location}</span>}
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <h4 className="font-semibold font-headline text-foreground/80 mb-2 text-sm">Key Contributions:</h4>
                    <ul className="space-y-2 mb-6">
                        {experience.description.map((descItem, index) => (
                            <li key={index} className="flex items-start text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 shrink-0" />
                                <span className="font-sans">{descItem}</span>
                            </li>
                        ))}
                    </ul>

                    {experience.imageUrls && experience.imageUrls.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-border/50">
                            <h4 className="text-md font-semibold font-headline text-primary/90 mb-3">Visuals</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {experience.imageUrls.map((url, imgIndex) => (
                                    <div key={imgIndex} className="rounded-lg overflow-hidden shadow-md bg-muted/20">
                                        <Image
                                            src={url}
                                            alt={`${experience.company} - Visual ${imgIndex + 1}`}
                                            width={400}
                                            height={250}
                                            className="object-cover w-full h-auto aspect-video transition-transform duration-300 hover:scale-105"
                                            data-ai-hint={experience.imageHints?.[imgIndex] || "detailed work project"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
