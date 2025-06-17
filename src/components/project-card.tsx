
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
}

export function ProjectCard({ project, animationDelay = 0 }: ProjectCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: true });

  return (
    <div
      ref={ref}
      className={cn(
        "h-full scroll-reveal-hidden",
        isVisible && "scroll-reveal-visible"
      )}
      style={isVisible ? { transitionDelay: `${animationDelay}ms` } : {}}
    >
      <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-border bg-card text-card-foreground">
        <CardHeader className="p-0 relative">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full aspect-[3/2]" // Adjusted aspect ratio
            data-ai-hint={project.imageHint}
          />
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-2xl font-headline mb-2 text-foreground">{project.title}</CardTitle>
          <CardDescription className="text-muted-foreground mb-4 text-sm min-h-[3em] line-clamp-2 font-sans">{project.shortDescription}</CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-accent/30 text-accent-foreground/80 font-sans">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-muted/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button asChild variant="default" className="w-full sm:w-auto font-sans">
            <Link href={`/projects/${project.slug}`}>
              View Storyline <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex gap-2">
            {project.liveLink && (
              <Button variant="outline" size="icon" asChild className="border-primary/50 text-primary hover:bg-primary/10">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live preview">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.repoLink && (
              <Button variant="outline" size="icon" asChild className="border-primary/50 text-primary hover:bg-primary/10">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
