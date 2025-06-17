import Link from 'next/link';
import {
  heroData,
  workExperienceData,
  projectData,
  skillsData,
  educationData,
} from '@/lib/data';
import { ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div id="top" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 selection:bg-primary/30 selection:text-primary-foreground">
      {/* Hero Section */}
      <section id="hero" className="mb-16 text-left"> {/* Changed to text-left like reference */}
        <h1 className="text-4xl sm:text-5xl font-headline mb-3 text-foreground">
          {heroData.name}
        </h1>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {heroData.tagline}
        </p>
        <div className="text-sm text-muted-foreground space-y-1 sm:space-y-0 sm:flex sm:space-x-4">
          <span>{heroData.location}</span>
          <span className="hidden sm:inline">|</span>
          <a href={`mailto:${heroData.email}`} className="hover:text-primary-foreground block sm:inline">
            {heroData.email}
          </a>
        </div>
        <div className="mt-3 flex space-x-4 text-sm">
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
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-headline mb-6 border-b border-border pb-2 text-foreground">
          Work Experience
        </h2>
        <div className="space-y-8">
          {workExperienceData.map((exp, index) => (
            <div key={index}>
              <h3 className="text-xl font-headline text-foreground">
                {exp.role}{' '}
                <span className="text-primary-foreground font-normal">
                  @ {exp.companyLink ? (
                    <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-primary-foreground">
                      {exp.company}
                      <ExternalLink className="ml-1 h-3 w-3 text-muted-foreground" />
                    </a>
                  ) : exp.company}
                </span>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-base text-muted-foreground leading-relaxed">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-headline mb-6 border-b border-border pb-2 text-foreground">
          Projects
        </h2>
        <div className="space-y-6">
          {projectData.map((proj, index) => (
            <div key={index}>
              <h3 className="text-xl font-headline text-foreground mb-1">
                {proj.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {proj.description}{' '}
                {proj.link && proj.linkText && (
                  <a href={proj.link} target={proj.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="inline-flex items-center hover:text-primary-foreground">
                    {proj.linkText}
                    {proj.link.startsWith('http') && <ExternalLink className="ml-1 h-3 w-3 text-muted-foreground" />}
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-headline mb-6 border-b border-border pb-2 text-foreground">
          Skills
        </h2>
        <div className="space-y-6">
          {skillsData.map((area, index) => (
            <div key={index}>
              <h3 className="text-lg font-headline text-foreground mb-1">
                {area.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {area.skills}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-headline mb-6 border-b border-border pb-2 text-foreground">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index}>
              <h3 className="text-xl font-headline text-foreground">
                {edu.degree}
              </h3>
              <p className="text-base text-muted-foreground">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
              {edu.details && edu.details.map((detail, i) => (
                <div key={i} className="text-base text-muted-foreground leading-relaxed">
                  {detail.projects && (
                    <p>
                      <strong>Projects:</strong> {detail.projects}{' '}
                      {detail.projectLink && detail.projectLinkText && (
                        <a href={detail.projectLink} target={detail.projectLink.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="inline-flex items-center hover:text-primary-foreground">
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
      </section>

      {/* Contact info is in the hero, matching the reference style */}
      {/* The `ContactForm` component is not used here to align with kinseygross.com style */}
    </div>
  );
}
