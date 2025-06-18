
import Link from 'next/link';
import Image from 'next/image';
import {
  heroData,
  workExperienceData,
  projectData, 
  skillsData, 
  educationData,
  certificationsData,
  honorsAwardsData,
  socialLinksFooter,
} from '@/lib/data';
import type { ProjectEntry, WorkExperienceEntry, SkillArea, EducationEntry, GitHubUser, GitHubRepo, Certification, HonorAward } from '@/lib/types';
import { SectionContainer, SectionHeader } from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { 
  Download, ExternalLink, Mail, MapPin, Phone, Briefcase, Lightbulb, Code2, Settings, Users, Award, BookOpen, MessageSquare, CheckCircle, Star, GitFork, UsersRound, FolderKanban, Zap, Languages as LanguagesIcon, Trophy, GraduationCap, SquareTerminal, Brain, Mic, Palette as PaletteIcon, LifeBuoy, ShieldCheck
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { getGitHubUser, getGitHubRepos } from '@/lib/github-api';
import { format } from 'date-fns';

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
                {heroData.summary || "With 5 years of dedicated industry experience, I thrive on the full product development lifecycle, from conceptualization to deployment. My expertise spans technology leadership, effective communication, intuitive design, strategic problem navigation, and engaging public speaking."}
              </p>
              <p className="font-sans">
                My journey has been fueled by a relentless curiosity and a desire to solve complex problems through creative, empathetic, and technically sound solutions. I believe great products are born at the intersection of deep user understanding, robust technical architecture, and clear strategic vision.
              </p>
              <h3 className="font-headline text-2xl text-primary !mt-8 !mb-3">My Approach</h3>
              <ul className="list-none space-y-3 font-sans">
                {aboutMeIcons.map(item => (
                  <li key={item.text} className="flex items-start">
                    <item.icon className="h-5 w-5 mr-3 mt-1 text-accent shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="outline" size="lg" className="mt-8 group border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link href="/about">
                Learn More About Me <ExternalLink className="ml-2 h-4 w-4"/>
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="experience" bgColorClass="bg-section-experience" fullWidthBg animated>
        <SectionHeader title="Work Experience" subtitle="Professional Journey" alignment="left" />
        <div className="space-y-16">
          {workExperienceData.map((exp, index) => (
            <div key={`${exp.company}-${exp.role}-${index}`} className="pb-10 border-b border-border/50 last:border-b-0 last:pb-0">
              <div className="grid md:grid-cols-3 gap-6 items-start">
                {exp.imageUrl && (
                  <div className="md:col-span-1">
                    <Image 
                      src={exp.imageUrl} 
                      alt={`${exp.company} visual representation`} 
                      width={300} 
                      height={150} 
                      className="rounded-lg shadow-md object-cover w-full"
                      data-ai-hint={exp.imageHint || 'company tech project'} 
                    />
                  </div>
                )}
                <div className={exp.imageUrl ? "md:col-span-2" : "md:col-span-3"}>
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
                    <span className="text-sm text-muted-foreground font-sans">{exp.period} {exp.location && `• ${exp.location}`}</span>
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
              </div>
            </div>
          ))}
        </div>
         <Button variant="outline" asChild className="mt-12 group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href="/experience">
            View Full Experience Details <ExternalLink className="ml-2 h-4 w-4"/>
          </Link>
        </Button>
      </SectionContainer>

      <SectionContainer id="projects" bgColorClass="bg-section-projects" fullWidthBg animated>
        <SectionHeader title="Projects" subtitle="Selected Works" alignment="left" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.slice(0, 6).map((proj: ProjectEntry, index) => ( 
            <div key={proj.title + index} className="p-6 border border-border/50 rounded-lg bg-card hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1">
              {proj.imageUrl && (
                <div className="mb-4 rounded-md overflow-hidden">
                  <Image 
                    src={proj.imageUrl} 
                    alt={proj.title} 
                    width={400} 
                    height={225} 
                    className="rounded-md object-cover w-full aspect-video transition-transform duration-300 group-hover:scale-105" 
                    data-ai-hint={proj.imageHint || 'project preview'} 
                  />
                </div>
              )}
              <h3 className="text-xl lg:text-2xl font-headline text-primary mb-2 group-hover:text-accent transition-colors">
                {proj.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-4 flex-grow line-clamp-3">
                {proj.description}
              </p>
              {proj.link && proj.linkText && (
                <Button variant="link" asChild className="p-0 h-auto text-base text-accent hover:text-accent/80 self-start mt-auto">
                  <Link
                    href={proj.link}
                    target={proj.link.startsWith('/projects/') ? '_self' : '_blank'}
                    rel={proj.link.startsWith('/projects/') ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center group"
                  >
                    {proj.linkText}
                    <ExternalLink className="ml-1.5 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </div>
        <Button variant="outline" asChild className="mt-12 group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href="/projects">
            Explore All Projects <ExternalLink className="ml-2 h-4 w-4"/>
          </Link>
        </Button>
      </SectionContainer>

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

      <SectionContainer id="skills" bgColorClass="bg-section-skills" fullWidthBg animated>
        <SectionHeader title="Skills &amp; Expertise" subtitle="Core Competencies" alignment="left" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {skillsData.map((area) => (
            <div key={area.title}>
              <div className="flex items-center mb-4">
                {area.title === "Hard Skills & DevOps" && <SquareTerminal className="h-7 w-7 mr-3 text-primary" />}
                {area.title === "Soft Skills & Design" && <PaletteIcon className="h-7 w-7 mr-3 text-primary" />}
                {area.title === "Programming Languages" && <Code2 className="h-7 w-7 mr-3 text-primary" />}
                {area.title === "Tools & Technologies" && <Settings className="h-7 w-7 mr-3 text-primary" />}
                {area.title === "Frameworks & Libraries" && <Briefcase className="h-7 w-7 mr-3 text-primary" />}
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
        <Button variant="outline" asChild className="mt-12 group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href="/skills">
            View Detailed Skills <ExternalLink className="ml-2 h-4 w-4"/>
          </Link>
        </Button>
      </SectionContainer>

      <SectionContainer id="education" bgColorClass="bg-section-education" fullWidthBg animated>
        <SectionHeader title="Education" subtitle="Academic Background" alignment="left" />
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={`${edu.institution}-${edu.degree}-${index}`} className="pb-8 border-b border-border/50 last:border-b-0 last:pb-0">
              <div className="flex items-center mb-1">
                <GraduationCap className="h-7 w-7 mr-3 text-primary" />
                <h3 className="text-2xl lg:text-3xl font-headline text-foreground">
                  {edu.degree}
                </h3>
              </div>
              <p className="text-lg font-semibold text-primary/90 ml-10">{edu.institution} {edu.campus && `(${edu.campus})`}</p>
              <p className="text-sm text-muted-foreground mb-3 font-sans ml-10">{edu.period}</p>
              {edu.details && edu.details.map((detail, i) => (
                <div key={`${edu.institution}-detail-${i}`} className="text-base text-muted-foreground leading-relaxed font-sans mt-2 space-y-1 ml-10">
                  {detail.specialization && <p><strong className="font-medium text-foreground/80">Specialization:</strong> {detail.specialization}</p>}
                  {detail.projects && (
                    <p className="mt-1">
                      <strong className="font-medium text-foreground/80">Key Projects/Focus:</strong> {detail.projects}{' '}
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
                  <h3 className={`text-xl font-headline mb-1 ${cert.credentialUrl ? 'text-primary group-hover:text-accent' : 'text-foreground'}`}>
                    {cert.name}
                    {cert.credentialUrl && <ExternalLink className="inline-block ml-2 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />}
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
                {cert.credentialUrl ? (
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

      <SectionContainer id="honors" bgColorClass="bg-section-education" fullWidthBg animated>
        <SectionHeader title="Honors & Awards" subtitle="Recognitions & Achievements" alignment="left" />
        <div className="space-y-8">
          {honorsAwardsData.map((honor, index) => (
            <div key={`${honor.title}-${index}`} className="pb-6 border-b border-border/50 last:border-b-0 last:pb-0">
               <div className="flex items-center mb-1">
                <Star className="h-6 w-6 mr-3 text-primary" />
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

