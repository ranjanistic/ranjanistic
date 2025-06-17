
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
import type { ProjectEntry, WorkExperienceEntry, SkillArea, EducationEntry } from '@/lib/types';
import { SectionContainer, SectionHeader } from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Mail, MapPin, Phone, Briefcase, Lightbulb, Code2, Settings, Users, Award, BookOpen, MessageSquare, CheckCircle } from 'lucide-react';
import { BlogPostPreview } from '@/components/blog-post-preview';
import { ContactForm } from '@/components/contact-form';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <SectionContainer
        id="top"
        className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center bg-[linear-gradient(180deg,var(--hero-gradient-start)_0%,var(--hero-gradient-end)_70%)]"
        animated={false}
        fullWidthBg
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-extrabold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-sans max-w-3xl mx-auto">
            {heroData.tagline}
          </p>
          <div className="text-sm text-muted-foreground space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:space-x-6 mb-10">
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
          <div className="flex justify-center space-x-3 mb-10">
            {socialLinksFooter.map(link => (
              <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full hover:bg-accent/20 hover:border-accent border-primary/30 text-primary hover:text-accent">
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Link href="/#contact">Let's Collaborate</Link>
          </Button>
        </div>
      </SectionContainer>

      <SectionContainer id="about" bgColorClass="bg-section-about" fullWidthBg animated>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <Image
              src="https://placehold.co/600x750.png"
              alt="Priyanshu Ranjan - Professional Portrait"
              width={600}
              height={750}
              className="rounded-xl shadow-2xl object-cover aspect-[4/5] max-w-md w-full"
              data-ai-hint="professional tech leader"
            />
          </div>
          <div className="lg:col-span-3">
            <SectionHeader title="About Me" subtitle="My Journey &amp; Philosophy" alignment="left" className="mb-6"/>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-xl leading-relaxed text-foreground font-sans">
                With 5 years of dedicated industry experience, I thrive on the full product development lifecycle, from conceptualization to deployment. My expertise spans technology leadership, effective communication, intuitive design, strategic problem navigation, and engaging public speaking.
              </p>
              <p className="font-sans">
                My journey has been fueled by a relentless curiosity and a desire to solve complex problems through creative, empathetic, and technically sound solutions. I believe great products are born at the intersection of deep user understanding, robust technical architecture, and clear strategic vision.
              </p>
              <h3 className="font-headline text-2xl text-primary !mt-8 !mb-3">My Approach</h3>
              <ul className="list-none space-y-3 font-sans">
                {[
                  { icon: Users, text: "User-Centricity: Placing the user at the heart of every decision." },
                  { icon: Briefcase, text: "Technology Leadership: Guiding technical direction and fostering innovation." },
                  { icon: Lightbulb, text: "Pragmatic Problem-Solving: Tackling challenges with analytical and creative thinking." },
                  { icon: Award, text: "Quality Craftsmanship: Delivering polished, functional, and scalable solutions." },
                  { icon: MessageSquare, text: "Clear Communication: Ensuring alignment across teams and stakeholders." }
                ].map(item => (
                  <li key={item.text} className="flex items-start">
                    <item.icon className="h-5 w-5 mr-3 mt-1 text-accent shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
             <Button variant="outline" size="lg" className="mt-8 group border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="/path-to-resume.pdf" download>
                Download Resume <Download className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </a>
            </Button>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="experience" bgColorClass="bg-section-experience" fullWidthBg animated>
        <SectionHeader title="Work Experience" subtitle="Professional Journey" alignment="left" />
        <div className="space-y-12">
          {workExperienceData.map((exp, index) => (
            <div key={`${exp.company}-${exp.role}-${index}`} className="pb-10 border-b border-border/50 last:border-b-0 last:pb-0">
              <h3 className="text-2xl lg:text-3xl font-headline text-primary mb-1">
                {exp.role}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-1 mb-3">
                <span className="text-xl font-semibold text-foreground">
                  {exp.companyLink ? (
                    <a href={exp.companyLink.startsWith('http') ? exp.companyLink : `https://${exp.companyLink}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center group hover:text-accent">
                      {exp.company}
                      <ExternalLink className="ml-2 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </a>
                  ) : exp.company}
                </span>
                <span className="text-sm text-muted-foreground font-sans">{exp.period}</span>
              </div>
              <ul className="list-none space-y-2 text-base text-muted-foreground leading-relaxed font-sans">
                {exp.description.map((desc, i) => (
                  <li key={`${exp.company}-${exp.role}-desc-${i}`} className="flex items-start pl-1">
                    <CheckCircle className="h-4 w-4 mr-2.5 mt-1 text-accent/80 shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="projects" bgColorClass="bg-section-projects" fullWidthBg animated>
        <SectionHeader title="Projects" subtitle="Selected Works" alignment="left" />
        <div className="space-y-12">
          {projectData.map((proj: ProjectEntry) => (
            <div key={proj.title} className="pb-8 border-b border-border/50 last:border-b-0 last:pb-0">
              <h3 className="text-2xl lg:text-3xl font-headline text-primary mb-2">
                {proj.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed font-sans mb-4">
                {proj.description}
              </p>
              {proj.link && proj.linkText && (
                <Button variant="link" asChild className="p-0 h-auto text-base text-accent hover:text-accent/80">
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

      <SectionContainer id="skills" bgColorClass="bg-section-skills" fullWidthBg animated>
        <SectionHeader title="Skills &amp; Expertise" subtitle="Core Competencies" alignment="left" />
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {skillsData.map((area) => (
            <div key={area.title}>
              <div className="flex items-center mb-4">
                {area.title === "Hard Skills" && <Code2 className="h-7 w-7 mr-3 text-primary" />}
                {area.title === "Soft Skills" && <Users className="h-7 w-7 mr-3 text-primary" />}
                {area.title === "Languages" && <BookOpen className="h-7 w-7 mr-3 text-primary" />}
                {area.title === "Tools & Technologies" && <Settings className="h-7 w-7 mr-3 text-primary" />}
                {area.title === "Frameworks" && <Briefcase className="h-7 w-7 mr-3 text-primary" />}
                <h3 className="text-2xl font-headline text-primary">
                  {area.title}
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed font-sans whitespace-pre-line">
                {area.skills}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="education" bgColorClass="bg-section-education" fullWidthBg animated>
        <SectionHeader title="Education" subtitle="Academic Background" alignment="left" />
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={`${edu.institution}-${edu.degree}-${index}`} className="pb-8 border-b border-border/50 last:border-b-0 last:pb-0">
              <h3 className="text-2xl lg:text-3xl font-headline text-foreground">
                {edu.degree}
              </h3>
              <p className="text-lg font-semibold text-primary mt-1">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mb-3 font-sans">{edu.period}</p>
              {edu.details && edu.details.map((detail, i) => (
                <div key={`${edu.institution}-detail-${i}`} className="text-base text-muted-foreground leading-relaxed font-sans mt-2 space-y-1">
                  {detail.specialization && <p><strong className="font-medium text-foreground/80">Specialization:</strong> {detail.specialization}</p>}
                  {detail.projects && (
                    <p className="mt-1">
                      <strong className="font-medium text-foreground/80">Projects:</strong> {detail.projects}{' '}
                      {detail.projectLink && detail.projectLinkText && (
                        <Button variant="link" asChild className="p-0 h-auto text-sm text-accent hover:text-accent/80">
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

      {blogPosts.length > 0 && (
        <SectionContainer id="blog" bgColorClass="bg-section-blog" fullWidthBg animated>
          <SectionHeader title="Insights &amp; Articles" subtitle="My Blog" alignment="left" />
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl font-sans">
            Welcome to my blog where I share insights on design, technology, creative processes, and more. Explore articles that aim to inspire and inform.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <BlogPostPreview key={post.slug} post={post} animationDelay={index * 100} />
            ))}
          </div>
          {blogPosts.length > 3 && (
            <div className="mt-12 text-left">
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          )}
        </SectionContainer>
      )}

      <SectionContainer id="contact" bgColorClass="bg-section-contact" fullWidthBg animated>
        <SectionHeader title="Contact Me" subtitle="Let's Connect" alignment="left" />
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. Whether you have a question or just want to say hello, feel free to reach out.
            </p>
            <div className="space-y-4 font-sans">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3 shrink-0" />
                <span className="text-muted-foreground">{heroData.location}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3 shrink-0" />
                <a href={`mailto:${heroData.email}`} className="text-muted-foreground hover:text-primary break-all">{heroData.email}</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3 shrink-0" />
                <span className="text-muted-foreground">(Available upon request)</span>
              </div>
            </div>
            <div className="flex space-x-3 pt-2">
              {socialLinksFooter.map(link => (
                <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full hover:bg-accent/20 hover:border-accent border-primary/30 text-primary hover:text-accent group">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5 group-hover:text-accent transition-colors" />
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

    
