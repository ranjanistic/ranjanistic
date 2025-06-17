import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionContainer, SectionHeader } from '@/components/ui/section-container';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { projects, experiences, blogPosts } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { ExperienceItem } from '@/components/experience-item';
import { BlogPostPreview } from '@/components/blog-post-preview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <SectionContainer id="hero" className="pt-20 md:pt-32 text-center bg-gradient-to-br from-primary/30 via-background to-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Priyanshu Ranjan
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif animate-fade-in" style={{ animationDelay: '0.4s' }}>
            A Forward-Thinking Design Expert Crafting Intuitive and Engaging Digital Experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/contact">
                Get In Touch <Mail className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* About Me Snippet */}
      <SectionContainer id="about-snippet" animated>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="https://placehold.co/500x600.png" 
              alt="Priyanshu Ranjan" 
              width={500} 
              height={600} 
              className="rounded-lg shadow-2xl object-cover aspect-[5/6]"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="prose prose-longform dark:prose-invert max-w-none">
            <h2 className="font-headline text-3xl md:text-4xl text-foreground mb-4">Hello, I'm Priyanshu.</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I specialize in transforming complex problems into elegant and user-centric design solutions. With a passion for innovation and a keen eye for detail, I strive to create digital products that not only look beautiful but also provide meaningful value to users.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My approach blends creative intuition with data-driven insights, ensuring every design decision is purposeful and impactful. I believe great design is a conversation between the product and its user.
            </p>
            <Button asChild variant="link" className="text-lg p-0 h-auto text-primary hover:text-primary/80">
              <Link href="/about">
                Learn More About Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Featured Projects */}
      <SectionContainer id="featured-projects" className="bg-muted/30" animated>
        <SectionHeader title="Featured Projects" subtitle="My Portfolio" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} animationDelay={index * 100} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/projects">
              Explore All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Latest Blog Posts */}
      <SectionContainer id="latest-blog" animated>
        <SectionHeader title="From The Blog" subtitle="Insights & Ideas" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <BlogPostPreview key={post.slug} post={post} animationDelay={index * 100} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/blog">
              Read More Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Call to Action / Contact Snippet */}
      <SectionContainer id="cta" className="bg-primary text-primary-foreground" animated>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-lg mb-8">
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
          <Button asChild variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg">
            <Link href="/contact">
              Send a Message <Mail className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionContainer>
    </>
  );
}
