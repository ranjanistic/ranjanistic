
import type { LucideIcon } from 'lucide-react';
import { 
  Linkedin, Github, Gitlab, Palette, Code as CodeIcon, Settings, Users, MessageCircle, Briefcase, GraduationCap, LayoutDashboard, Wand2, BookOpen, Download, ExternalLink, Mail, MapPin, Phone, Lightbulb, CheckCircle
} from 'lucide-react';
import type { 
  WorkExperienceEntry, NavLink, HeroData, ProjectEntry, SkillArea, EducationEntry, SocialLinkInfo, Project, SkillCategory, Skill, EducationDetail
} from '@/lib/types';

export const heroData: HeroData = {
  name: 'Priyanshu Ranjan',
  tagline: 'Forward-Thinking Design Expert & Developer',
  location: 'Noida, UP (India)',
  email: 'priyanshuranjan88@gmail.com',
  gitlab: 'https://gitlab.com/ranjanistic',
  github: 'https://github.com/ranjanistic',
  linkedin: 'https://linkedin.com/in/ranjanistic',
};

export const navLinksData: NavLink[] = [
  { href: '/#top', label: (heroData.name ? heroData.name.split(' ')[0] : 'Priyanshu') + '.' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
  { href: '/#contact', label: 'Contact' },
];

export const socialLinksFooter: SocialLinkInfo[] = [
  { name: 'Linkedin', url: heroData.linkedin || '#', icon: Linkedin },
  { name: 'Github', url: heroData.github || '#', icon: Github },
  { name: 'Gitlab', url: heroData.gitlab || '#', icon: Gitlab },
];

export const workExperienceData: WorkExperienceEntry[] = [
  {
    role: 'Lead UX/UI Designer & Frontend Developer',
    company: 'Innovatech Solutions Inc.',
    companyLink: 'https://innovatech.example.com',
    period: 'Jan 2021 - Present',
    description: [
      'Led the design and development of a new flagship SaaS product, resulting in a 40% increase in user engagement.',
      'Managed a team of 3 designers and 2 frontend developers, fostering a collaborative and high-performing environment.',
      'Implemented a comprehensive design system, significantly improving consistency and development speed across all projects.',
      'Conducted extensive user research and usability testing to inform design decisions and iterate on product features.',
    ],
  },
  {
    role: 'Senior Product Designer',
    company: 'NextGen Apps Ltd.',
    companyLink: 'https://nextgenapps.example.com',
    period: 'Jun 2018 - Dec 2020',
    description: [
      'Designed and launched three major mobile applications, each acquiring over 100,000 downloads within the first year.',
      'Collaborated closely with product managers and engineers to translate complex requirements into intuitive user experiences.',
      'Pioneered the adoption of new design tools and methodologies, enhancing team productivity by 25%.',
    ],
  },
  {
    role: 'UX Designer',
    company: 'Creative Designs Co.',
    period: 'Jul 2016 - May 2018',
    description: [
      'Worked on various client projects, delivering user-centered design solutions for web and mobile platforms.',
      'Created wireframes, prototypes, and high-fidelity mockups for diverse industries.',
      'Contributed to user research activities and helped synthesize findings into actionable design insights.',
    ],
  },
];

export const projectData: ProjectEntry[] = [
  {
    title: 'Portfolio Website v2.0',
    description: 'The very website you are browsing, built with Next.js, Tailwind CSS, and ShadCN UI components for a modern, responsive, and performant experience.',
    link: '/projects/portfolio-v2',
    linkText: 'View Project Storyline',
  },
  {
    title: 'AI-Powered Content Summarizer',
    description: 'A web application leveraging generative AI to provide concise summaries of long articles and documents, enhancing productivity for researchers and students.',
    link: '/projects/ai-summarizer',
    linkText: 'View Project Storyline',
  },
  {
    title: 'E-commerce Platform Redesign',
    description: 'Led the complete UI/UX overhaul for an online retail platform, focusing on improving conversion rates and user satisfaction through a streamlined checkout process and enhanced product discovery.',
    link: '/projects/ecommerce-redesign',
    linkText: 'View Project Storyline',
  },
];

export const projects: Project[] = [
  {
    id: 'portfolio-v2',
    slug: 'portfolio-v2',
    title: 'Personal Portfolio Website v2.0',
    shortDescription: 'My personal portfolio showcasing projects, skills, and experience, built with Next.js and Tailwind CSS.',
    description: 'This project is a comprehensive redesign and rebuild of my personal portfolio website. The primary goals were to create a modern, visually appealing, and highly performant platform to showcase my work, skills, and professional journey. It leverages the latest web technologies to ensure a seamless user experience across all devices.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'modern website design',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Vercel'],
    liveLink: '#top',
    repoLink: 'https://github.com/ranjanistic/portfolio-nextjs',
    storyline: [
      { type: 'heading', content: 'The Challenge: A Modern Showcase' },
      { type: 'paragraph', content: 'My previous portfolio needed a refresh to better reflect my current skills and design philosophy. I wanted a site that was not only informative but also a demonstration of modern web development practices.' },
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'Initial sketches and wireframes', hint: 'design sketch interface' },
      { type: 'heading', content: 'Solution: Leveraging Next.js & Tailwind' },
      { type: 'paragraph', content: 'I chose Next.js for its server-side rendering capabilities, performance optimizations, and excellent developer experience. Tailwind CSS allowed for rapid UI development with a utility-first approach, and ShadCN UI provided a set of beautifully designed, accessible components.' },
      { type: 'list', items: ['SSR and SSG for optimal performance.', 'Responsive design for all screen sizes.', 'Accessible components from ShadCN UI.', 'Clean and maintainable codebase with TypeScript.'] },
      { type: 'heading', content: 'Outcome & Future Enhancements' },
      { type: 'paragraph', content: 'The result is a fast, modern, and easily updatable portfolio. Future plans include adding more interactive elements and case studies.' },
    ],
  },
  {
    id: 'ai-summarizer',
    slug: 'ai-summarizer',
    title: 'AI-Powered Content Summarizer',
    shortDescription: 'A web app using generative AI to summarize long texts and documents quickly.',
    description: 'This application was developed to address the need for quick information digestion from lengthy content. It integrates with a generative AI model to process input text or document uploads and returns a concise, coherent summary. The focus was on creating a simple, intuitive interface that makes advanced AI accessible.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'AI interface abstract',
    technologies: ['Python (Flask/Django)', 'Genkit/LLM API', 'React', 'Next.js (for frontend)', 'Docker'],
    liveLink: 'https://ai-summarizer.example.com',
    repoLink: 'https://github.com/ranjanistic/ai-summarizer',
    storyline: [
      { type: 'heading', content: 'Problem: Information Overload' },
      { type: 'paragraph', content: 'Professionals and students often face large volumes of text. This tool aims to extract key insights efficiently.' },
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'User flow for summarization', hint: 'flowchart diagram' },
      { type: 'heading', content: 'Tech Stack & Implementation' },
      { type: 'paragraph', content: 'The backend, built with Python, handles communication with the AI model. The frontend, developed using Next.js and React, provides a user-friendly interface for text input and summary display.' },
      { type: 'list', items: ['Integration with a leading LLM API.', 'Support for various input formats (text, PDF upload).', 'Real-time summary generation.', 'Secure and scalable backend architecture.'] },
    ],
  },
  {
    id: 'ecommerce-redesign',
    slug: 'ecommerce-redesign',
    title: 'E-commerce Platform Redesign',
    shortDescription: 'Complete UI/UX overhaul for an online retail platform to boost conversions.',
    description: 'This project involved a thorough redesign of an existing e-commerce website. The primary objectives were to enhance the user experience, streamline the purchasing funnel, and improve key metrics such as conversion rate and average order value. A data-driven approach was adopted, incorporating user feedback and analytics throughout the design process.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'ecommerce website shopping',
    technologies: ['Figma', 'Adobe XD', 'React', 'Redux', 'Shopify API', 'GraphQL'],
    liveLink: 'https://revamped-ecommerce.example.com',
    storyline: [
      { type: 'heading', content: 'Initial Audit & User Research' },
      { type: 'paragraph', content: 'The project began with an extensive audit of the existing platform and in-depth user research to identify pain points and opportunities for improvement.' },
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'Customer journey map', hint: 'user journey map' },
      { type: 'heading', content: 'Design & Prototyping' },
      { type: 'paragraph', content: 'New user flows, wireframes, and high-fidelity prototypes were created using Figma. Iterative testing with users helped refine the designs.' },
      { type: 'list', items: ['Mobile-first design approach.', 'Improved product filtering and search.', 'Simplified multi-step checkout process.', 'Enhanced visual design and branding.'] },
      { type: 'paragraph', content: 'The redesigned platform led to a 20% increase in conversion rates and a 15% rise in average order value within three months of launch.' },
    ],
  },
];

export const skillsData: SkillArea[] = [
  {
    title: 'Hard Skills',
    skills: 'UI/UX Design (Figma, Adobe XD), Frontend Development (React, Next.js, Vue.js, HTML, CSS, JavaScript, TypeScript), Backend Development (Node.js, Python), Design Systems, Prototyping, User Research, Usability Testing, Agile Methodologies, Version Control (Git).',
  },
  {
    title: 'Soft Skills',
    skills: 'Leadership, Communication, Problem-Solving, Empathy, Collaboration, Creativity, Adaptability, Time Management, Public Speaking, Mentorship.',
  },
  {
    title: 'Languages',
    skills: 'English (Fluent), Hindi (Native).',
  },
  {
    title: 'Tools & Technologies',
    skills: 'Figma, Adobe Creative Suite, VS Code, Jira, Confluence, GitHub, GitLab, Postman, Genkit, Google Cloud Platform, Vercel, Netlify.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Design',
    iconName: 'Palette',
    skills: [
      { name: 'UI Design', level: 95 },
      { name: 'UX Design', level: 90 },
      { name: 'Prototyping', level: 85 },
      { name: 'User Research', level: 80 },
      { name: 'Design Systems', level: 88 },
    ],
  },
  {
    name: 'Frontend Development',
    iconName: 'Code',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'JavaScript / TypeScript', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    name: 'Backend & General Tech',
    iconName: 'Settings',
    skills: [
      { name: 'Node.js / Express', level: 70 },
      { name: 'Python (Flask/Django)', level: 65 },
      { name: 'Git & Version Control', level: 90 },
      { name: 'APIs (REST & GraphQL)', level: 80 },
      { name: 'Databases (SQL/NoSQL)', level: 60 },
    ],
  },
  {
    name: 'Professional & Soft Skills',
    iconName: 'Users',
    skills: [
      { name: 'Leadership & Mentorship', level: 85 },
      { name: 'Communication', level: 95 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Agile Methodologies', level: 88 },
      { name: 'Project Management', level: 80 },
    ],
  },
  {
    name: 'AI & Emerging Tech',
    iconName: 'Wand2',
    skills: [
        { name: 'Genkit Fundamentals', level: 70 },
        { name: 'LLM Integration', level: 65 },
        { name: 'Prompt Engineering', level: 75 },
    ],
  },
  {
      name: 'Content & Communication',
      iconName: 'BookOpen',
      skills: [
          { name: 'Technical Writing', level: 80 },
          { name: 'Public Speaking', level: 70 },
          { name: 'Blogging/Content Creation', level: 60 },
      ],
  }
];

export const educationData: EducationEntry[] = [
  {
    degree: 'Master of Design (M.Des.), Interaction Design',
    institution: 'National Institute of Design (NID), India',
    period: '2014 - 2016',
    details: [
      { specialization: 'Human-Computer Interaction, User Experience Design' },
      { projects: 'Thesis on "Designing Intuitive Interfaces for Complex Systems". Multiple industry-partnered projects focusing on healthcare and education technology.' },
    ],
  },
  {
    degree: 'Bachelor of Technology (B.Tech), Computer Science & Engineering',
    institution: 'Indian Institute of Technology (IIT), Delhi',
    period: '2010 - 2014',
    details: [
      { specialization: 'Software Development, Data Structures & Algorithms' },
      { projects: 'Final year project on "Machine Learning for Predictive Text Input". Active member of the coding club and web development team for college fests.' },
    ],
  },
];
