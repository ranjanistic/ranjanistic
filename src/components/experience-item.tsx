"use client";
import Image from 'next/image';
import type { WorkExperienceEntry } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, CalendarDays, CheckCircle, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ExperienceItemProps {
  experience: WorkExperienceEntry;
  animationDelay?: number;
}

export function ExperienceItem({ experience, animationDelay = 0 }: ExperienceItemProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: true });

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-reveal-hidden",
        isVisible && "scroll-reveal-visible"
      )}
      style={isVisible ? { transitionDelay: `${animationDelay}ms` } : {}}
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        <CardHeader className="p-6 bg-muted/30">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            {/* Logo removed as it's not in WorkExperienceEntry */}
            <div className="flex-1">
              <CardTitle className="text-2xl font-headline text-foreground mb-1">{experience.role}</CardTitle>
              <CardDescription className="text-md text-primary font-semibold">
                {experience.companyLink ? (
                  <a href={experience.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center">
                    {experience.company} <ExternalLink className="ml-1.5 h-4 w-4" />
                  </a>
                ) : (
                  experience.company
                )}
              </CardDescription>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <CalendarDays className="h-4 w-4 mr-2" />
                <span>{experience.period}</span>
                {/* Timeline removed as it's not in WorkExperienceEntry */}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          {/* Storyline paragraph removed as it's not in WorkExperienceEntry */}
          <h4 className="font-semibold text-foreground mb-2 text-sm">Key Contributions:</h4>
          <ul className="space-y-2">
            {experience.description.map((descItem, index) => (
              <li key={index} className="flex items-start text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 shrink-0" />
                <span className="font-serif">{descItem}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
