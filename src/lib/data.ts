import type { LucideIcon } from 'lucide-react';
import { Linkedin, Github, Gitlab } from 'lucide-react'; // Gitlab icon is available
import type { WorkExperienceEntry } from '@/lib/types';

export interface NavLink {
  href: string;
  label: string;
}

export const navLinksData: NavLink[] = [
  { href: '/#top', label: 'Priyanshu Ranjan' }, // Points to very top
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
];

export interface HeroData {
  name: string;
  tagline: string;
  location: string;
  email: string;
  gitlab: string;
  github: string;
  linkedin: string;
}

export const heroData: HeroData = {
  name: 'Priyanshu Ranjan',
  tagline: '5 years of industry experience. Product development lifecycle, technology leadership, communication, designing, problem navigation, public speaking.',
  location: 'Noida, UP (India)',
  email: 'priyanshuranjan88@gmail.com',
  gitlab: 'https://gitlab.com/ranjanistic',
  github: 'https://github.com/ranjanistic',
  linkedin: 'https://linkedin.com/in/ranjanistic',
};


export const workExperienceData: WorkExperienceEntry[] = [
  {
    role: 'Sr. Developer',
    company: 'MedicalHive Solutions',
    companyLink: 'https://hilocmed.com',
    period: 'APRIL 2025 - Present',
    description: [
      'Built and designed full stack web based interface from backend to frontend, deployment, maintenance, network security included, involving AWS.',
    ],
  },
  {
    role: 'CTO, Co-founder',
    company: 'Payr',
    companyLink: 'https://payr.org.in',
    period: 'MARCH 2023 - Present',
    description: [
      'B2B & B2C product life cycle, problem assessment, data management, logic building, designing, team building and management, rigorously brainstormed solutions.',
      'Involved 4+ B2B clients & 100+ B2C clients.',
    ],
  },
  {
    role: 'Integrations Developer',
    company: 'Testlify',
    companyLink: 'https://testlify.com',
    period: 'FEB 2023 - OCT 2023',
    description: [
      'Integration of multiple HR tools like Greenhouse, JazzHR, SAP successfactors, with the Testlify platform.',
      'Custom logic for each using lb4, typescript framework.',
    ],
  },
  {
    role: 'Product developer, Stakeholder',
    company: 'Clan',
    period: 'APR 2022 - NOV 2022',
    description: [
      'NodeJS based product development, AWS, data analysis, UI-UX, and scalable system design with queue based fanout mechanism, event driven architecture.',
    ],
  },
  {
    role: 'NodeJS consultant',
    company: 'Digital crew',
    period: 'JUNE 2022 - OCT 2022',
    description: [
      'Web sockets based logic development for multiplayer games, and high level Blockchain implementation.',
    ],
  },
  {
    role: 'Tech lead, Co-founder',
    company: 'Knotters',
    period: 'AUG 2021 - MAR 2022',
    description: [
      'Open platform for collaboration of open source projects and competitions for systematic resume building, based on Django, full stack.',
      // 'View' implies a link, but no URL provided for this specific item in the text.
    ],
  },
  {
    role: 'API Engineer',
    company: 'TheSocialComment',
    period: 'JUNE 2021 - AUG 2021',
    description: [
      'APIs, microservices, unit testing, and DB ops using MongoDB.',
      // 'View' implies a link, but no URL provided.
    ],
  },
  {
    role: 'Javascript Developer, Team Lead',
    company: 'Progressive Minds',
    period: 'JAN 2021 - APR 2021',
    description: [
      'Web games & Web IDE development involving rigorous javascript.',
      'Created a virtual web-based gaming engine, easing development.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Edu2Live',
    period: 'AUG 2020 - SEP 2020',
    description: [
      'A customer product relationship management application for an ed-tech startup, for e-commerce.',
    ],
  },
];

export interface ProjectEntry {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export const projectData: ProjectEntry[] = [
  {
    title: 'Stellar Evolution — Using MESA',
    description: 'Pre-main sequence contraction, role of mass distributions guided by Initial Mass Function, involving HR diagrams.',
    linkText: 'View concluding report', // No URL provided, will use #
    link: '#',
  },
  {
    title: 'Knotters — Open source community portal',
    description: 'Open source community platform for collaboration at projects and competitions, from idea to production.',
    linkText: 'knotters.org',
    link: 'https://knotters.org',
  },
  {
    title: 'CovidCare — Pandemic help portal',
    description: 'A platform for Covid19 pandemic related help resources for the people in need.',
    linkText: 'covidcare.knotters.org',
    link: 'https://covidcare.knotters.org',
  },
  {
    title: 'Games & Web IDE - Part of LMS',
    description: 'Web games, a custom Javascript based Engine, IDE for creating high level apps and games.',
  },
  {
    title: 'Schemester — B2B management',
    description: 'An online institution management system, primarily focused on the educational niche.',
    linkText: 'View', // No URL provided
    link: '#',
  },
  {
    title: 'Skivvy — Native android app',
    description: 'An android native app for vocal execution of device based functions.',
    linkText: 'github.com/ranjanistic/skivvy',
    link: 'https://github.com/ranjanistic/skivvy',
  },
  {
    title: 'Schemester Android — Native android app.',
    description: 'A small project targeted at schedule management for my own batchmates.',
    linkText: 'schemester.app',
    link: 'https://schemester.app', // Assuming this is the link
  },
];

export interface SkillArea {
  title: string;
  skills: string; // Plain text as provided
}

export const skillsData: SkillArea[] = [
  {
    title: 'Hard Skills',
    skills: 'DevOps, System Design methods, Software Testing, Linux sys admin, Network security, Precision debugging, CI-CD, microservices architecture, queue based system design. High volume web applications development with frameworks as django, nodejs, lb4, Beego, React. Web technologies, internet communication protocols (http, ssh.), Network security understanding, NAT, VPC mgmt. Code optimization, native apps, web apps, SEO tools - lighthouse, search console. Database ops, management (replication, administration, sharding, recovery), MongoDB, MySQL, PostgreSQL, Redis, CouchDB, Cassandra. Local (Git), cloud (GitHub, Bitbucket, GitLab, AWS code commit) VCS. Personal - vscode.',
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

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details?: {
    projects?: string;
    projectLink?: string;
    projectLinkText?: string;
    specialization?: string;
  }[];
}

export const educationData: EducationEntry[] = [
  {
    degree: 'Msc. Physics',
    institution: 'Department of Physics & Astrophysics, University of Delhi',
    period: '2023 - 2025',
    details: [
      {
        projects: 'Stellar evolution & modelling using MESA, under the guidance of Prof. T.R. Seshadri & Dr. Sachin Pandey.',
        projectLinkText: 'View concluding presentation', // No URL
        projectLink: '#',
      },
      {
        specialization: 'General Theory of Relativity, Cosmology, Astrophysics, Complex systems & Networks, Nonlinear Dynamics, Computational Physics.',
      },
    ],
  },
  {
    degree: 'Bsc. Honours Physics',
    institution: 'University of Delhi, Ramjas College, North Campus.', // Combined Ramjas College info here
    period: '2018 - 2021',
    details: [
        { specialization: 'Physics, Mathematics.'}
    ]
  },
  {
    degree: 'Sr. Secondary Ed.',
    institution: 'Nehru Int. Pub. School, Noida',
    period: '2016 - 2018',
    details: [{ specialization: 'Science, Mathematics, Computer science. (Central Board of Secondary Education)' }],
  },
  {
    degree: 'Primary & Secondary Edu.',
    institution: 'Maharishi Vidya Mandir, Noida',
    period: '2004 - 2016',
    details: [{ specialization: 'Central Board of Secondary Education' }],
  },
];


export interface SocialLinkInfo {
  name: string;
  url: string;
  icon: LucideIcon;
}
export const socialLinksFooter: SocialLinkInfo[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ranjanistic', icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/ranjanistic', icon: Github },
  { name: 'GitLab', url: 'https://gitlab.com/ranjanistic', icon: Gitlab },
];

// The old data structures are removed as they are superseded by the new text content.
// If any parts of them were needed, they should be integrated into the new structures above.
// For example, the detailed project storylines are not part of the new minimalist design based on kinseygross.com.
// Blog posts are also removed from this data file as the new design doesn't feature a blog section prominently.
// The user wants a single page design based on kinseygross.com using the *new* text.
// The old 'projects', 'skillCategories', 'experiences', 'blogPosts', 'socialLinks' (from PRD) are effectively replaced.
// I've created socialLinksFooter for the specific links provided by user.
