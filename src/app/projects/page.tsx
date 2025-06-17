import { ProjectCard } from '@/components/project-card';
import { SectionContainer, SectionHeader } from '@/components/ui/section-container';
import { projects } from '@/lib/data';

export const metadata = {
  title: 'Projects | Priyanshu Ranjan',
  description: 'A showcase of projects by Priyanshu Ranjan, demonstrating expertise in design and development.',
};

export default function ProjectsPage() {
  return (
    <SectionContainer id="projects-showcase" animated>
      <SectionHeader title="My Projects" subtitle="Portfolio Showcase" />
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-serif">
        Here are some of the projects I've had the pleasure of working on. Each one represents a unique challenge and an opportunity to create something impactful and user-friendly.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} animationDelay={index * 100} />
        ))}
      </div>
    </SectionContainer>
  );
}
