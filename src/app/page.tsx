
import Link from 'next/link';
import Image from 'next/image';
import {
  heroData,
  workExperienceData,
  projects, // Use detailed projects array
  skillCategories, // Use detailed skillCategories array
  educationData,
  certificationsData,
  honorsAwardsData,
  socialLinksFooter,
} from '@/lib/data';
import type { Project, ProjectStorylineItem, WorkExperienceEntry, SkillCategory as SkillCategoryType, EducationEntry, GitHubUser, GitHubRepo, Certification, HonorAward } from '@/lib/types';
import { SectionContainer, SectionHeader } from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, ExternalLink, Mail, MapPin, Phone, Briefcase, Lightbulb, Code2, Settings, Users, Award, BookOpen, MessageSquare, CheckCircle, Star, GitFork, UsersRound, FolderKanban, Zap, Languages as LanguagesIcon, Trophy, GraduationCap, SquareTerminal, Brain, Mic, Palette as PaletteIcon, LifeBuoy, ShieldCheck, Github as GithubIcon // Renamed to avoid conflict
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { getGitHubUser, getGitHubRepos } from '@/lib/github-api';
import { format } from 'date-fns';
import { ExperienceItem } from '@/components/experience-item'; // For detailed experience
import { SkillCategory } from '@/components/skill-category'; // For detailed skills


// Helper function to render project storyline items (can be moved to a utils file if preferred)
function renderStorylineItem(item: ProjectStorylineItem, index: number, projectTitle: string) {
  switch (item.type) {
    case 'heading':
      return <h3 key={`${projectTitle}-story-${index}`} className="text-2xl md:text-3xl font-headline font-semibold mt-10 mb-4 text-foreground">{item.content}</h3>;
    case 'paragraph':
      return <p key={`${projectTitle}-story-${index}`} className="text-lg text-muted-foreground mb-4 leading-relaxed font-sans">{item.content}</p>;
    case 'image':
      return (
        <div key={`${projectTitle}-story-${index}`} className="my-8">
          <Image
            src={item.src}
            alt={item.alt}
            width={800}
            height={450}
            className="rounded-lg shadow-md object-cover w-full"
            data-ai-hint={item.hint || 'project detail'}
          />
          {item.alt && <p className="text-sm text-center text-muted-foreground mt-2 font-sans">{item.alt}</p>}
        </div>
      );
    case 'list':
      return (
        <ul key={`${projectTitle}-story-${index}`} className="list-disc list-inside space-y-2 my-4 text-lg text-muted-foreground font-sans">
          {item.items.map((li, i) => <li key={`${projectTitle}-story-${index}-li-${i}`}>{li}</li>)}
        </ul>
      );
    default:
      return null;
  }
}


export default async function Home() {
  const githubUser: GitHubUser | null = await getGitHubUser();
  const githubRepos: GitHubRepo[] | null = await getGitHubRepos(6);

  const aboutMeIcons = [
    { icon: UsersRound, text: "User-Centricity: Placing the user at the heart of every decision." },
    { icon: Briefcase, text: "Technology Leadership: Guiding technical direction and fostering innovation." },
    { icon: Brain, text: "Strategic Problem-Solving: Tackling challenges with analytical and creative thinking." },
    { icon: ShieldCheck, text: "Quality Craftsmanship: Delivering polished, functional, and scalable solutions." },
    { icon: MessageSquare, text: "Clear Communication: Ensuring alignment across teams and stakeholders." }
  ];


  return (
    <>
      {/* Hero Section */}
      <SectionContainer
        id="top"
        className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center bg-[linear-gradient(135deg,var(--hero-gradient-start)_0%,var(--hero-gradient-end)_100%)]"
        animated={false}
        fullWidthBg
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-extrabold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </h1>
          {heroData.title && (
            <p className="text-lg md:text-xl text-primary mb-4 font-sans max-w-2xl mx-auto">
              {heroData.title}
            </p>
          )}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-sans max-w-3xl mx-auto">
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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
              <Link href="/#contact">Let's Collaborate</Link>
            </Button>
            <Button variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto" asChild>
              <a href="/path-to-resume.pdf" download> 
                Download Resume <Download className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </a>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* About Me Section - Detailed */}
      <SectionContainer id="about" bgColorClass="bg-section-about" fullWidthBg animated>
        <SectionHeader title="About Priyanshu Ranjan" subtitle="My Journey & Philosophy" alignment="left"/>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 flex flex-col items-center">
            <Image
              src="https://placehold.co/400x500.png" // Consistent with about page
              alt="Priyanshu Ranjan"
              width={400}
              height={500}
              className="rounded-xl shadow-2xl object-cover aspect-[4/5] mb-6"
              data-ai-hint="professional tech portrait"
            />
            <h3 className="text-2xl font-headline text-foreground mb-2">{heroData.name}</h3>
            <p className="text-muted-foreground text-center mb-4 font-sans">Forward-Thinking Design Expert</p>
            <Button variant="outline" size="lg" className="mb-4 w-full max-w-xs font-sans border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="/path-to-resume.pdf" download>
                Download Resume <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <div className="flex space-x-4">
              {socialLinksFooter.map(link => (
                <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:font-sans prose-li:font-sans prose-p:text-muted-foreground prose-headings:text-foreground">
            <p className="text-xl leading-relaxed font-sans text-foreground">
              {heroData.summary || "As a dedicated and forward-thinking design expert, I am passionate about crafting digital experiences that are not only visually captivating but also deeply intuitive and user-centric. My journey in design has been fueled by a relentless curiosity and a desire to solve complex problems through creative and empathetic solutions."}
            </p>
             <h3 className="font-headline text-2xl mt-8 mb-4 !text-primary">My Approach</h3>
              <ul className="list-none space-y-3 font-sans !pl-0">
                {aboutMeIcons.map(item => (
                  <li key={item.text} className="flex items-start">
                    <item.icon className="h-5 w-5 mr-3 mt-1 text-accent shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            <h3 className="font-headline text-2xl mt-8 mb-4">My Design Philosophy</h3>
            <p>
              I believe that great design is born at the intersection of empathy, strategy, and artistry. It's about understanding the user's needs, aligning with business goals, and then weaving those elements into a seamless and delightful experience. My process is iterative and collaborative, always striving for clarity and impact. I advocate for:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>User-Centricity:</strong> Placing the user at the heart of every design decision.</li>
              <li><strong>Simplicity & Clarity:</strong> Distilling complexity into intuitive and accessible solutions.</li>
              <li><strong>Meaningful Innovation:</strong> Pushing boundaries thoughtfully to create novel and valuable experiences.</li>
              <li><strong>Data-Informed Creativity:</strong> Balancing artistic vision with empirical evidence to achieve optimal outcomes.</li>
              <li><strong>Ethical Design:</strong> Creating responsible and inclusive products that respect user autonomy and privacy.</li>
            </ul>
            
            <h3 className="font-headline text-2xl mt-8 mb-4">Beyond the Pixels</h3>
            <p>
              When I'm not immersed in design projects, I enjoy exploring new technologies, contributing to open-source projects, and continuously learning to stay at the forefront of the ever-evolving digital landscape. I'm always eager to connect with fellow creatives and innovators, so feel free to reach out!
            </p>
            <p>
              My goal is to leverage my skills and passion to contribute to projects that make a positive impact, drive innovation, and ultimately, make technology more human.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Work Experience Section - Detailed */}
      <SectionContainer id="experience" bgColorClass="bg-section-experience" fullWidthBg animated>
        <SectionHeader title="Work Experience" subtitle="Professional Journey" alignment="left" />
        <div className="space-y-12 max-w-4xl mx-auto"> {/* Increased max-width for detailed items */}
          {workExperienceData.map((exp, index) => (
            <ExperienceItem key={exp.company + exp.role + index} experience={exp} animationDelay={index * 100}/>
          ))}
        </div>
      </SectionContainer>

      {/* Projects Section - Detailed */}
      <SectionContainer id="projects" bgColorClass="bg-section-projects" fullWidthBg animated>
        <SectionHeader title="Projects" subtitle="Selected Works & Case Studies" alignment="left" />
        <div className="space-y-20"> {/* Increased spacing between detailed projects */}
          {projects.map((project, index) => (
            <article key={project.id + index} className="p-6 md:p-8 border border-border/50 rounded-lg bg-card hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1">
              <header className="mb-8">
                <h3 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-lg text-muted-foreground font-sans mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-accent/30 text-accent-foreground/80 text-sm px-3 py-1 font-sans">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink && (
                    <Button asChild className="font-sans" size="sm">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.repoLink && (
                    <Button variant="outline" asChild className="font-sans border-primary/50 text-primary hover:bg-primary/10" size="sm">
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        View Code <GithubIcon className="ml-2 h-4 w-4" />
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
                className="rounded-xl shadow-lg object-cover w-full aspect-video mb-8"
                data-ai-hint={project.imageHint || 'project main image'}
                priority={index < 2} // Prioritize loading for first few projects
              />
              
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:font-sans prose-li:font-sans prose-p:text-muted-foreground prose-headings:text-foreground">
                <h4 className="text-2xl md:text-3xl font-headline font-semibold text-foreground mb-4 border-b border-border/50 pb-2">Project Storyline</h4>
                {project.description && <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-sans">{project.description}</p>}
                {project.storyline.map((item, storyIndex) => renderStorylineItem(item, storyIndex, project.title))}
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>

      {/* GitHub Showcase Section */}
      {githubUser && (
        <SectionContainer id="github-showcase" bgColorClass="bg-section-experience" fullWidthBg animated>
          <SectionHeader title="GitHub Showcase" subtitle="My Open Source Activity" alignment="left" />
          <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              {githubUser.avatar_url && (
                <Image
                  src={githubUser.avatar_url}
                  alt={githubUser.name || githubUser.login || 'GitHub User'}
                  width={150}
                  height={150}
                  className="rounded-full shadow-lg mb-4"
                  data-ai-hint="github avatar"
                />
              )}
              <h3 className="text-2xl font-headline text-foreground mb-1">{githubUser.name || githubUser.login}</h3>
              {githubUser.bio && <p className="text-muted-foreground font-sans text-center md:text-left mb-2">{githubUser.bio}</p>}
              <div className="flex items-center text-muted-foreground text-sm mb-1">
                <UsersRound className="h-4 w-4 mr-2 text-primary" /> Followers: {githubUser.followers}
              </div>
              <div className="flex items-center text-muted-foreground text-sm mb-4">
                <FolderKanban className="h-4 w-4 mr-2 text-primary" /> Public Repos: {githubUser.public_repos}
              </div>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href={githubUser.html_url} target="_blank" rel="noopener noreferrer">
                  View GitHub Profile <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xl font-headline text-primary mb-4">Recent Repositories</h4>
              {githubRepos && githubRepos.length > 0 ? (
                <div className="space-y-6">
                  {githubRepos.map(repo => (
                    <div key={repo.id} className="p-4 border border-border/50 rounded-lg bg-card hover:shadow-md transition-shadow">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group">
                        <h5 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{repo.name}</h5>
                      </a>
                      {repo.description && <p className="text-sm text-muted-foreground font-sans mb-2 line-clamp-2">{repo.description}</p>}
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        {repo.language && (
                          <div className="flex items-center">
                            <Code2 className="h-3 w-3 mr-1 text-primary/80" /> {repo.language}
                          </div>
                        )}
                        <div className="flex items-center">
                          <Star className="h-3 w-3 mr-1 text-yellow-500" /> {repo.stargazers_count}
                        </div>
                        <div className="flex items-center">
                          <GitFork className="h-3 w-3 mr-1 text-blue-500" /> {repo.forks_count}
                        </div>
                        <span>Updated: {format(new Date(repo.updated_at), 'MMM dd, yyyy')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground font-sans">No public repositories found or could not fetch data.</p>
              )}
            </div>
          </div>
        </SectionContainer>
      )}

      {/* Skills Section - Detailed */}
      <SectionContainer id="skills" bgColorClass="bg-section-skills" fullWidthBg animated>
        <SectionHeader title="Skills &amp; Expertise" subtitle="Core Competencies & Technical Proficiency" alignment="left" />
        <p className="text-left text-lg text-muted-foreground mb-12 max-w-3xl font-sans">
          I possess a diverse range of skills spanning technology leadership, full-stack development, and design. Here's a breakdown of my core competencies and the tools I leverage to bring ideas to life.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.name + index} category={category} animationDelay={index * 100} />
          ))}
        </div>
      </SectionContainer>

      {/* Education Section */}
      <SectionContainer id="education" bgColorClass="bg-section-education" fullWidthBg animated>
        <SectionHeader title="Education" subtitle="Academic Background" alignment="left" />
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={`${edu.institution}-${edu.degree}-${index}`} className="pb-8 border-b border-border/50 last:border-b-0 last:pb-0">
              <div className="flex items-start sm:items-center mb-1">
                <GraduationCap className="h-7 w-7 mr-3 text-primary shrink-0 mt-1 sm:mt-0" />
                <h3 className="text-2xl lg:text-3xl font-headline text-foreground">
                  {edu.degree}
                </h3>
              </div>
              <div className="pl-10">
                <p className="text-lg font-semibold text-primary/90">{edu.institution} {edu.campus && `(${edu.campus})`}</p>
                <p className="text-sm text-muted-foreground mb-3 font-sans">{edu.period}</p>
                {edu.details && edu.details.map((detail, i) => (
                  <div key={`${edu.institution}-detail-${i}`} className="text-base text-muted-foreground leading-relaxed font-sans mt-2 space-y-1">
                    {detail.specialization && <p><strong className="font-medium text-foreground/80">Specialization:</strong> {detail.specialization}</p>}
                    {detail.projects && (
                      <p className="mt-1">
                        <strong className="font-medium text-foreground/80">Key Projects/Focus:</strong> {detail.projects}{' '}
                        {detail.projectLink && detail.projectLinkText && (
                          <Button variant="link" asChild className="p-0 h-auto text-sm text-accent hover:text-accent/80">
                          <Link href={detail.projectLink} className="inline-flex items-center group">
                            {detail.projectLinkText}
                            <ExternalLink className="ml-1.5 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                          </Link>
                          </Button>
                        )}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Certifications Section */}
      <SectionContainer id="certifications" bgColorClass="bg-section-skills" fullWidthBg animated>
        <SectionHeader title="Certifications" subtitle="Professional Accreditations" alignment="left" />
        <div className="grid md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => {
            const CertContent = (
              <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-card transition-colors h-full">
                {cert.imageUrl && (
                  <Image 
                    src={cert.imageUrl} 
                    alt={cert.name} 
                    width={80} 
                    height={50} 
                    className="rounded-sm object-contain mt-1 transition-transform group-hover:scale-105" 
                    data-ai-hint={cert.imageHint || 'certification logo badge'} />
                )}
                <div className="flex-1">
                  <h3 className={`text-xl font-headline mb-1 ${cert.credentialUrl && cert.credentialUrl !== '#' ? 'text-primary group-hover:text-accent' : 'text-foreground'}`}>
                    {cert.name}
                    {cert.credentialUrl && cert.credentialUrl !== '#' && <ExternalLink className="inline-block ml-2 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />}
                  </h3>
                  {cert.issuingOrganization && (
                    <p className="text-sm text-muted-foreground font-sans">
                      {cert.issuingOrganization} {cert.date && `• ${cert.date}`}
                    </p>
                  )}
                </div>
              </div>
            );

            return (
              <div key={`${cert.name}-${index}`} className="border border-border/30 rounded-lg bg-muted/20">
                {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="block">
                    {CertContent}
                  </a>
                ) : (
                  CertContent
                )}
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Honors & Awards Section */}
      <SectionContainer id="honors" bgColorClass="bg-section-education" fullWidthBg animated>
        <SectionHeader title="Honors & Awards" subtitle="Recognitions & Achievements" alignment="left" />
        <div className="space-y-8">
          {honorsAwardsData.map((honor, index) => (
            <div key={`${honor.title}-${index}`} className="pb-6 border-b border-border/50 last:border-b-0 last:pb-0">
               <div className="flex items-center mb-1">
                <Trophy className="h-6 w-6 mr-3 text-primary shrink-0" />
                <h3 className="text-xl lg:text-2xl font-headline text-foreground">
                  {honor.title}
                </h3>
              </div>
              {honor.associatedWith && (
                <p className="text-md text-primary/90 ml-9">{honor.associatedWith} {honor.date && `(${honor.date})`}</p>
              )}
              {honor.description && (
                <p className="text-base text-muted-foreground leading-relaxed font-sans mt-1 ml-9">{honor.description}</p>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Contact Section */}
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
