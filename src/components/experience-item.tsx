"use client";
import Image from 'next/image';
import type { Experience } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, CalendarDays, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface ExperienceItemProps {
  experience: Experience;
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
            {experience.logoUrl && (
              <Image
                src={experience.logoUrl}
                alt={`${experience.company} logo`}
                width={60}
                height={60}
                className="rounded-md object-contain border bg-card p-1"
                data-ai-hint={experience.logoHint}
              />
            )}
            <div className="flex-1">
              <CardTitle className="text-2xl font-headline text-foreground mb-1">{experience.role}</CardTitle>
              <CardDescription className="text-md text-primary font-semibold">{experience.company}</CardDescription>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <CalendarDays className="h-4 w-4 mr-2" />
                <span>{experience.period} ({experience.timeline})</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4 font-serif leading-relaxed">{experience.storyline}</p>
          <h4 className="font-semibold text-foreground mb-2 text-sm">Key Achievements:</h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 shrink-0" />
                <span className="font-serif">{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
