
import { projects } from '@/lib/data'; // Ensure 'projects' (detailed version) is exported from data.ts
import type { Project, ProjectStorylineItem } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { SectionContainer } from '@/components/ui/section-container';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  return {
    title: `${project.title} | Priyanshu Ranjan`,
    description: project.shortDescription,
  };
}

function renderStorylineItem(item: ProjectStorylineItem, index: number) {
  switch (item.type) {
    case 'heading':
      return <h3 key={index} className="text-2xl md:text-3xl font-headline font-semibold mt-8 mb-4 text-foreground">{item.content}</h3>;
    case 'paragraph':
      return <p key={index} className="text-lg text-muted-foreground mb-4 leading-relaxed font-sans">{item.content}</p>;
    case 'image':
      return (
        <div key={index} className="my-8">
          <Image
            src={item.src}
            alt={item.alt}
            width={800}
            height={450}
            className="rounded-lg shadow-md object-cover w-full"
            data-ai-hint={item.hint}
          />
          <p className="text-sm text-center text-muted-foreground mt-2 font-sans">{item.alt}</p>
        </div>
      );
    case 'list':
      return (
        <ul key={index} className="list-disc list-inside space-y-2 my-4 text-lg text-muted-foreground font-sans">
          {item.items.map((li, i) => <li key={i}>{li}</li>)}
        </ul>
      );
    default:
      return null;
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <SectionContainer animated bgColorClass="bg-section-projects" fullWidthBg>
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" asChild className="mb-8 font-sans border-primary/50 text-primary hover:bg-primary/10">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground font-sans mb-6">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-accent/30 text-accent-foreground/80 text-sm px-3 py-1 font-sans">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              {project.liveLink && (
                <Button asChild className="font-sans">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.repoLink && (
                <Button variant="outline" asChild className="font-sans border-primary/50 text-primary hover:bg-primary/10">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    View Code <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </header>

          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={675}
            className="rounded-xl shadow-xl object-cover w-full aspect-video mb-12"
            data-ai-hint={project.imageHint}
            priority
          />
          
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:font-sans prose-li:font-sans prose-p:text-muted-foreground prose-headings:text-foreground">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6 border-b border-border/50 pb-2">Project Storyline</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-sans">{project.description}</p>
            {project.storyline.map(renderStorylineItem)}
          </div>
        </article>
      </div>
    </SectionContainer>
  );
}
