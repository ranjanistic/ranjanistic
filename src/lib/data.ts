
import type { LucideIcon } from 'lucide-react';
import {
  Linkedin, Github, Gitlab, Palette as PaletteIconLucide, Code as CodeIcon, Settings, Users, Briefcase, BookOpen, Wand2, Award, Star, Languages as LanguagesIcon, Home, BriefcaseBusiness, UsersRound, Lightbulb, ShieldCheck, MessageSquare, Download, ExternalLink, Mail, MapPin, Phone, CheckCircle, GitFork, SquareTerminal, Brain, Mic, LifeBuoy, GraduationCap, Trophy 
} from 'lucide-react';
import type {
  WorkExperienceEntry, NavLink, HeroData, ProjectEntry, SkillArea, EducationEntry, SocialLinkInfo, Project, SkillCategory, Skill, Certification, HonorAward 
} from '@/lib/types';

export const heroData: HeroData = {
  name: 'Priyanshu Ranjan',
  title: 'Technology Leadership, Software Development | Physics Major',
  tagline: 'Physics, software, music. My ideal kind of role would be a combination of these three.',
  summary: 'With 5 years of dedicated industry experience, I thrive on the full product development lifecycle, from conceptualization to deployment. My expertise spans technology leadership, effective communication, intuitive design, strategic problem navigation, and engaging public speaking.',
  location: 'Noida, UP (India)',
  email: 'priyanshuranjan88@gmail.com',
  gitlab: 'https://gitlab.com/ranjanistic',
  github: 'https://github.com/ranjanistic',
  linkedin: 'https://www.linkedin.com/in/ranjanistic',
};

export const navLinksData: NavLink[] = [
  { href: '/#top', label: (heroData.name ? heroData.name.split(' ')[0] : 'Priyanshu') + '.' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#honors', label: 'Honors' },
  { href: '/#contact', label: 'Contact' },
];

export const socialLinksFooter: SocialLinkInfo[] = [
  { name: 'Linkedin', url: heroData.linkedin || '#', icon: Linkedin },
  { name: 'Github', url: heroData.github || '#', icon: Github },
  { name: 'Gitlab', url: heroData.gitlab || '#', icon: Gitlab },
];

export const workExperienceData: WorkExperienceEntry[] = [
  {
    role: 'Sr. Developer',
    company: 'MedicalHive Solutions',
    companyLink: 'https://hilocmed.com',
    period: 'APRIL 2025 - Present',
    location: 'Noida, UP, India',
    description: [
      'Built and designed full stack web based interface from backend to frontend.',
      'Handled deployment, maintenance, and network security, involving AWS.',
    ],
    imageUrls: ['https://placehold.co/300x200.png', 'https://placehold.co/300x200.png'],
    imageHints: ['medical software ui', 'aws architecture diagram']
  },
  {
    role: 'Chief Technology Officer',
    company: 'Payr',
    companyLink: 'https://payr.org.in',
    period: 'May 2024 - Present',
    location: 'Meerut, Uttar Pradesh, India',
    description: [
      'Overseeing all technical aspects, from concept to delivery, leading the technology strategy and execution.',
      'Continued leadership from Co-Founder role, focusing on strategic technological advancements.'
    ],
    imageUrls: ['https://placehold.co/300x200.png', 'https://placehold.co/300x200.png', 'https://placehold.co/300x200.png'],
    imageHints: ['fintech dashboard', 'payment gateway flow', 'team collaboration']
  },
  {
    role: 'Co-Founder',
    company: 'Payr',
    companyLink: 'https://payr.org.in',
    period: 'May 2023 - May 2024 (1 year 1 month)',
    location: 'Noida, Uttar Pradesh, India',
    description: [
      'Managed B2B & B2C product life cycle, problem assessment, data management, and logic building.',
      'Led designing, team building, and management; rigorously brainstormed solutions.',
      'Successfully onboarded and managed relationships with 4+ B2B clients & 100+ B2C clients.',
    ],
    imageUrls: ['https://placehold.co/300x200.png', 'https://placehold.co/300x200.png'],
    imageHints: ['startup meeting', 'client onboarding process']
  },
  {
    role: 'Integrations Developer',
    company: 'Testlify',
    companyLink: 'https://testlify.com',
    period: 'February 2023 - February 2024 (1 year 1 month)',
    location: 'India',
    description: [
      'Extended the existing product by integrating multiple 3rd party HR tools like Greenhouse, JazzHR, SAP SuccessFactors with the Testlify platform.',
      'Developed custom logic for each integration using Loopback 4 (LB4) and TypeScript framework.',
    ],
    imageUrls: ['https://placehold.co/300x200.png', 'https://placehold.co/300x200.png'],
    imageHints: ['api integration diagram', 'typescript code snippet']
  },
  {
    role: 'Product Developer',
    company: 'Clan',
    period: 'May 2022 - November 2022 (7 months)',
    location: 'India',
    description: [
      'Led NodeJS based product development and managed AWS infrastructure, focusing on product revamp and scalability.',
      'Conducted data analysis, contributed to UI-UX design.',
      'Designed and implemented a scalable system with a queue-based fanout mechanism and event-driven architecture.',
    ],
    imageUrls: ['https://placehold.co/300x200.png', 'https://placehold.co/300x200.png'],
    imageHints: ['scalable system architecture', 'ui design sketch']
  },
  {
    role: 'NodeJS Consultant',
    company: 'Digital Crew',
    period: 'June 2022 - October 2022 (5 months)',
    location: 'India',
    description: [
      'Developed and managed realtime multiplayer gaming architecture.',
      'Implemented WebSockets-based logic for multiplayer games and high-level Blockchain features.',
    ],
    imageUrls: ['https://placehold.co/300x200.png'],
    imageHints: ['multiplayer game interface']
  },
  {
    role: 'Technology Team Lead',
    company: 'Knotters',
    period: 'August 2021 - December 2021 (5 months)',
    location: 'Noida',
    description: [
      'Led algorithms, design & platform development for an open platform for open source project collaboration.',
      'Managed deployment & maintenance of the Django-based full-stack application.',
    ],
    imageUrls: ['https://placehold.co/300x200.png', 'https://placehold.co/300x200.png'],
    imageHints: ['open source platform dashboard', 'django project structure']
  },
  {
    role: 'Co-Founder',
    company: 'Knotters',
    period: 'May 2021 - August 2021 (4 months)',
    location: 'Noida',
    description: [
      'Co-founded the platform, focusing on open source collaboration and competitions for systematic resume building.',
      'Knotters was recognized and sponsored by NASSCOM during this period.',
    ],
    imageUrls: ['https://placehold.co/300x200.png'],
    imageHints: ['nasscom recognition event']
  },
  {
    role: 'API Engineer',
    company: 'TheSocialComment',
    period: 'June 2021 - August 2021 (3 months)',
    location: 'India',
    description: [
      'Developed NodeJS APIs and microservices.',
      'Performed unit testing and database operations using MongoDB.',
    ],
    imageUrls: ['https://placehold.co/300x200.png'],
    imageHints: ['api endpoint structure']
  },
  {
    role: 'Virtual Labs Lead',
    company: 'Progressive Minds',
    period: 'March 2021 - April 2021 (2 months)',
    location: 'Mayur Vihar, Delhi, India',
    description: [
        'Led the initiative for virtual labs development within the company.'
    ],
    imageUrls: ['https://placehold.co/300x200.png'],
    imageHints: ['virtual lab interface']
  },
  {
    role: 'Javascript Developer',
    company: 'Progressive Minds',
    period: 'January 2021 - March 2021 (3 months)',
    location: 'India',
    description: [
      'Developed beginner-friendly web games & a Web IDE using browser-based JavaScript, HTML5 & Open Sourced Blockly®.',
      'Created a virtual web-based gaming engine, easing development processes for educational content.',
    ],
    imageUrls: ['https://placehold.co/300x200.png', 'https://placehold.co/300x200.png'],
    imageHints: ['blockly ide screenshot', 'javascript game preview']
  },
  {
    role: 'Web Developer',
    company: 'Edu2Live',
    period: 'August 2020 - September 2020 (2 months)',
    location: 'India',
    description: [
      'Developed a customer and product relationship management (CPRM) website for an ed-tech startup, focusing on e-commerce functionalities.',
    ],
    imageUrls: ['https://placehold.co/300x200.png'],
    imageHints: ['edtech crm dashboard']
  },
];

export const projectData: ProjectEntry[] = [
  {
    title: 'Stellar Evolution Modelling (MESA)',
    description: 'Analysis of pre-main sequence contraction and the role of mass distributions using MESA, focusing on HR diagrams.',
    link: '/projects/stellar-evolution',
    linkText: 'View Concluding Report',
    imageUrl: 'https://placehold.co/400x225.png',
    imageHint: 'astronomy simulation stars'
  },
  {
    title: 'Knotters - Open Source Community Portal',
    description: 'A platform for open source project collaboration and competitions, built from idea to production.',
    link: '/projects/knotters-portal', 
    linkText: 'View Project Details',
    imageUrl: 'https://placehold.co/400x225.png',
    imageHint: 'community collaboration code'
  },
  {
    title: 'CovidCare - Pandemic Help Portal',
    description: 'A web platform providing help resources during the Covid-19 pandemic.',
    link: '/projects/covidcare-portal',
    linkText: 'View Project Details',
    imageUrl: 'https://placehold.co/400x225.png',
    imageHint: 'health support web'
  },
  {
    title: 'JS Gaming Engine & Web IDE',
    description: 'A custom Javascript-based gaming engine and a Web IDE for creating high-level applications and games, part of an LMS.',
    link: '/projects/js-gaming-engine-ide',
    linkText: 'View Project Details',
    imageUrl: 'https://placehold.co/400x225.png',
    imageHint: 'javascript game development'
  },
  {
    title: 'Schemester - B2B Management',
    description: 'An online institution management system focused on the educational niche.',
    link: '/projects/schemester-b2b',
    linkText: 'View Project Details',
    imageUrl: 'https://placehold.co/400x225.png',
    imageHint: 'saas education management'
  },
  {
    title: 'Skivvy - Voice Controlled Android App',
    description: 'A native Android app for executing device-based functions through voice commands.',
    link: '/projects/skivvy-android',
    linkText: 'View Project Details',
    imageUrl: 'https://placehold.co/400x225.png',
    imageHint: 'android app voice'
  },
];

const genericStoryline = (title: string, type: string = "software project"): ProjectStorylineItem[] => [
  { type: 'heading', content: `${title} - Overview` },
  { type: 'paragraph', content: `This section provides a detailed look into the ${title} ${type}, covering its objectives, development process, and outcomes.` },
  { type: 'image', src: 'https://placehold.co/800x450.png', alt: `Conceptual image for ${title}`, hint: 'project concept abstract' },
  { type: 'heading', content: 'Key Features & Technologies Used' },
  { type: 'paragraph', content: 'A breakdown of the core functionalities and the technological backbone of the project.' },
  { type: 'list', items: ['Core Feature 1 implementation', 'Core Feature 2 development', 'Key Technology stack integration'] },
  { type: 'heading', content: 'Challenges & Learning Outcomes' },
  { type: 'paragraph', content: `Discussion of the primary challenges encountered during the ${title} project and the valuable lessons learned throughout its lifecycle.` },
];

export const projects: Project[] = [
  {
    id: 'stellar-evolution',
    slug: 'stellar-evolution',
    title: 'Stellar Evolution Modelling using MESA',
    shortDescription: 'Analysis of pre-main sequence contraction and stellar mass distributions using MESA.',
    description: 'Detailed study of pre-main sequence stellar contraction and the impact of mass distributions, guided by the Initial Mass Function, involving Hertzsprung-Russell diagrams. Project conducted using the MESA (Modules for Experiments in Stellar Astrophysics) software suite.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'nebula star formation',
    technologies: ['MESA', 'Python', 'Astrophysics', 'Data Analysis', 'Computational Physics'],
    liveLink: undefined, 
    repoLink: undefined,
    storyline: genericStoryline("Stellar Evolution Modelling", "research project"),
  },
  {
    id: 'knotters-portal',
    slug: 'knotters-portal',
    title: 'Knotters - Open Source Community Portal',
    shortDescription: 'Community platform for open source collaboration and resume-building competitions.',
    description: 'Knotters is an open platform designed to foster collaboration on open source projects and host competitions. It aims to help contributors build their resumes systematically. The project was developed full stack, from concept to production.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'collaboration network community',
    technologies: ['Django', 'Python', 'Full Stack', 'Web Development', 'Community Platform'],
    liveLink: 'https://knotters.org',
    repoLink: undefined,
    storyline: genericStoryline("Knotters Community Portal"),
  },
  {
    id: 'covidcare-portal',
    slug: 'covidcare-portal',
    title: 'CovidCare - Pandemic Help Portal',
    shortDescription: 'A platform connecting people with Covid-19 related help resources.',
    description: 'CovidCare was developed as a response to the Covid-19 pandemic, serving as a vital hub for individuals seeking help and resources. It connected users with necessary support systems and information.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'health support community',
    technologies: ['Web Development', 'Django', 'Python', 'Information Portal'],
    liveLink: 'https://covidcare.knotters.org',
    repoLink: undefined,
    storyline: genericStoryline("CovidCare Pandemic Portal"),
  },
  {
    id: 'js-gaming-engine-ide',
    slug: 'js-gaming-engine-ide',
    title: 'JavaScript Gaming Engine & Web IDE',
    shortDescription: 'Custom JS-based gaming engine and Web IDE for app/game creation within an LMS.',
    description: 'Developed as part of a Learning Management System, this project included a custom JavaScript-based gaming engine to facilitate easier web game development, and a Web IDE for building higher-level applications and games.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'code editor game development',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Game Development', 'IDE Development', 'LMS Integration'],
    liveLink: undefined,
    repoLink: undefined,
    storyline: genericStoryline("JavaScript Gaming Engine & Web IDE"),
  },
  {
    id: 'schemester-b2b',
    slug: 'schemester-b2b',
    title: 'Schemester - B2B Management',
    shortDescription: 'Online institution management system for the educational sector.',
    description: 'Schemester is a B2B online management system primarily designed for educational institutions, aiming to streamline administrative and academic processes.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'dashboard management system',
    technologies: ['Web Development', 'SaaS', 'B2B', 'Education Technology'],
    liveLink: undefined, 
    repoLink: undefined,
    storyline: genericStoryline("Schemester B2B Management System"),
  },
  {
    id: 'skivvy-android',
    slug: 'skivvy-android',
    title: 'Skivvy - Voice Controlled Android App',
    shortDescription: 'Native Android app for vocal execution of device functions.',
    description: 'Skivvy is an Android native application that allows users to control various device functions using voice commands, enhancing accessibility and ease of use.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'mobile app voice assistant',
    technologies: ['Android Native', 'Kotlin/Java', 'Voice Recognition', 'Mobile Development'],
    liveLink: undefined,
    repoLink: 'https://github.com/ranjanistic/skivvy',
    storyline: genericStoryline("Skivvy Android App"),
  },
  {
    id: 'schemester-android-app',
    slug: 'schemester-android-app',
    title: 'Schemester Android - Schedule Manager App',
    shortDescription: 'Native Android app for schedule management for students.',
    description: 'A small native Android project, Schemester Android was developed for schedule management specifically for my batchmates, helping organize academic timetables and events.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'mobile calendar schedule',
    technologies: ['Android Native', 'Kotlin/Java', 'Mobile Development', 'Utility App'],
    liveLink: 'https://schemester.app',
    repoLink: undefined,
    storyline: genericStoryline("Schemester Android Schedule App"),
  },
];

export const skillsData: SkillArea[] = [
  {
    title: 'Hard Skills & DevOps',
    skills: 'DevOps, System Design, Software Testing, Linux Sys Admin, Network Security, CI/CD, Microservices, Queue-based Systems, High Volume Web Apps (Django, Node.js, LB4, Beego, React), Web Protocols, Code Optimization, SEO, Database Ops (MongoDB, MySQL, PostgreSQL, Redis, CouchDB, Cassandra), VCS (Git, GitHub, GitLab, AWS CodeCommit).',
  },
  {
    title: 'Soft Skills & Design',
    skills: 'Team Leadership, Effective Communication, Public Speaking, Presentation, Problem Navigation, UI/UX Design Principles, Modular Programming, Quality Code, Documentation, Visual Appeal.',
  },
  {
    title: 'Programming Languages',
    skills: 'Javascript (TypeScript, ES6+), Python, Kotlin, Golang, C, C++, Java, Bash, Jupyter.',
  },
  {
    title: 'Tools & Technologies',
    skills: 'Amazon Web Services (AWS), Linux, Atlassian JIRA, VS Code, Chrome Devtools, Inkscape, Git, GPG, MS Office, Jupyter Notebook, WSL, Figma, DNS Management, Google/Zoho Workspace.',
  },
  {
    title: 'Frameworks & Libraries',
    skills: 'Node.js (Loopback, ExpressJS), ReactJS, Next.js, Django, Apache, Wordpress, Nginx, Gunicorn, Redis, PM2.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Core Expertise',
    iconName: 'ShieldCheck', // Ensure ShieldCheck is imported in component
    skills: [
        { name: 'Technology Leadership', level: 95 },
        { name: 'Amazon Web Services (AWS)', level: 90 },
        { name: 'Identity and Access Management (IAM)', level: 88 },
        { name: 'System Design & Architecture', level: 92 },
        { name: 'Product Development Lifecycle', level: 93 },
    ],
  },
  {
    name: 'Hard Skills & DevOps',
    iconName: 'SquareTerminal',
    skills: [
        { name: 'DevOps Practices & CI/CD', level: 88 },
        { name: 'Microservices Architecture', level: 85 },
        { name: 'Linux System Administration', level: 85 },
        { name: 'Network Security & Protocols', level: 82 },
        { name: 'Database Operations & Management', level: 80, detail: 'Mongo, MySQL, PSQL, Redis' },
        { name: 'Software Testing & QA', level: 78 },
        { name: 'Code Optimization & Performance', level: 85 },
        { name: 'VCS (Git, GitHub, GitLab)', level: 95 },
    ],
  },
  {
    name: 'Programming Languages',
    iconName: 'Code', 
    skills: [
        { name: 'JavaScript (ES6+ & TypeScript)', level: 95 },
        { name: 'Python', level: 92 },
        { name: 'Golang', level: 80 },
        { name: 'Kotlin', level: 78 },
        { name: 'Java', level: 75 },
        { name: 'C/C++', level: 70 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'Bash Scripting', level: 80 },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    iconName: 'Briefcase',
    skills: [
        { name: 'Node.js (Express, Loopback 4)', level: 92 },
        { name: 'ReactJS / Next.js', level: 90 },
        { name: 'Django', level: 88 },
        { name: 'Beego (Golang)', level: 75 },
        { name: 'Apache / Nginx', level: 80 },
        { name: 'Redis', level: 80 },
        { name: 'PM2 / Gunicorn', level: 80 },
    ],
  },
  {
    name: 'Tools & Technologies',
    iconName: 'Settings',
    skills: [
        { name: 'Figma', level: 85 },
        { name: 'VSCode / Visual Studio', level: 95 },
        { name: 'Atlassian JIRA / Confluence', level: 80 },
        { name: 'Chrome Devtools', level: 92 },
        { name: 'Inkscape', level: 70 },
        { name: 'Jupyter Notebooks', level: 80 },
        { name: 'WSL (Windows Subsystem for Linux)', level: 85 },
    ],
  },
  {
    name: 'Soft Skills & Design',
    iconName: 'Users', 
    skills: [
      { name: 'Team Leadership & Building', level: 92 },
      { name: 'Effective Communication', level: 95 },
      { name: 'Public Speaking & Presentation', level: 88 },
      { name: 'Strategic Problem Navigation', level: 90 },
      { name: 'UI/UX Design Principles', level: 85 },
      { name: 'Modular & Quality Programming', level: 90 },
      { name: 'Technical Documentation', level: 85 },
    ],
  },
   {
    name: 'AI & Emerging Tech',
    iconName: 'Wand2',
    skills: [
        { name: 'Genkit Fundamentals', level: 70 },
        { name: 'LLM Integration (Conceptual)', level: 65 },
        { name: 'Prompt Engineering Basics', level: 75 },
    ],
  },
  {
    name: 'Human Languages',
    iconName: 'Languages', 
    skills: [
        { name: 'English', level: 90, detail: 'Professional Working' },
        { name: 'Hindi', level: 100, detail: 'Native or Bilingual' },
    ],
  }
];

export const educationData: EducationEntry[] = [
  {
    degree: 'M.Sc. Physics',
    institution: 'Department of Physics & Astrophysics, University of Delhi',
    campus: 'Ramjas College, North Campus',
    period: 'September 2023 - May 2025',
    details: [
      { specialization: 'General Theory of Relativity, Cosmology, Astrophysics, Complex systems & Networks, Nonlinear Dynamics, Computational Physics' },
      { projects: 'Stellar evolution & modelling using MESA, under the guidance of Prof. T.R. Seshadri & Dr. Sachin Pandey.', projectLinkText: "View Concluding Presentation", projectLink: "/projects/stellar-evolution" },
    ],
  },
  {
    degree: 'B.Sc. (Honours) Physics',
    institution: 'University of Delhi',
    campus: 'Deshbandhu College, South Campus',
    period: '2018 - 2021',
    details: [
      { specialization: 'Physics, Mathematics' },
    ],
  },
  {
    degree: 'Senior Secondary Education (CBSE)',
    institution: 'Nehru International Public School, Noida',
    period: '2016 - 2018',
    details: [
      { specialization: 'Science, Mathematics, Computer Science' },
    ],
  },
  {
    degree: 'Primary & Secondary Education (CBSE)',
    institution: 'Maharishi Vidya Mandir, Noida',
    period: '2004 - 2016',
    details: [],
  },
];

export const certificationsData: Certification[] = [
  { 
    name: 'IBM Data Science Specialization', 
    issuingOrganization: 'IBM (Coursera)', 
    credentialUrl: 'https://www.coursera.org/professional-certificates/ibm-data-science', // Example URL
    imageUrl: 'https://placehold.co/100x60.png',
    imageHint: 'ibm data science badge'
  },
  { 
    name: 'Applied Data Science Specialization', 
    issuingOrganization: 'Coursera', 
    credentialUrl: 'https://www.coursera.org/specializations/applied-data-science', // Example URL
    imageUrl: 'https://placehold.co/100x60.png',
    imageHint: 'coursera data science badge'
  },
  { 
    name: 'Python for Data Science, AI & Development', 
    issuingOrganization: 'IBM (Coursera)', 
    credentialUrl: 'https://www.coursera.org/learn/python-for-data-science-ai-development', // Example URL
    imageUrl: 'https://placehold.co/100x60.png',
    imageHint: 'python ibm badge'
  },
  { 
    name: 'Eduthon 2020', 
    issuingOrganization: 'Competition based', 
    // credentialUrl: '#', // No URL if it's just a competition win without a specific cert page
    imageUrl: 'https://placehold.co/100x60.png',
    imageHint: 'eduthon hackathon logo'
  },
  { 
    name: 'Sr. Orange Belt', 
    issuingOrganization: 'Internal/Company specific', 
    // credentialUrl: '#',
    imageUrl: 'https://placehold.co/100x60.png',
    imageHint: 'company award graphic'
  },
];

export const honorsAwardsData: HonorAward[] = [
  { title: 'Student of the year' },
  { title: 'Best Orator' },
  { title: 'Academics and Versatility Recognition' },
  { title: 'Highest scorer in C++' },
];
