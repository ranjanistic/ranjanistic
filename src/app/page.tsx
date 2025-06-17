
import Link from 'next/link';
import Image from 'next/image';
import {
  heroData,
  workExperienceData,
  projectData, // Using the simplified projectData for the main page
  skillsData,    // Using the simplified skillsData for the main page
  educationData,
  socialLinksFooter,
  blogPosts, // Now importing blogPosts from lib/data
} from '@/lib/data';
import type { ProjectEntry as ProjectDataType } from '@/lib/types'; // Using ProjectEntry for projectData
import { SectionContainer, SectionHeader } from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, Github, Gitlab, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { BlogPostPreview } from '@/components/blog-post-preview';
import { ContactForm } from '@/components/contact-form';
// Removed local definitions of projectsData, skillCategoriesData, experiencesData, blogPostsData

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <SectionContainer id="top" className="pt-20 md:pt-32 text-center bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {heroData.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif animate-fade-in" style={{animationDelay: '0.4s'}}>
            {heroData.tagline}
          </p>
           <div className="text-sm text-muted-foreground space-y-1 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:space-x-4 mb-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <span>{heroData.location}</span>
            <span className="hidden sm:inline">|</span>
            <a href={`mailto:${heroData.email}`} className="hover:text-primary-foreground block sm:inline">
              {heroData.email}
            </a>
          </div>
          <div className="mt-3 flex justify-center space-x-4 text-sm animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a href={heroData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">
              LinkedIn
            </a>
            <a href={heroData.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">
              GitHub
            </a>
            <a href={heroData.gitlab} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">
              GitLab
            </a>
          </div>
        </div>
      </SectionContainer>

      {/* About Me Section - Simplified from original about page content */}
      <SectionContainer id="about" animated>
        <SectionHeader title="About Priyanshu Ranjan" subtitle="My Journey & Philosophy" />
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 flex flex-col items-center">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Priyanshu Ranjan"
              width={400}
              height={500}
              className="rounded-xl shadow-2xl object-cover aspect-[4/5] mb-6"
              data-ai-hint="professional designer"
            />
            <h3 className="text-2xl font-headline text-foreground mb-2">{heroData.name}</h3>
            <p className="text-muted-foreground text-center mb-4">Forward-Thinking Design Expert</p>
            <Button variant="default" size="lg" className="mb-4 w-full max-w-xs" asChild>
              <a href="/path-to-resume.pdf" download> {/* Update this path */}
                Download Resume <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <div className="flex space-x-4">
              {socialLinksFooter.map(link => (
                <Button key={link.name} variant="outline" size="icon" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 prose prose-longform dark:prose-invert max-w-none font-serif">
            <p className="text-xl leading-relaxed">
              As a dedicated and forward-thinking design expert with 5 years of industry experience, I am passionate about the full product development lifecycle, technology leadership, and crafting digital experiences that are not only visually captivating but also deeply intuitive and user-centric. My journey has been fueled by a relentless curiosity and a desire to solve complex problems through creative and empathetic solutions.
            </p>
            <h3 className="font-headline text-2xl mt-8 mb-4">My Approach</h3>
            <p>
              I believe great solutions are born at the intersection of empathy, strategy, and artistry. It's about understanding user needs, aligning with business goals, and then weaving those elements into a seamless and delightful experience. My process is iterative and collaborative, always striving for clarity and impact. I focus on:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>User-Centricity:</strong> Placing the user at the heart of every decision.</li>
              <li><strong>Effective Communication:</strong> Ensuring clarity across teams and stakeholders.</li>
              <li><strong>Problem Navigation:</strong> Tackling challenges with analytical and creative thinking.</li>
              <li><strong>Technology Leadership:</strong> Guiding technical direction and fostering innovation.</li>
              <li><strong>Quality Design:</strong> Delivering polished, functional, and aesthetically pleasing products.</li>
            </ul>
            <p>
              When I'm not immersed in projects, I enjoy exploring new technologies and public speaking. My goal is to leverage my skills and passion to contribute to projects that make a positive impact and drive innovation.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/#contact">Let's Collaborate</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* Work Experience Section */}
      <SectionContainer id="experience" className="bg-muted/30" animated>
        <SectionHeader title="Work Experience" subtitle="Professional Journey" />
        <div className="max-w-3xl mx-auto space-y-8">
          {workExperienceData.map((exp, index) => (
            <div key={index} className="border-b border-border/50 pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-xl font-headline text-foreground">
                {exp.role}{' '}
                <span className="text-primary-foreground font-normal">
                  @ {exp.companyLink ? (
                    <a href={exp.companyLink.startsWith('http') ? exp.companyLink : `https://${exp.companyLink}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-primary">
                      {exp.company}
                      <ExternalLink className="ml-1 h-3 w-3 text-muted-foreground" />
                    </a>
                  ) : exp.company}
                </span>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-base text-muted-foreground leading-relaxed font-serif">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Projects Section */}
      <SectionContainer id="projects" animated>
        <SectionHeader title="Projects" subtitle="Selected Works" />
        <div className="max-w-3xl mx-auto space-y-6">
          {projectData.map((proj: ProjectDataType, index: number) => (
            <div key={index} className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
              <h3 className="text-xl font-headline text-foreground mb-1">
                {proj.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed font-serif">
                {proj.description}{' '}
                {proj.link && proj.linkText && (
                  <a 
                    href={proj.link.startsWith('http') || proj.link.startsWith('#') ? proj.link : `https://${proj.link}`} 
                    target={proj.link.startsWith('http') ? '_blank' : '_self'} 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center hover:text-primary"
                  >
                    {proj.linkText}
                    {proj.link.startsWith('http') && <ExternalLink className="ml-1 h-3 w-3 text-muted-foreground" />}
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Skills Section */}
      <SectionContainer id="skills" className="bg-muted/30" animated>
        <SectionHeader title="Skills" subtitle="Expertise Overview" />
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-6">
          {skillsData.map((area, index) => (
            <div key={index}>
              <h3 className="text-lg font-headline text-foreground mb-1 border-b border-primary/30 pb-1">
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
        <SectionHeader title="Education" subtitle="Academic Background" />
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="border-b border-border/50 pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-xl font-headline text-foreground">
                {edu.degree}
              </h3>
              <p className="text-base text-muted-foreground">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
              {edu.details && edu.details.map((detail, i) => (
                <div key={i} className="text-base text-muted-foreground leading-relaxed font-serif mt-1">
                  {detail.projects && (
                    <p>
                      <strong>Projects:</strong> {detail.projects}{' '}
                      {detail.projectLink && detail.projectLinkText && (
                        <a href={detail.projectLink} target={detail.projectLink.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="inline-flex items-center hover:text-primary">
                          {detail.projectLinkText}
                          {detail.projectLink.startsWith('http') && <ExternalLink className="ml-1 h-3 w-3 text-muted-foreground" />}
                        </a>
                      )}
                    </p>
                  )}
                  {detail.specialization && <p><strong>Specialization:</strong> {detail.specialization}</p>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* Blog Section */}
      <SectionContainer id="blog" className="bg-muted/30" animated>
        <SectionHeader title="Creative & Stylish Content" subtitle="My Blog" />
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-serif">
          Welcome to my blog where I share insights on design, technology, creative processes, and more. Explore articles that aim to inspire and inform.
        </p>
        {blogPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostPreview key={post.slug} post={post} animationDelay={index * 100} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
        )}
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer id="contact" animated>
        <SectionHeader title="Contact Me" subtitle="Let's Connect" />
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-serif">
          I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. Feel free to reach out using the form below or through my social channels.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
            <MapPin className="h-10 w-10 text-primary mb-3" />
            <h3 className="text-xl font-headline text-foreground mb-1">Location</h3>
            <p className="text-muted-foreground font-serif">{heroData.location}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
            <Mail className="h-10 w-10 text-primary mb-3" />
            <h3 className="text-xl font-headline text-foreground mb-1">Email</h3>
            <a href={`mailto:${heroData.email}`} className="text-muted-foreground hover:text-primary font-serif break-all">{heroData.email}</a>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
            <Phone className="h-10 w-10 text-primary mb-3" />
            <h3 className="text-xl font-headline text-foreground mb-1">Phone</h3>
            <p className="text-muted-foreground font-serif">(Available upon request)</p>
          </div>
        </div>
        <ContactForm />
      </SectionContainer>
    </>
  );
}
