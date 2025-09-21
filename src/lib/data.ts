import type { LucideIcon } from 'lucide-react'
import {
  Linkedin,
  Github,
  Gitlab,
  Palette as PaletteIconLucide,
  Code as CodeIcon,
  Settings,
  Users,
  Briefcase,
  BookOpen,
  Wand2,
  Award,
  Star,
  Languages as LanguagesIcon,
  Home,
  BriefcaseBusiness,
  UsersRound,
  Lightbulb,
  ShieldCheck,
  MessageSquare,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  GitFork,
  SquareTerminal,
  Brain,
  Mic,
  LifeBuoy,
  GraduationCap,
  Trophy
} from 'lucide-react'
import type {
  WorkExperienceEntry,
  NavLink,
  HeroData,
  ProjectEntry,
  SkillArea,
  EducationEntry,
  SocialLinkInfo,
  Project,
  SkillCategory,
  Skill,
  Certification,
  HonorAward,
  ProjectStorylineItem,
  EducationDetail
} from '@/lib/types'

import hiloc1 from '@/assets/experience/hiloc/1.png'
import hiloc2 from '@/assets/experience/hiloc/2.png'
import hiloc3 from '@/assets/experience/hiloc/3.png'
import hiloc4 from '@/assets/experience/hiloc/4.png'

import payr1 from '@/assets/experience/payr/1.png'
import payr2 from '@/assets/experience/payr/2.png'
import payr3 from '@/assets/experience/payr/3.png'
import payr4 from '@/assets/experience/payr/4.png'
import payr5 from '@/assets/experience/payr/5.png'
import payr6 from '@/assets/experience/payr/6.png'

import testlify1 from '@/assets/experience/testlify/1.png'
import testlify2 from '@/assets/experience/testlify/2.png'
import testlify3 from '@/assets/experience/testlify/3.png'

import clan1 from '@/assets/experience/clan/1.png'
import clan2 from '@/assets/experience/clan/2.png'
import clan3 from '@/assets/experience/clan/3.png'

import mesa1 from '@/assets/projects/mesa/1.png'
import mesa2 from '@/assets/projects/mesa/2.png'

export const heroData: HeroData = {
  name: 'Priyanshu Ranjan',
  title: 'Technology leadership with 5+ years of industry experience.',
  tagline:
    '[System architect] [DevOps engineer] [Software developer] [UI-UX designer]',
  summary:
    'With 5 years of dedicated industry experience, I thrive on the full product development lifecycle, from strategy to production. My expertise spans but not limited to - technology leadership, effective communication, intuitive design, strategic problem navigation & solving, and engaging presentation.',
  location: 'Noida, UP (India)',
  email: 'priyanshuranjan88@gmail.com',
  gitlab: 'https://gitlab.com/ranjanistic',
  github: 'https://github.com/ranjanistic',
  linkedin: 'https://www.linkedin.com/in/ranjanistic'
}

export const navLinksData: NavLink[] = [
  {
    href: '/#top',
    label: (heroData.name ? heroData.name.split(' ')[0] : 'Priyanshu') + '.'
  },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#honors', label: 'Honors' },
  { href: '/#contact', label: 'Contact' }
]

export const socialLinksFooter: SocialLinkInfo[] = [
  {
    name: 'Linkedin',
    url: heroData.linkedin || 'https://www.linkedin.com/in/ranjanistic',
    icon: Linkedin
  },
  {
    name: 'Github',
    url: heroData.github || 'https://github.com/ranjanistic',
    icon: Github
  },
  {
    name: 'Gitlab',
    url: heroData.gitlab || 'https://gitlab.com/ranjanistic',
    icon: Gitlab
  }
]

export const workExperienceData: WorkExperienceEntry[] = [
  {
    role: 'SDE 2, System architect, DevOps Eng. & UI-UX',
    company: 'Hilocmed LLP',
    companyLink: 'https://hilocmed.com',
    period: 'APRIL 2025 - Present',
    location: 'New Delhi, India',
    description: [
      'Built and designed full stack web based interface from backend to frontend.',
      'Handled deployment, maintenance, and network security, involving AWS.'
    ],
    imageUrls: [hiloc1.src, hiloc3.src, hiloc2.src, hiloc4.src],
    imageHints: ['medical software ui', 'aws architecture diagram']
  },
  {
    role: 'CTO, Co-Founder',
    company: 'Payr Services',
    companyLink: 'https://payr.org.in',
    period: 'May 2023 - Present',
    location: 'Meerut, Uttar Pradesh, India',
    description: [
      'Managed B2B & B2C product life cycle, problem assessment, data management, and logic building.',
      'Overseeing all technical aspects, from concept to delivery, leading the technology strategy and execution.',
      'Continued leadership from Co-Founder role, focusing on strategic technological advancements. Involved 4+ B2B clients & 100+ B2C clients.',
      'Led designing, team building, and management; rigorously brainstormed solutions.'
    ],
    imageUrls: [
      payr1.src,
      payr2.src,
      payr3.src,
      payr4.src,
      payr5.src,
      payr6.src
    ],
    imageHints: [
      'fintech dashboard',
      'payment gateway flow',
      'team collaboration'
    ]
  },
  {
    role: 'Integrations Developer',
    company: 'Testlify Pvt Ltd',
    companyLink: 'https://testlify.com',
    period: 'February 2023 - February 2024',
    location: 'India',
    description: [
      'Extended the existing product by integrating multiple 3rd party HR tools like Greenhouse, JazzHR, SAP SuccessFactors with the Testlify platform.',
      'Developed custom logic for each integration using Loopback 4 (LB4) and TypeScript framework.'
    ],
    imageUrls: [
      testlify1.src,
      testlify3.src,
      testlify2.src,
    ],
    imageHints: ['api integration diagram', 'typescript code snippet']
  },
  {
    role: 'Product Developer',
    company: 'Clan (AT Pvt Ltd)',
    period: 'May 2022 - November 2022 (7 months)',
    location: 'India',
    description: [
      'Led NodeJS based product development and managed AWS infrastructure, focusing on product revamp and scalability.',
      'Conducted data analysis, contributed to UI-UX design.',
      'Designed and implemented a scalable system with a queue-based fanout mechanism and event-driven architecture.'
    ],
    imageUrls: [
      clan1.src,
      clan3.src,
      clan2.src,

    ],
    imageHints: ['scalable system architecture', 'ui design sketch']
  },
  {
    role: 'NodeJS Consultant',
    company: 'Digital Crew India Pvt Ltd',
    period: 'June 2022 - October 2022',
    location: 'MP, India',
    description: [
      'Developed and managed realtime multiplayer gaming architecture.',
      'Implemented WebSockets-based logic for multiplayer games and high-level Blockchain features.'
    ],
    imageUrls: ['https://placehold.co/400x250.png'],
    imageHints: ['multiplayer game interface']
  },
  {
    role: 'Technology Lead, Co-Founder',
    company: 'Knotters (Sub. of CCube Pvt Ltd)',
    period: 'May 2021 - December 2021',
    location: 'Mayur Vihar, New Delhi, India',
    description: [
      'Led algorithms, design & platform development for an open platform for open source project collaboration.',
      'Managed deployment & maintenance of the Django-based full-stack application.',
      'Co-founded the community, focusing on open source collaboration and competitions for systematic resume building.',
      'Knotters was recognized and sponsored by NASSCOM during this period.'
    ],
    imageUrls: [
      'https://placehold.co/400x250.png',
      'https://placehold.co/400x250.png'
    ],
    imageHints: ['open source platform dashboard', 'django project structure']
  },
  {
    role: 'SDE Intern',
    company: 'SocialComment Pvt Ltd',
    period: 'June 2021 - August 2021',
    location: 'India',
    description: [
      'Developed NodeJS APIs and microservices.',
      'Performed unit testing and database operations using MongoDB.'
    ],
    imageUrls: ['https://placehold.co/400x250.png'],
    imageHints: ['api endpoint structure']
  },
  {
    role: 'Virtual Labs Lead, Games Developer, Frontend Developer',
    company: 'Progressive Minds Pvt Ltd',
    period: 'March 2021 - April 2021',
    location: 'Mayur Vihar, Delhi, India',
    description: [
      'Developed beginner-friendly web games & a Web IDE using browser-based JavaScript, HTML5 & Open Sourced Blockly®.',
      'Created a virtual web-based gaming engine, easing development processes for educational content.',
      'Led the initiative for virtual labs development within the company.'
    ],
    imageUrls: ['https://placehold.co/400x250.png'],
    imageHints: [
      'virtual lab interface',
      'blockly ide screenshot',
      'javascript game preview'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Edu2Live',
    period: 'August 2020 - September 2020',
    location: 'India',
    description: [
      'Developed a customer and product relationship management (CPRM) website for an ed-tech startup, for e-commerce.'
    ],
    imageUrls: ['https://placehold.co/400x250.png'],
    imageHints: ['edtech crm dashboard']
  }
]

// This is the old projectData structure for homepage overview, not used if displaying full projects
export const projectData: ProjectEntry[] = [
  {
    title: 'Stellar Evolution Modelling (MESA)',
    description:
      'Analysis of pre-main sequence contraction and the role of mass distributions using MESA, focusing on HR diagrams.',
    link: '/#projects',
    linkText: 'View Details Below',
    imageUrls: ['https://placehold.co/600x400.png'],
    imageHints: ['astronomy simulation stars']
  },
  {
    title: 'Knotters - Open Source Community Portal',
    description:
      'A platform for open source project collaboration and competitions, built from idea to production.',
    link: '/#projects',
    linkText: 'View Details Below',
    imageUrls: ['https://placehold.co/600x400.png'],
    imageHints: ['community collaboration code']
  },
  {
    title: 'CovidCare - Pandemic Help Portal',
    description:
      'A web platform providing help resources during the Covid-19 pandemic.',
    link: '/#projects',
    linkText: 'View Details Below',
    imageUrls: ['https://placehold.co/600x400.png'],
    imageHints: ['health support web']
  }
]

const genericStoryline = (
  title: string,
  type: string = 'software project',
  imageSrc?: string
): ProjectStorylineItem[] => [
  { type: 'heading', content: `Overview` },
  {
    type: 'paragraph',
    content: `This section provides a detailed look into the ${title} ${type}, covering its objectives, development process, and outcomes.`
  },
  {
    type: 'image',
    src: imageSrc || 'https://placehold.co/800x450.png',
    alt: `Preview for ${title}`,
    hint: 'project concept abstract'
  },
  { type: 'heading', content: 'Key take-aways' },

  {
    type: 'list',
    items: [
      'Core Feature 1 implementation',
      'Core Feature 2 development',
      'Key Technology stack integration'
    ]
  },
  { type: 'heading', content: 'Conclusion' },
  {
    type: 'paragraph',
    content: `Discussion of the primary challenges encountered during the ${title} project and the valuable lessons learned throughout its lifecycle.`
  }
]

export const projects: Project[] = [
  {
    id: 'stellar-evolution',
    slug: 'stellar-evolution',
    title: 'Stellar Evolution Modelling using MESA',
    shortDescription:
      'Analysis of pre-main sequence contraction and stellar mass distributions using MESA.',
    description:
      'Detailed study of pre-main sequence stellar contraction and the impact of mass distributions, guided by the Initial Mass Function, involving Hertzsprung-Russell diagrams. Project conducted using the MESA (Modules for Experiments in Stellar Astrophysics) software suite.',
    imageUrls: [mesa1.src],
    imageHints: ['nebula star formation'],
    technologies: [
      'MESA',
      'Python',
      'Astrophysics',
      'Data Analysis',
      'Computational Physics'
    ],
    liveLink: undefined,
    repoLink: 'https://github.com/ranjanistic/astrolab',
    storyline: genericStoryline(
      'Stellar Evolution Modelling',
      'research project',
      mesa2.src
    )
  },
  {
    id: 'knotters-portal',
    slug: 'knotters-portal',
    title: 'Knotters - Open Source Community Portal',
    shortDescription:
      'Community platform for open source collaboration and resume-building competitions.',
    description:
      'Knotters is an open platform designed to foster collaboration on open source projects and host competitions. It aims to help contributors build their resumes systematically. The project was developed full stack, from concept to production.',
    imageUrls: ['https://placehold.co/1200x675.png'],
    imageHints: ['collaboration network community'],
    technologies: [
      'Django',
      'Python',
      'Full Stack',
      'Web Development',
      'Community Platform'
    ],
    liveLink: undefined,
    repoLink: 'https://github.com/ranjanistic/knotters',
    storyline: genericStoryline('Knotters Community Portal')
  },
  {
    id: 'covidcare-portal',
    slug: 'covidcare-portal',
    title: 'CovidCare - Pandemic Help Portal',
    shortDescription:
      'A platform connecting people with Covid-19 related help resources.',
    description:
      'CovidCare was developed as a response to the Covid-19 pandemic, serving as a vital hub for individuals seeking help and resources. It connected users with necessary support systems and information.',
    imageUrls: ['https://placehold.co/1200x675.png'],
    imageHints: ['health support community'],
    technologies: ['Web Development', 'Django', 'Python', 'Information Portal'],
    liveLink: undefined,
    repoLink: 'https://github.com/Knotters/covidcare',
    storyline: genericStoryline('CovidCare Pandemic Portal')
  },
  {
    id: 'js-gaming-engine-ide',
    slug: 'js-gaming-engine-ide',
    title: 'JavaScript Gaming Engine & Web IDE',
    shortDescription:
      'Custom JS-based gaming engine and Web IDE for app/game creation within an LMS.',
    description:
      'Developed as part of a Learning Management System, this project included a custom JavaScript-based gaming engine to facilitate easier web game development, and a Web IDE for building higher-level applications and games.',
    imageUrls: ['https://placehold.co/1200x675.png'],
    imageHints: ['code editor game development'],
    technologies: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Game Development',
      'IDE Development',
      'LMS Integration',
      'Blockly'
    ],
    liveLink: undefined,
    repoLink:
      'https://gist.github.com/ranjanistic/dd39bdae19b306649f9b482a1be73284',
    storyline: genericStoryline('JavaScript Gaming Engine & Web IDE')
  },
  {
    id: 'schemester-b2b',
    slug: 'schemester-b2b',
    title: 'Schemester — B2B Management',
    shortDescription:
      'Online institution management system for the educational sector.',
    description:
      'Schemester is a B2B online management system primarily designed for educational institutions, aiming to streamline administrative and academic processes.',
    imageUrls: ['https://placehold.co/1200x675.png'],
    imageHints: ['dashboard management system'],
    technologies: ['Web Development', 'SaaS', 'B2B', 'Education Technology'],
    liveLink: 'https://schemester.onrender.com/',
    repoLink: 'https://github.com/ranjanistic/schemester',
    storyline: genericStoryline('Schemester B2B Management System')
  },
  {
    id: 'skivvy-android',
    slug: 'skivvy-android',
    title: 'Skivvy — Native Android App',
    shortDescription:
      'Native Android app for vocal execution of device functions.',
    description:
      'Skivvy is an Android native application that allows users to control various device functions using voice commands, enhancing accessibility and ease of use.',
    imageUrls: ['https://placehold.co/1200x675.png'],
    imageHints: ['mobile app voice assistant'],
    technologies: [
      'Android Native',
      'Kotlin',
      'Java',
      'Voice Recognition',
      'Mobile Development'
    ],
    liveLink:
      'https://github.com/ranjanistic/skivvy/releases/tag/v0.2.1-unborn-stage2',
    repoLink: 'https://github.com/ranjanistic/skivvy',
    storyline: genericStoryline('Skivvy Android App')
  },
  {
    id: 'schemester-android-app',
    slug: 'schemester-android-app',
    title: 'Schemester Android — Native Android App.',
    shortDescription:
      'Native Android app for schedule management for students.',
    description:
      'A small native Android project, Schemester Android was developed for schedule management specifically for my batchmates, helping organize academic timetables and events.',
    imageUrls: ['https://placehold.co/1200x675.png'],
    imageHints: ['mobile calendar schedule'],
    technologies: [
      'Android Native',
      'Kotlin',
      'Java',
      'Mobile Development',
      'Utility App'
    ],
    liveLink: 'https://project-schemester.web.app',
    repoLink: 'https://github.com/ranjanistic/schemester-native',
    storyline: genericStoryline('Schemester Android Schedule App')
  }
]

export const skillsData: SkillArea[] = [
  {
    title: 'Hard Skills & DevOps',
    skills:
      'DevOps, System Design, Software Testing, Linux Sys Admin, Network Security, CI/CD, Microservices, High Volume Web Apps (Django, Node.js, React), Database Ops (MongoDB, MySQL, PostgreSQL, Redis), VCS (Git, GitHub, GitLab).'
  },
  {
    title: 'Soft Skills & Design',
    skills:
      'Team Leadership, Effective Communication, Public Speaking, Problem Navigation, UI/UX Design Principles, Modular Programming, Quality Code, Documentation.'
  },
  {
    title: 'Key Technologies',
    skills:
      'Javascript (TypeScript), Python, Kotlin, Golang, AWS, Docker, Kubernetes, Next.js.'
  }
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Core Expertise',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'Technology Leadership', level: 95 },
      { name: 'Amazon Web Services (AWS)', level: 90 },
      { name: 'Identity and Access Management (IAM)', level: 88 },
      { name: 'System Design & Architecture', level: 92 },
      { name: 'Product Development Lifecycle', level: 93 },
      { name: 'DevOps Practices & CI/CD', level: 88 },
      { name: 'Microservices Architecture', level: 85 }
    ]
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
      { name: 'Bash Scripting', level: 80 }
    ]
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
      { name: 'PM2 / Gunicorn', level: 80 }
    ]
  },
  {
    name: 'Databases & DevOps Tools',
    iconName: 'Settings',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL / PostgreSQL', level: 80 },
      { name: 'Cassandra / CouchDB', level: 70 },
      { name: 'Linux System Administration', level: 85 },
      { name: 'Network Security & Protocols', level: 82 },
      { name: 'VCS (Git, GitHub, GitLab)', level: 95 },
      { name: 'Docker / Kubernetes (Conceptual)', level: 70 }
    ]
  },
  {
    name: 'Software & Design Tools',
    iconName: 'Palette',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'VSCode / Visual Studio', level: 95 },
      { name: 'Atlassian JIRA / Confluence', level: 80 },
      { name: 'Inkscape', level: 70 },
      { name: 'Jupyter Notebooks', level: 80 },
      { name: 'Google/Zoho Workspace', level: 85 }
    ]
  },
  {
    name: 'Soft Skills',
    iconName: 'Users',
    skills: [
      { name: 'Team Leadership & Building', level: 92 },
      { name: 'Effective Communication', level: 95 },
      { name: 'Public Speaking & Presentation', level: 88 },
      { name: 'Strategic Problem Navigation', level: 90 },
      { name: 'UI/UX Design Principles', level: 85 },
      { name: 'Technical Documentation', level: 85 }
    ]
  },
  {
    name: 'AI & Emerging Tech',
    iconName: 'Wand2',
    skills: [
      { name: 'Genkit Fundamentals', level: 70 },
      { name: 'LLM Integration (Conceptual)', level: 65 },
      { name: 'Prompt Engineering Basics', level: 75 }
    ]
  },
  {
    name: 'Human Languages',
    iconName: 'Languages',
    skills: [
      { name: 'English', level: 90, detail: 'Professional Working' },
      { name: 'Hindi', level: 100, detail: 'Native or Bilingual' }
    ]
  }
]

export const educationData: EducationEntry[] = [
  {
    degree: "Master's degree, Physics",
    institution: 'Department of Physics & Astrophysics, University of Delhi',
    campus: 'Ramjas College, North Campus',
    period: 'September 2023 - May 2025',
    details: [
      {
        specialization:
          'General Theory of Relativity, Cosmology, Astrophysics, Complex systems & Networks, Nonlinear Dynamics, Computational Physics'
      },
      {
        projects:
          'Stellar evolution & modelling using MESA, under the guidance of Prof. T.R. Seshadri & Dr. Sachin Pandey.',
        projectLinkText: 'View Concluding Presentation',
        projectLink: '/#projects'
      }
    ]
  },
  {
    degree: "Bachelor's degree (honours), Physics",
    institution: 'University of Delhi',
    campus: 'Deshbandhu College, South Campus',
    period: '2018 - 2021',
    details: [{ specialization: 'Physics, Mathematics' }]
  },
  {
    degree: 'Senior Secondary Education, CBSE, Science',
    institution: 'Nehru International Public School, Noida',
    period: '2016 - 2018',
    details: [{ specialization: 'Science, Mathematics, Computer science' }]
  },
  {
    degree: 'Primary & Secondary Education, CBSE, All',
    institution: 'Maharishi Vidya Mandir Senior Secondary School',
    period: '2004 - 2016',
    details: []
  }
]

export const certificationsData: Certification[] = [
  {
    name: 'IBM Data Science Specialization',
    issuingOrganization: 'IBM (Coursera)',
    credentialUrl:
      'https://www.coursera.org/professional-certificates/ibm-data-science',
    imageUrl: 'https://placehold.co/100x60.png',
    imageHint: 'ibm data science badge'
  },
  {
    name: 'Applied Data Science Specialization',
    issuingOrganization: 'Coursera',
    credentialUrl:
      'https://www.coursera.org/specializations/applied-data-science',
    imageUrl: 'https://placehold.co/100x60.png',
    imageHint: 'coursera data science badge'
  },
  {
    name: 'Python for Data Science, AI & Development',
    issuingOrganization: 'IBM (Coursera)',
    credentialUrl:
      'https://www.coursera.org/learn/python-for-data-science-ai-development',
    imageUrl: 'https://placehold.co/100x60.png',
    imageHint: 'python ibm badge'
  },
  {
    name: 'Eduthon 2020',
    issuingOrganization: 'Competition based',
    credentialUrl: '#',
    imageUrl: 'https://placehold.co/100x60.png',
    imageHint: 'eduthon hackathon logo'
  },
  {
    name: 'Sr. Orange Belt',
    issuingOrganization: 'Internal/Company specific',
    credentialUrl: '#',
    imageUrl: 'https://placehold.co/100x60.png',
    imageHint: 'company award graphic'
  }
]

export const honorsAwardsData: HonorAward[] = [
  { title: 'Student of the year' },
  { title: 'Best Orator' },
  { title: 'Academics and Versatility Recognition' },
  { title: 'Highest scorer in C++' }
]
