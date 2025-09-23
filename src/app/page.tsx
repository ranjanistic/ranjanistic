import Link from 'next/link'
import Image from 'next/image'
import {
  heroData,
  socialLinksFooter,
  workExperienceData,
  projects,
  skillCategories,
  educationData,
  certificationsData,
  honorsAwardsData
} from '@/lib/data'
import type {
  ProjectStorylineItem,
  WorkExperienceEntry,
  SkillCategory as SkillCategoryType,
  EducationEntry,
  Certification,
  HonorAward,
  Skill
} from '@/lib/types'
import {
  SectionContainer,
  SectionHeader
} from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Briefcase,
  Lightbulb,
  Code2 as CodeIconLucide,
  Settings,
  Users,
  Award,
  BookOpen,
  MessageSquare,
  CheckCircle,
  Star,
  GitFork,
  UsersRound,
  FolderKanban,
  Zap,
  Languages as LanguagesIcon,
  Trophy,
  GraduationCap,
  SquareTerminal,
  Brain,
  Mic,
  Palette as PaletteIcon,
  LifeBuoy,
  Github as GithubIcon,
  ShieldCheck,
  TrendingUpDown
} from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { format } from 'date-fns'
import { ExperienceItem } from '@/components/experience-item'
import { SkillCategory } from '@/components/skill-category'

import picture from '@/assets/picture.png'

// Helper function to render project storyline items
function renderStorylineItem (
  item: ProjectStorylineItem,
  index: number,
  projectTitle: string
) {
  switch (item.type) {
    case 'heading':
      return (
        <h3
          key={`${projectTitle}-story-${index}`}
          className='text-2xl md:text-3xl font-headline font-semibold mt-10 mb-4 text-foreground'
        >
          {item.content}
        </h3>
      )
    case 'paragraph':
      return (
        <p
          key={`${projectTitle}-story-${index}`}
          className='text-lg text-muted-foreground mb-4 leading-relaxed font-sans'
        >
          {item.content}
        </p>
      )
    case 'image':
      return (
        <div key={`${projectTitle}-story-${index}`} className='my-8'>
          <Image
            src={item.src}
            alt={item.alt}
            width={800}
            height={450}
            className='rounded-lg shadow-md object-cover w-full'
            data-ai-hint={item.hint || 'project detail'}
          />
          {item.alt && (
            <p className='text-sm text-center text-muted-foreground mt-2 font-sans'>
              {item.alt}
            </p>
          )}
        </div>
      )
    case 'list':
      return (
        <ul
          key={`${projectTitle}-story-${index}`}
          className='list-disc list-inside space-y-2 my-4 text-lg text-muted-foreground font-sans'
        >
          {item.items.map((li, i) => (
            <li key={`${projectTitle}-story-${index}-li-${i}`}>{li}</li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

export default async function Home () {
  const aboutMeIcons = [
    {
      icon: UsersRound,
      text: 'Developing effective tech-strategies and solutions for any business requirements, not limiting the business to just the tools in my arsenal.'
    },
    {
      icon: Briefcase,
      text: 'Guiding technical direction and fostering innovation in my team.'
    },
    {
      icon: Brain,
      text: 'Navigating challenges with analytical and creative thinking, as well as prompt disaster management.'
    },
    {
      icon: ShieldCheck,
      text: 'Delivering polished, functional, and scalable solutions.'
    },
    {
      icon: TrendingUpDown,
      text: 'Balancing vision & strategy with data-backed evidences to achieve optimal outcomes.'
    },
    {
      icon: MessageSquare,
      text: 'Ensuring alignment across teams and non-tech stakeholders.'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <SectionContainer
        id='top'
        className='min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center bg-[linear-gradient(135deg,var(--hero-gradient-start)_0%,var(--hero-gradient-end)_100%)]'
        animated={false}
        fullWidthBg
      >
        <div className='text-center max-w-4xl'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-extrabold mb-6'>
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              {heroData.name}
            </span>
          </h1>
          {heroData.title && (
            <p className='text-lg md:text-xl text-primary mb-4 font-sans max-w-2xl mx-auto'>
              {heroData.title}
            </p>
          )}
          <p className='text-lg md:text-xl text-muted-foreground mb-8 font-sans max-w-3xl mx-auto'>
            {heroData.tagline}
          </p>
          <p className='text-lg md:text-lg  mb-4 font-sans max-w-3xl mx-auto'>
            Great things are created when empathy, strategy, and artistry come together.
          </p>
          <div className='text-sm text-muted-foreground space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:space-x-6 mb-10'>
            <div className='flex items-center justify-center'>
              <MapPin className='h-4 w-4 mr-2 text-primary' />
              <span>{heroData.location}</span>
            </div>
            <span className='hidden sm:inline text-muted-foreground/50'>|</span>
            <a
              href={`mailto:${heroData.email}`}
              className='flex items-center justify-center hover:text-primary group'
            >
              <Mail className='h-4 w-4 mr-2 text-primary group-hover:text-accent transition-colors' />
              {heroData.email}
            </a>
          </div>
          <div className='flex justify-center space-x-3 mb-10'>
            {socialLinksFooter.map(link => (
              <Button
                key={link.name}
                variant='outline'
                size='icon'
                asChild
                className='rounded-full hover:bg-accent/20 hover:border-accent border-primary/30 text-primary hover:text-accent'
              >
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={link.name}
                >
                  <link.icon className='h-5 w-5' />
                </a>
              </Button>
            ))}
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
            <Button
              asChild
              size='lg'
              className='bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto'
            >
              <Link href='/#contact'>Let's Collaborate</Link>
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='group border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto'
              asChild
            >
              <a href='/path-to-resume.pdf' download>
                View Resume{' '}
                <Download className='ml-2 h-5 w-5 group-hover:animate-bounce' />
              </a>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* About Me Section - Detailed */}
      <SectionContainer
        id='about'
        bgColorClass='bg-section-about'
        fullWidthBg
        animated
      >
        <SectionHeader
          title='About Priyanshu'
          subtitle='Journey & Philosophy'
          alignment='left'
        />
        <div className='grid lg:grid-cols-3 gap-12 items-start'>
          <div className='lg:col-span-1 flex flex-col items-center'>
            <Image
              src={picture.src}
              alt='Priyanshu Ranjan'
              width={400}
              height={500}
              className='rounded-xl shadow-2xl object-cover aspect-[4/5] mb-6'
              data-ai-hint='professional tech portrait'
            />
            <h3 className='text-2xl font-headline text-foreground mb-2'>
              {heroData.name}
            </h3>
            <p className='text-muted-foreground text-center mb-4 font-sans'>
              Physics. Software. Music.
            </p>
            <Button
              variant='outline'
              size='lg'
              className='mb-4 w-full max-w-xs font-sans border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              asChild
            >
              <a href='/path-to-resume.pdf'>
                View Resume <Download className='ml-2 h-5 w-5' />
              </a>
            </Button>
            <div className='flex space-x-4'>
              {socialLinksFooter.map(link => (
                <Button
                  key={link.name}
                  variant='outline'
                  size='icon'
                  asChild
                  className='rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary'
                >
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={link.name}
                  >
                    <link.icon className='h-5 w-5' />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className='lg:col-span-2 prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:font-sans prose-li:font-sans prose-p:text-muted-foreground prose-headings:text-foreground'>
            <p className='text-xl leading-relaxed font-sans text-foreground'>
              {heroData.summary ||
                'As a dedicated and forward-thinking design expert, I am passionate about crafting digital experiences that are not only visually captivating but also deeply intuitive and user-centric. My journey in design has been fueled by a relentless curiosity and a desire to solve complex problems through creative and empathetic solutions.'}
            </p>
            <h3 className='font-headline text-2xl mt-8 mb-4 !text-primary'>
              My Approach
            </h3>
            <ul className='list-none space-y-3 font-sans !pl-0'>
              {aboutMeIcons.map(item => (
                <li key={item.text} className='flex items-start'>
                  <item.icon className='h-5 w-5 mr-3 mt-1 text-accent shrink-0' />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            
            <h3 className='font-headline text-2xl mt-8 mb-4'>
              Beyond the code
            </h3>
            <p>
              My goal is to leverage my skills and passion to contribute to
              projects that make a positive impact, drive innovation, and
              ultimately, make technology more human.
            </p>
            <div className='mt-8'>
              <Button asChild size='lg' className='font-sans'>
                <Link href='/#contact'>Let's Collaborate</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Skills Section - Detailed */}
      <SectionContainer
        id='skills'
        bgColorClass='bg-section-skills'
        fullWidthBg
        animated
      >
        <SectionHeader
          title='Skills &amp; Expertise'
          subtitle='Core Competencies & Proficiency'
          alignment='left'
        />
        <p className='text-left text-lg text-muted-foreground mb-12 max-w-3xl font-sans'>
          With a diverse range of skills spanning technology leadership, following are some of my core
          competencies that I have leveraged to bring ideas to life, so far.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.name + index}
              category={category}
              animationDelay={index * 10}
            />
          ))}
        </div>
      </SectionContainer>
      
      {/* Work Experience Section - Detailed */}
      <SectionContainer
        id='experience'
        bgColorClass='bg-section-experience'
        fullWidthBg
        animated={false}
      >
        <SectionHeader
          title='Experience'
          subtitle='Professional Journey'
          alignment='left'
        />
        <div className='space-y-12 max-w-4xl mx-auto'>
          {workExperienceData.map((exp, index) => (
            <ExperienceItem
              key={exp.company + exp.role + index}
              experience={exp}
              animationDelay={index * 10}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Projects Section - Detailed */}
      <SectionContainer
        id='projects'
        bgColorClass='bg-section-experience'
        fullWidthBg
        animated={false}
      >
        <SectionHeader
          title='Projects'
          subtitle='Selected Works & Case Studies'
          alignment='left'
        />
        <div className='space-y-20'>
          {projects.map((project, index) => (
            <article
              key={project.id + index}
              className='p-6 md:p-8 border border-border/50 rounded-lg bg-card hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1'
            >
              <header className='mb-8'>
                <h3 className='text-3xl md:text-4xl font-headline font-bold text-primary mb-3 group-hover:text-accent transition-colors'>
                  {project.title}
                </h3>
                <p className='text-lg text-muted-foreground font-sans mb-4'>
                  {project.shortDescription}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map(tech => (
                    <Badge
                      key={tech}
                      variant='secondary'
                      className='bg-accent/30 text-accent-foreground/80 text-sm px-3 py-1 font-sans'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className='flex gap-4'>
                  {project.liveLink && (
                    <Button asChild className='font-sans' size='sm'>
                      <a
                        href={project.liveLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Live Demo <ExternalLink className='ml-2 h-4 w-4' />
                      </a>
                    </Button>
                  )}
                  {project.repoLink && (
                    <Button
                      variant='outline'
                      asChild
                      className='font-sans border-primary/50 text-primary hover:bg-primary/10'
                      size='sm'
                    >
                      <a
                        href={project.repoLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View Code <GithubIcon className='ml-2 h-4 w-4' />
                      </a>
                    </Button>
                  )}
                </div>
              </header>
              {project.imageUrls.map((imageUrl: string, i: number) => (
                <Image
                key={i}
                  src={imageUrl}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className='rounded-xl shadow-lg object-cover w-full aspect-video mb-8'
                  data-ai-hint={project.imageHints?.[i] || project.title}
                  priority={index < 2}
                />
              ))}
              <div className='prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:font-sans prose-li:font-sans prose-p:text-muted-foreground prose-headings:text-foreground'>
                <h4 className='text-2xl md:text-3xl font-headline font-semibold text-foreground mb-4 border-b border-border/50 pb-2'>
                  Context
                </h4>
                {project.description && (
                  <p className='text-lg text-muted-foreground mb-6 leading-relaxed font-sans'>
                    {project.description}
                  </p>
                )}
                {project.storyline.map((item, storyIndex) =>
                  renderStorylineItem(item, storyIndex, project.title)
                )}
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>


      {/* Education Section */}
      <SectionContainer
        id='education'
        bgColorClass='bg-section-education'
        fullWidthBg
        animated
      >
        <SectionHeader
          title='Education'
          subtitle='Academic Background'
          alignment='left'
        />
        <div className='space-y-12'>
          {educationData.map((edu, index) => (
            <div
              key={`${edu.institution}-${edu.degree}-${index}`}
              className='pb-8 border-b border-border/50 last:border-b-0 last:pb-0'
            >
              <div className='flex items-start sm:items-center mb-1'>
                <GraduationCap className='h-7 w-7 mr-3 text-primary shrink-0 mt-1 sm:mt-0' />
                <h3 className='text-2xl lg:text-3xl font-headline text-foreground'>
                  {edu.degree}
                </h3>
              </div>
              <div className='pl-10'>
                <p className='text-lg font-semibold text-primary/90'>
                  {edu.institution} {edu.campus && `(${edu.campus})`}
                </p>
                <p className='text-sm text-muted-foreground mb-3 font-sans'>
                  {edu.period}
                </p>
                {edu.details &&
                  edu.details.map((detail, i) => (
                    <div
                      key={`${edu.institution}-detail-${i}`}
                      className='text-base text-muted-foreground leading-relaxed font-sans mt-2 space-y-1'
                    >
                      {detail.specialization && (
                        <p>
                          <strong className='font-medium text-foreground/80'>
                            Specialization:
                          </strong>{' '}
                          {detail.specialization}
                        </p>
                      )}
                      {detail.projects && (
                        <p className='mt-1'>
                          <strong className='font-medium text-foreground/80'>
                            Key Projects/Focus:
                          </strong>{' '}
                          {detail.projects}{' '}
                          {detail.projectLink && detail.projectLinkText && (
                            <Button
                              variant='link'
                              asChild
                              className='p-0 h-auto text-sm text-accent hover:text-accent/80'
                            >
                              <Link
                                href={detail.projectLink}
                                className='inline-flex items-center group'
                              >
                                {detail.projectLinkText}
                                <ExternalLink className='ml-1.5 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors' />
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
      <SectionContainer
        id='certifications'
        bgColorClass='bg-section-skills'
        fullWidthBg
        animated
      >
        <SectionHeader
          title='Certifications'
          subtitle='Professional Accreditations'
          alignment='left'
        />
        <div className='grid md:grid-cols-2 gap-8'>
          {certificationsData.map((cert, index) => {
            const CertContent = (
              <div className='flex items-start gap-4 group p-4 rounded-lg hover:bg-card transition-colors h-full'>
                {cert.imageUrl && (
                  <Image
                    src={cert.imageUrl}
                    alt={cert.name}
                    width={80}
                    height={50}
                    className='rounded-sm object-contain mt-1 transition-transform group-hover:scale-105'
                    data-ai-hint={cert.imageHint || 'certification logo badge'}
                  />
                )}
                <div className='flex-1'>
                  <h3
                    className={`text-xl font-headline mb-1 ${
                      cert.credentialUrl && cert.credentialUrl !== '#'
                        ? 'text-primary group-hover:text-accent'
                        : 'text-foreground'
                    }`}
                  >
                    {cert.name}
                    {cert.credentialUrl && cert.credentialUrl !== '#' && (
                      <ExternalLink className='inline-block ml-2 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors' />
                    )}
                  </h3>
                  {cert.issuingOrganization && (
                    <p className='text-sm text-muted-foreground font-sans'>
                      {cert.issuingOrganization} {cert.date && `• ${cert.date}`}
                    </p>
                  )}
                </div>
              </div>
            )

            return (
              <div
                key={`${cert.name}-${index}`}
                className='border border-border/30 rounded-lg bg-muted/20'
              >
                {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                  <a
                    href={cert.credentialUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block'
                  >
                    {CertContent}
                  </a>
                ) : (
                  CertContent
                )}
              </div>
            )
          })}
        </div>
      </SectionContainer>

      {/* Honors & Awards Section */}
      <SectionContainer
        id='honors'
        bgColorClass='bg-section-education'
        fullWidthBg
        animated
      >
        <SectionHeader
          title='Honors & Awards'
          subtitle='Recognitions & Achievements'
          alignment='left'
        />
        <div className='space-y-8'>
          {honorsAwardsData.map((honor, index) => (
            <div
              key={`${honor.title}-${index}`}
              className='pb-6 border-b border-border/50 last:border-b-0 last:pb-0'
            >
              <div className='flex items-center mb-1'>
                <Trophy className='h-6 w-6 mr-3 text-primary shrink-0' />
                <h3 className='text-xl lg:text-2xl font-headline text-foreground'>
                  {honor.title}
                </h3>
              </div>
              {honor.associatedWith && (
                <p className='text-md text-primary/90 ml-9'>
                  {honor.associatedWith} {honor.date && `(${honor.date})`}
                </p>
              )}
              {honor.description && (
                <p className='text-base text-muted-foreground leading-relaxed font-sans mt-1 ml-9'>
                  {honor.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer
        id='contact'
        bgColorClass='bg-section-contact'
        fullWidthBg
        animated
      >
        <SectionHeader
          title='Contact Me'
          subtitle="Let's Connect"
          alignment='left'
        />
        <div className='grid md:grid-cols-2 gap-10 lg:gap-16 items-start'>
          <div className='space-y-8'>
            <p className='text-lg text-muted-foreground font-sans leading-relaxed'>
              I'm always excited to discuss new projects, creative ideas, or
              opportunities to collaborate. Whether you have a question or just
              want to say hello, feel free to reach out.
            </p>
            <div className='space-y-4 font-sans'>
              <div className='flex items-center'>
                <MapPin className='h-6 w-6 text-primary mr-3 shrink-0' />
                <span className='text-muted-foreground'>
                  {heroData.location}
                </span>
              </div>
              <div className='flex items-center'>
                <Mail className='h-6 w-6 text-primary mr-3 shrink-0' />
                <a
                  href={`mailto:${heroData.email}`}
                  className='text-muted-foreground hover:text-primary break-all'
                >
                  {heroData.email}
                </a>
              </div>
              <div className='flex items-center'>
                <Phone className='h-6 w-6 text-primary mr-3 shrink-0' />
                <span className='text-muted-foreground'>
                  (Available upon request)
                </span>
              </div>
            </div>
            <div className='flex space-x-3 pt-2'>
              {socialLinksFooter.map(link => (
                <Button
                  key={link.name}
                  variant='outline'
                  size='icon'
                  asChild
                  className='rounded-full hover:bg-accent/20 hover:border-accent border-primary/30 text-primary hover:text-accent group'
                >
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={link.name}
                  >
                    <link.icon className='h-5 w-5 group-hover:text-accent transition-colors' />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </SectionContainer>
    </>
  )
}
