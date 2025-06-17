import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionContainer, SectionHeader } from '@/components/ui/section-container';
import { ArrowRight, Download, Mail, MapPin, Phone, Mailbox } from 'lucide-react';
import { projects, experiences, blogPosts, skillCategories, socialLinks } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { ExperienceItem } from '@/components/experience-item';
import { BlogPostPreview } from '@/components/blog-post-preview';
import { SkillCategory } from '@/components/skill-category';
import { ContactForm } from '@/components/contact-form';


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
              <Link href="/#projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/#contact">
                Get In Touch <Mail className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* About Section */}
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
            <h3 className="text-2xl font-headline text-foreground mb-2">Priyanshu Ranjan</h3>
            <p className="text-muted-foreground text-center mb-4">Forward-Thinking Design Expert</p>
            <Button variant="default" size="lg" className="mb-4 w-full max-w-xs" asChild>
              <a href="/path-to-resume.pdf" download>
                Download Resume <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <div className="flex space-x-4">
              {socialLinks.filter(link => ['LinkedIn', 'GitHub', 'Dribbble'].includes(link.name)).map(link => (
                <Button key={link.name} variant="outline" size="icon" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 prose prose-longform dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed">
              As a dedicated and forward-thinking design expert, I am passionate about crafting digital experiences that are not only visually captivating but also deeply intuitive and user-centric. My journey in design has been fueled by a relentless curiosity and a desire to solve complex problems through creative and empathetic solutions.
            </p>
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
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/#contact">Let's Collaborate</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Projects Section */}
      <SectionContainer id="projects" className="bg-muted/30" animated>
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

      {/* Skills Section */}
      <SectionContainer id="skills" animated>
        <SectionHeader title="My Skills & Expertise" subtitle="Technical Proficiency" />
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-serif">
          I possess a diverse range of skills spanning design, development, and project management. Here's a breakdown of my core competencies and the tools I leverage to bring ideas to life.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.name} category={category} animationDelay={index * 100} />
          ))}
        </div>
      </SectionContainer>

      {/* Experience Section */}
      <SectionContainer id="experience" animated>
        <SectionHeader title="Work Experience" subtitle="Professional Journey" />
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-serif">
          My professional journey has been marked by impactful roles where I've contributed to significant projects and driven design excellence. Here's a look at my key experiences.
        </p>
        <div className="space-y-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} animationDelay={index * 150}/>
          ))}
        </div>
      </SectionContainer>

      {/* Blog Section */}
      <SectionContainer id="blog" animated>
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
            <p className="text-muted-foreground font-serif">New Delhi, India (Open to remote)</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
            <Mailbox className="h-10 w-10 text-primary mb-3" />
            <h3 className="text-xl font-headline text-foreground mb-1">Email</h3>
            <a href="mailto:hello@priyanshuranjan.dev" className="text-muted-foreground hover:text-primary font-serif break-all">hello@priyanshuranjan.dev</a>
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
