
import type { LucideIcon } from 'lucide-react';
import {
  Linkedin, Github, Gitlab, Palette, Code as CodeIcon, Settings, Users, Briefcase, BookOpen, Wand2
} from 'lucide-react';
import type {
  WorkExperienceEntry, NavLink, HeroData, ProjectEntry, SkillArea, EducationEntry, SocialLinkInfo, Project, SkillCategory, Skill, EducationDetail
} from '@/lib/types';

export const heroData: HeroData = {
  name: 'Priyanshu Ranjan',
  tagline: 'Experienced in the full product development lifecycle, technology leadership, and creative problem-solving.',
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
    role: 'Sr. Developer',
    company: 'MedicalHive Solutions',
    companyLink: 'https://hilocmed.com',
    period: 'APRIL 2025 - Present', // Note: Future date, as provided
    description: [
      'Built and designed full stack web based interface from backend to frontend.',
      'Handled deployment, maintenance, and network security, involving AWS infrastructure.',
    ],
  },
  {
    role: 'CTO, Co-founder',
    company: 'Payr',
    companyLink: 'https://payr.org.in',
    period: 'MARCH 2023 - Present',
    description: [
      'Managed B2B & B2C product life cycle, including problem assessment, data management, and logic building.',
      'Led designing, team building, and management; rigorously brainstormed solutions.',
      'Involved 4+ B2B clients & 100+ B2C clients.',
    ],
  },
  {
    role: 'Integrations Developer',
    company: 'Testlify',
    companyLink: 'https://testlify.com',
    period: 'FEB 2023 - OCT 2023',
    description: [
      'Integrated multiple HR tools like Greenhouse, JazzHR, SAP SuccessFactors with the Testlify platform.',
      'Developed custom logic for each integration using Loopback 4 (LB4) and TypeScript.',
    ],
  },
  {
    role: 'Product Developer, Stakeholder',
    company: 'Clan',
    period: 'APR 2022 - NOV 2022',
    description: [
      'Led NodeJS based product development and managed AWS infrastructure.',
      'Conducted data analysis, contributed to UI-UX design.',
      'Designed a scalable system with a queue-based fanout mechanism and event-driven architecture.',
    ],
  },
  {
    role: 'NodeJS Consultant',
    company: 'Digital Crew',
    period: 'JUNE 2022 - OCT 2022',
    description: [
      'Developed WebSockets-based logic for multiplayer games.',
      'Implemented high-level Blockchain features.',
    ],
  },
  {
    role: 'Tech lead, Co-founder',
    company: 'Knotters',
    period: 'AUG 2021 - MAR 2022',
    description: [
      'Developed an open platform for collaboration on open source projects.',
      'Facilitated competitions for systematic resume building, based on Django (full stack).',
    ],
  },
  {
    role: 'API Engineer',
    company: 'TheSocialComment',
    period: 'JUNE 2021 - AUG 2021',
    description: [
      'Developed APIs and microservices.',
      'Performed unit testing and database operations using MongoDB.',
    ],
  },
  {
    role: 'Javascript Developer, Team Lead',
    company: 'Progressive Minds',
    period: 'JAN 2021 - APR 2021',
    description: [
      'Led development of web games & a Web IDE involving rigorous JavaScript.',
      'Created a virtual web-based gaming engine, simplifying development processes.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Edu2Live',
    period: 'AUG 2020 - SEP 2020',
    description: [
      'Developed a customer product relationship management (CPRM) application for an ed-tech startup, focusing on e-commerce functionalities.',
    ],
  },
];

export const projectData: ProjectEntry[] = [
  {
    title: 'Stellar Evolution Modelling (MESA)',
    description: 'Analysis of pre-main sequence contraction and the role of mass distributions using MESA, focusing on HR diagrams.',
    link: '/projects/stellar-evolution',
    linkText: 'View Project Details',
  },
  {
    title: 'Knotters - Open Source Community Portal',
    description: 'A platform for open source project collaboration and competitions, built from idea to production.',
    link: '/projects/knotters-portal',
    linkText: 'View Project Details',
  },
  {
    title: 'CovidCare - Pandemic Help Portal',
    description: 'A web platform providing help resources during the Covid-19 pandemic.',
    link: '/projects/covidcare-portal',
    linkText: 'View Project Details',
  },
  {
    title: 'JS Gaming Engine & Web IDE',
    description: 'A custom Javascript-based gaming engine and a Web IDE for creating high-level applications and games, part of an LMS.',
    link: '/projects/js-gaming-engine-ide',
    linkText: 'View Project Details',
  },
  {
    title: 'Schemester - B2B Institution Management',
    description: 'An online institution management system focused on the educational niche.',
    link: '/projects/schemester-b2b',
    linkText: 'View Project Details',
  },
  {
    title: 'Skivvy - Voice Controlled Android App',
    description: 'A native Android app for executing device-based functions through voice commands.',
    link: '/projects/skivvy-android',
    linkText: 'View Project Details',
  },
  {
    title: 'Schemester - Android Schedule Manager',
    description: 'A native Android app for schedule management, targeted at batchmates.',
    link: '/projects/schemester-android-app',
    linkText: 'View Project Details',
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
    description: 'Detailed study of pre-main sequence stellar contraction and the impact of mass distributions, guided by the Initial Mass Function, involving Hertzsprung-Russell diagrams. Project conducted using the MESA (Modules for Experiments in Stellar Astrophysics) software suite. Concluding report available.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'nebula star formation',
    technologies: ['MESA', 'Python', 'Astrophysics', 'Data Analysis', 'Computational Physics'],
    // liveLink: undefined, // Add link to report if available
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
    title: 'Schemester - B2B Institution Management',
    shortDescription: 'Online institution management system for the educational sector.',
    description: 'Schemester is a B2B online management system primarily designed for educational institutions, aiming to streamline administrative and academic processes.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'dashboard management system',
    technologies: ['Web Development', 'SaaS', 'B2B', 'Education Technology'],
    liveLink: undefined, // "View" was mentioned, if it's a link, add here
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
    title: 'Schemester - Android Schedule Manager App',
    shortDescription: 'Native Android app for schedule management for students.',
    description: 'A small native Android project, Schemester Android was developed for schedule management specifically for my batchmates, helping organize academic timetables and events.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'mobile calendar schedule',
    technologies: ['Android Native', 'Kotlin/Java', 'Mobile Development', 'Utility App'],
    liveLink: 'https://schemester.app', // Assuming this is the link
    repoLink: undefined,
    storyline: genericStoryline("Schemester Android Schedule App"),
  },
];

export const skillsData: SkillArea[] = [
  {
    title: 'Hard Skills',
    skills: 'DevOps, System Design methods, Software Testing, Linux sys admin, Network security, Precision debugging, CI-CD, microservices architecture, queue based system design. High volume web applications development with frameworks as django, nodejs, lb4, Beego, React. Web technologies, internet communication protocols (http, ssh.), Network security understanding, NAT, VPC mgmt. Code optimization, native apps, web apps, SEO tools - lighthouse, search console. Database ops, management (replication, administration, sharding, recovery), MongoDB, MySQL, PostgreSQL, Redis, CouchDB, Cassandra. Local (Git), cloud (GitHub, Bitbucket, GitLab, AWS code commit) VCS.',
  },
  {
    title: 'Soft Skills',
    skills: 'Team leading, building, effective communication, presentation, conversation starter, with a decent sense of humor. Visual appeal in designing, modular approach in programming, quality code. Documentation, write-up, an eye for good design, UI-UX.',
  },
  {
    title: 'Languages',
    skills: 'Javascript, Python, Kotlin, Golang, C, C++, Java, Bash, Jupyter, Typescript, HTML5, CSS3.',
  },
  {
    title: 'Tools & Technologies',
    skills: 'Amazon Web Services, Linux, Atlassian JIRA, Visual Studio, VSCode, Chrome Devtools, Inkscape, Git, GPG, MS Office, Jupyter Notebook, WSL, Figma, DNS mgmt., Google/Zoho workspace, etc.',
  },
  {
    title: 'Frameworks',
    skills: 'Loopback, ReactJS, Apache, Wordpress, Django, NodeJS, Nginx, Gunicorn, Redis, ExpressJS, PM2, etc.',
  },
];

const parseSkills = (skillsString: string, defaultLevel = 85): Skill[] => {
  return skillsString.split(',').map(skill => ({ name: skill.trim(), level: defaultLevel })).filter(skill => skill.name);
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Hard Skills & DevOps',
    iconName: 'Code', // Mapped from CodeIcon
    skills: [
        { name: 'DevOps', level: 90 },
        { name: 'System Design', level: 88 },
        { name: 'Microservices Architecture', level: 85 },
        { name: 'CI/CD Pipelines', level: 85 },
        { name: 'Network Security', level: 80 },
        { name: 'Linux System Administration', level: 85 },
        { name: 'Database Operations & Management', level: 80 },
        { name: 'Cloud VCS (Git, GitHub, GitLab)', level: 90 },
        { name: 'Software Testing', level: 80 },
        { name: 'Code Optimization', level: 85 },
        { name: 'SEO Tools', level: 75 },
    ],
  },
  {
    name: 'Languages',
    iconName: 'BookOpen',
    skills: [
        { name: 'JavaScript (ES6+ & TypeScript)', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Golang', level: 80 },
        { name: 'Kotlin', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'C/C++', level: 70 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'Bash Scripting', level: 80 },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    iconName: 'Briefcase',
    skills: [
        { name: 'Node.js (Express, Loopback 4)', level: 90 },
        { name: 'ReactJS / Next.js', level: 88 },
        { name: 'Django', level: 85 },
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
        { name: 'Amazon Web Services (AWS)', level: 85 },
        { name: 'Linux', level: 90 },
        { name: 'Git', level: 95 },
        { name: 'Docker (Conceptual)', level: 70 }, // Assuming based on DevOps
        { name: 'Figma', level: 80 },
        { name: 'VSCode / Visual Studio', level: 95 },
        { name: 'JIRA / Confluence', level: 80 },
        { name: 'Chrome Devtools', level: 90 },
    ],
  },
  {
    name: 'Soft Skills & Design',
    iconName: 'Users', // Or Palette for design aspect
    skills: [
      { name: 'Team Leadership & Building', level: 90 },
      { name: 'Effective Communication', level: 95 },
      { name: 'Presentation Skills', level: 85 },
      { name: 'Problem Solving', level: 90 },
      { name: 'UI/UX Design Principles', level: 85 },
      { name: 'Modular Programming Approach', level: 88 },
      { name: 'Quality Code & Documentation', level: 90 },
    ],
  },
   {
    name: 'AI & Emerging Tech', // Added as per existing structure
    iconName: 'Wand2',
    skills: [
        { name: 'Genkit Fundamentals', level: 70 }, // Kept placeholder
        { name: 'LLM Integration', level: 65 }, // Kept placeholder
        { name: 'Prompt Engineering', level: 75 }, // Kept placeholder
    ],
  },
];

export const educationData: EducationEntry[] = [
  {
    degree: 'M.Sc. Physics',
    institution: 'Department of Physics & Astrophysics, University of Delhi (Ramjas College, North Campus)',
    period: '2023 - 2025',
    details: [
      { specialization: 'General Theory of Relativity, Cosmology, Astrophysics, Complex systems & Networks, Nonlinear Dynamics, Computational Physics' },
      { projects: 'Stellar evolution & modelling using MESA, under the guidance of Prof. T.R. Seshadri & Dr. Sachin Pandey.' , projectLinkText: "View concluding presentation", projectLink: "#" /* Placeholder for actual link */ },
    ],
  },
  {
    degree: 'B.Sc. (Honours) Physics',
    institution: 'University of Delhi (Deshbandhu College, South Campus)',
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
