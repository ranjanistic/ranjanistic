
import Link from 'next/link';
import Image from 'next/image';
import {
  heroData,
  workExperienceData,
  projectData,
  skillsData,
  educationData,
  socialLinksFooter,
  blogPosts,
} from '@/lib/data';
import type { ProjectEntry as ProjectDataType, WorkExperienceEntry, SkillArea, EducationEntry } from '@/lib/types';
import { SectionContainer, SectionHeader } from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Mail, MapPin, Phone, Linkedin, Github, Gitlab } from 'lucide-react';
import { BlogPostPreview } from '@/components/blog-post-preview';
import { ContactForm } from '@/components/contact-form';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Width Background, Centered Content */}
      <SectionContainer 
        id="top" 
        className="bg-gradient-to-br from-muted via-background to-background min-h-[calc(100vh-4rem)] flex flex-col justify-center" // Full viewport height minus navbar
        fullWidthBg // Make background full width
        animated={false} // No animation for hero typically
      >
        <div className="text-center max-w-4xl mx-auto"> {/* Content centered within */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-extrabold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif max-w-3xl mx-auto">
            {heroData.tagline}
          </p>
          <div className="text-sm text-muted-foreground space-y-2 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:space-x-6 mb-10">
            <div className="flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>{heroData.location}</span>
            </div>
            <span className="hidden sm:inline text-muted-foreground/50">|</span>
            <a href={`mailto:${heroData.email}`} className="flex items-center justify-center hover:text-primary group">
              <Mail className="h-4 w-4 mr-2 text-primary group-hover:text-accent transition-colors" />
              {heroData.email}
            </a>
          </div>
          <div className="flex justify-center space-x-4 mb-10">
            {socialLinksFooter.map(link => (
              <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full hover:bg-accent/10 hover:border-accent">
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                </a>
              </Button>
            ))}
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Link href="/#contact">Let's Collaborate</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* About Me Section */}
      <SectionContainer id="about" animated>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <Image
              src="https://placehold.co/600x750.png" 
              alt="Priyanshu Ranjan"
              width={600}
              height={750}
              className="rounded-xl shadow-2xl object-cover aspect-[4/5] max-w-md w-full"
              data-ai-hint="professional developer"
            />
          </div>
          <div className="lg:col-span-3">
            <SectionHeader title="About Me" subtitle="My Journey & Philosophy" alignment="left" className="mb-6"/>
            <div className="prose prose-lg dark:prose-invert max-w-none font-serif text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed text-foreground">
                With 5 years of dedicated industry experience, I thrive on the full product development lifecycle, from conceptualization to deployment. My expertise spans technology leadership, effective communication, intuitive design, strategic problem navigation, and engaging public speaking.
              </p>
              <p>
                My journey has been fueled by a relentless curiosity and a desire to solve complex problems through creative, empathetic, and technically sound solutions. I believe great products are born at the intersection of deep user understanding, robust technical architecture, and clear strategic vision.
              </p>
              <h3 className="font-headline text-2xl text-foreground !mt-8 !mb-3">My Approach</h3>
              <ul className="list-disc list-outside space-y-2 pl-5">
                <li><strong>User-Centricity:</strong> Placing the user at the heart of every decision.</li>
                <li><strong>Technology Leadership:</strong> Guiding technical direction and fostering innovation.</li>
                <li><strong>Pragmatic Problem-Solving:</strong> Tackling challenges with analytical and creative thinking.</li>
                <li><strong>Quality Craftsmanship:</strong> Delivering polished, functional, and scalable solutions.</li>
                <li><strong>Clear Communication:</strong> Ensuring alignment across teams and stakeholders.</li>
              </ul>
            </div>
             <Button variant="default" size="lg" className="mt-8 group" asChild>
              <a href="/path-to-resume.pdf" download>
                Download Resume <Download className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </a>
            </Button>
          </div>
        </div>
      </SectionContainer>
      
      {/* Work Experience Section - Full Width Background */}
      <SectionContainer id="experience" className="bg-muted" fullWidthBg animated>
        <SectionHeader title="Work Experience" subtitle="Professional Journey" alignment="left" />
        <div className="space-y-10">
          {workExperienceData.map((exp, index) => (
            <div key={index} className="pb-8 border-b border-border/30 last:border-b-0 last:pb-0">
              <h3 className="text-2xl font-headline text-foreground mb-1">
                {exp.role}
              </h3>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-lg font-semibold text-primary">
                  {exp.companyLink ? (
                    <a href={exp.companyLink.startsWith('http') ? exp.companyLink : `https://${exp.companyLink}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center group">
                      {exp.company}
                      <ExternalLink className="ml-1.5 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </a>
                  ) : exp.company}
                </span>
                <span className="text-sm text-muted-foreground font-sans">{exp.period}</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1.5 text-base text-muted-foreground leading-relaxed font-serif">
                {exp.description.map((desc, i) => (
                  <li key={i} className="pl-1">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Projects Section */}
      <SectionContainer id="projects" animated>
        <SectionHeader title="Projects" subtitle="Selected Works" alignment="left" />
        <div className="space-y-10">
          {projectData.map((proj: ProjectDataType, index: number) => (
            <div key={index} className="pb-6 border-b border-border/30 last:border-b-0 last:pb-0">
              <h3 className="text-2xl font-headline text-foreground mb-1">
                {proj.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed font-serif mb-3">
                {proj.description}
              </p>
              {proj.link && proj.linkText && (
                <Button variant="link" asChild className="p-0 h-auto text-base">
                  <a 
                    href={proj.link.startsWith('http') || proj.link.startsWith('#') ? proj.link : `https://${proj.link}`} 
                    target={proj.link.startsWith('http') ? '_blank' : '_self'} 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center group"
                  >
                    {proj.linkText}
                    {proj.link.startsWith('http') && <ExternalLink className="ml-1.5 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />}
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Skills Section - Full Width Background */}
      <SectionContainer id="skills" className="bg-muted" fullWidthBg animated>
        <SectionHeader title="Skills & Expertise" subtitle="Core Competencies" alignment="left" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {skillsData.map((area, index) => (
            <div key={index}>
              <h3 className="text-xl font-headline text-primary border-b-2 border-primary/30 pb-2 mb-4">
                {area.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed font-serif whitespace-pre-line">
                {area.skills}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Education Section */}
      <SectionContainer id="education" animated>
        <SectionHeader title="Education" subtitle="Academic Background" alignment="left" />
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div key={index} className="pb-6 border-b border-border/30 last:border-b-0 last:pb-0">
              <h3 className="text-2xl font-headline text-foreground">
                {edu.degree}
              </h3>
              <p className="text-lg font-semibold text-primary">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mb-3 font-sans">{edu.period}</p>
              {edu.details && edu.details.map((detail, i) => (
                <div key={i} className="text-base text-muted-foreground leading-relaxed font-serif mt-2">
                  {detail.specialization && <p><strong className="font-medium text-foreground/80">Specialization:</strong> {detail.specialization}</p>}
                  {detail.projects && (
                    <p className="mt-1">
                      <strong className="font-medium text-foreground/80">Projects:</strong> {detail.projects}{' '}
                      {detail.projectLink && detail.projectLinkText && (
                        <Button variant="link" asChild className="p-0 h-auto text-base">
                        <a href={detail.projectLink} target={detail.projectLink.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="inline-flex items-center group">
                          {detail.projectLinkText}
                          {detail.projectLink.startsWith('http') && <ExternalLink className="ml-1.5 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />}
                        </a>
                        </Button>
                      )}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* Blog Section - Full Width Background */}
      {blogPosts.length > 0 && (
        <SectionContainer id="blog" className="bg-muted" fullWidthBg animated>
          <SectionHeader title="Insights & Articles" subtitle="My Blog" alignment="left" />
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl font-serif">
            Welcome to my blog where I share insights on design, technology, creative processes, and more. Explore articles that aim to inspire and inform.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => ( // Show max 3 on homepage
              <BlogPostPreview key={post.slug} post={post} animationDelay={index * 100} />
            ))}
          </div>
          {blogPosts.length > 3 && (
            <div className="mt-12 text-left">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          )}
        </SectionContainer>
      )}

      {/* Contact Section */}
      <SectionContainer id="contact" animated>
        <SectionHeader title="Contact Me" subtitle="Let's Connect" alignment="left" />
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground font-serif leading-relaxed">
              I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. Whether you have a question or just want to say hello, feel free to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3 shrink-0" />
                <span className="text-muted-foreground font-serif">{heroData.location}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3 shrink-0" />
                <a href={`mailto:${heroData.email}`} className="text-muted-foreground hover:text-primary font-serif break-all">{heroData.email}</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3 shrink-0" />
                <span className="text-muted-foreground font-serif">(Available upon request)</span>
              </div>
            </div>
            <div className="flex space-x-3 pt-2">
              {socialLinksFooter.map(link => (
                <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full hover:bg-accent/10 hover:border-accent group">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </SectionContainer>
    </>
  );
}
