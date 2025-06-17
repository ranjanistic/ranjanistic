
import type { LucideIcon } from 'lucide-react';
import { Linkedin, Github, Gitlab } from 'lucide-react';
import type { WorkExperienceEntry, NavLink, HeroData, ProjectEntry, SkillArea, EducationEntry, SocialLinkInfo, BlogPost, BlogPostContentItem } from '@/lib/types';

export const navLinksData: NavLink[] = [
  { href: '/#top', label: 'Priyanshu Ranjan' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
];

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
    ],
  },
  {
    role: 'API Engineer',
    company: 'TheSocialComment',
    period: 'JUNE 2021 - AUG 2021',
    description: [
      'APIs, microservices, unit testing, and DB ops using MongoDB.',
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

export const projectData: ProjectEntry[] = [
  {
    title: 'Stellar Evolution — Using MESA',
    description: 'Pre-main sequence contraction, role of mass distributions guided by Initial Mass Function, involving HR diagrams.',
    linkText: 'View concluding report',
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
    linkText: 'View',
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
    link: 'https://schemester.app',
  },
];

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

export const educationData: EducationEntry[] = [
  {
    degree: 'Msc. Physics',
    institution: 'Department of Physics & Astrophysics, University of Delhi',
    period: '2023 - 2025',
    details: [
      {
        projects: 'Stellar evolution & modelling using MESA, under the guidance of Prof. T.R. Seshadri & Dr. Sachin Pandey.',
        projectLinkText: 'View concluding presentation',
        projectLink: '#',
      },
      {
        specialization: 'General Theory of Relativity, Cosmology, Astrophysics, Complex systems & Networks, Nonlinear Dynamics, Computational Physics.',
      },
    ],
  },
  {
    degree: 'Bsc. Honours Physics',
    institution: 'University of Delhi, Ramjas College, North Campus.',
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


export const socialLinksFooter: SocialLinkInfo[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ranjanistic', icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/ranjanistic', icon: Github },
  { name: 'GitLab', url: 'https://gitlab.com/ranjanistic', icon: Gitlab },
];

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    slug: 'the-future-of-design-thinking',
    title: 'The Future of Design Thinking in a Tech-Driven World',
    date: '2024-07-15',
    excerpt: 'Exploring how design thinking methodologies are evolving with advancements in AI and other technologies.',
    content: [
      { type: 'paragraph', content: "Design thinking has long been a cornerstone of innovation, providing a human-centered approach to problem-solving. As technology, particularly Artificial Intelligence (AI), continues its rapid advancement, the landscape of design thinking is set for a transformative shift. How will these methodologies adapt, and what new opportunities will arise for designers?" },
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'AI and design thinking concept', hint: 'AI design' },
      { type: 'heading', content: 'AI as a Design Partner' },
      { type: 'paragraph', content: "Instead of viewing AI as a replacement for designers, we should see it as a powerful partner. AI can automate repetitive tasks, analyze vast amounts of user data to uncover insights, and even generate initial design concepts. This frees up designers to focus on higher-level strategic thinking, empathy, and creativity – areas where human intuition excels." },
      { type: 'heading', content: 'Ethical Considerations' },
      { type: 'paragraph', content: "With great power comes great responsibility. The integration of AI into design processes also brings new ethical challenges. Designers must be vigilant about issues like bias in algorithms, data privacy, and the potential for AI-driven designs to manipulate users. A renewed focus on ethical design principles will be paramount." },
      { type: 'list', items: ["The role of empathy in an AI world.", "Data-driven vs. intuition-led design.", "Upskilling for future design roles."] },
      { type: 'paragraph', content: "The future is not about AI versus human designers, but AI *with* human designers. By embracing these new tools thoughtfully and ethically, we can unlock unprecedented levels of innovation and create even more meaningful and impactful user experiences." }
    ],
    tags: ['Design Thinking', 'AI', 'Future of Design', 'Technology'],
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'futuristic design tech'
  },
  {
    slug: 'minimalism-in-ui-ux',
    title: 'The Power of Minimalism in UI/UX Design',
    date: '2024-06-28',
    excerpt: 'A deep dive into why less is often more when it comes to creating effective and engaging user interfaces.',
    content: [
      { type: 'paragraph', content: "In a world saturated with information and visual stimuli, minimalism in UI/UX design offers a breath of fresh air. It’s more than just an aesthetic trend; it’s a philosophy centered on clarity, purpose, and user focus. But what makes minimalist design so powerful, and how can it be effectively implemented?" },
      { type: 'heading', content: 'Clarity and Focus' },
      { type: 'paragraph', content: "Minimalist interfaces remove unnecessary clutter, allowing users to focus on the core content and functionality. By prioritizing essential elements and employing generous white space, designers can guide the user’s attention and make interactions more intuitive." },
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'Minimalist UI example', hint: 'minimalist interface' },
      { type: 'heading', content: 'Improved Performance' },
      { type: 'paragraph', content: "Fewer elements typically mean faster loading times and smoother performance, especially on mobile devices. This contributes significantly to a positive user experience and can impact conversion rates and user retention." },
      { type: 'heading', content: 'Timeless Appeal' },
      { type: 'paragraph', content: "While design trends come and go, the principles of minimalism – clarity, balance, and purposeful design – tend to endure. A well-executed minimalist design can remain relevant and effective for years." },
      { type: 'paragraph', content: "Achieving true minimalism is not about stripping everything away; it’s about making intentional choices to include only what is truly necessary to achieve the user’s goals and communicate the intended message effectively." }
    ],
    tags: ['Minimalism', 'UI Design', 'UX Design', 'User Experience'],
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'clean design interface'
  },
];

// Detailed data for Projects and Skills for dedicated pages (if restored)
// For now, these are illustrative and not directly used by the single-page kinseygross.com style
// but are kept here if those pages are to be made functional with more detail.

export const projects: import('@/lib/types').Project[] = [
  {
    id: 'project-a',
    slug: 'project-alpha',
    title: 'Project Alpha',
    shortDescription: 'A revolutionary e-commerce platform design.',
    description: 'Project Alpha aimed to redefine the online shopping experience by integrating cutting-edge UI/UX principles with a highly personalized user journey. The storyline involved extensive user research, iterative prototyping, and collaboration with development teams to bring a seamless and engaging platform to life.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'modern ecommerce',
    technologies: ['Figma', 'React', 'User Research'],
    liveLink: '#',
    repoLink: '#',
    storyline: [
      { type: 'heading', content: 'The Challenge' },
      { type: 'paragraph', content: 'Existing e-commerce platforms often suffer from cluttered interfaces and impersonal experiences. The goal was to create something intuitive and delightful.' },
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'Early sketch of platform', hint: 'design sketch' },
      { type: 'heading', content: 'Our Approach' },
      { type: 'paragraph', content: 'We started with deep user interviews and persona development. This was followed by wireframing, low-fidelity, and high-fidelity prototypes, constantly testing with users.' },
      { type: 'heading', content: 'The Outcome' },
      { type: 'paragraph', content: 'A platform that saw a 30% increase in user engagement and a 15% rise in conversion rates within the first three months of launch.' },
    ],
  },
  // Add more detailed projects if needed for a dedicated projects page
];

export const skillCategories: import('@/lib/types').SkillCategory[] = [
  {
    name: 'Design',
    iconName: 'Palette',
    skills: [
      { name: 'UI/UX Design', level: 95 },
      { name: 'Interaction Design', level: 90 },
      { name: 'Prototyping', level: 92 },
      { name: 'User Research', level: 88 },
      { name: 'Visual Design', level: 93 },
    ],
  },
  // Add more detailed skill categories if needed for a dedicated skills page
];

export const experiences: import('@/lib/types').Experience[] = [
    {
    id: 'exp1',
    company: 'Innovatech Solutions',
    role: 'Senior UX Designer',
    period: 'Jan 2020 - Present',
    timeline: '2020-Present',
    achievements: [
      'Led the redesign of the flagship product, resulting in a 25% increase in user satisfaction.',
      'Mentored a team of 3 junior designers, fostering their growth and improving team output.',
      'Implemented a new user research framework that reduced design iteration time by 15%.',
    ],
    storyline: 'At Innovatech, I championed user-centered design principles across multiple product teams. My role involved translating complex user needs and business requirements into intuitive and elegant design solutions. A key achievement was spearheading the overhaul of our main SaaS platform, focusing on improved navigation and task efficiency, which directly contributed to higher customer retention rates.',
    logoUrl: 'https://placehold.co/100x100.png',
    logoHint: 'tech logo',
  },
  // Add more detailed experiences if needed for a dedicated experience page
];
