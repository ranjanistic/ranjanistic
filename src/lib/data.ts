
import type { LucideIcon } from 'lucide-react';
import { Linkedin, Github, Gitlab, LayoutDashboard, Briefcase, Wand2, GraduationCap, MessageCircle, Palette, Code, Settings, Users } from 'lucide-react'; // Added more icons
import type { WorkExperienceEntry, NavLink, HeroData, ProjectEntry, SkillArea, EducationEntry, SocialLinkInfo, BlogPost, Project, SkillCategory, Experience, BlogPostContentItem } from '@/lib/types';


export const navLinksData: NavLink[] = [
  { href: '/#top', label: 'Priyanshu R.' }, // Shortened for navbar
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
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
    link: '#', // Placeholder link
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
    link: '#', // Placeholder link
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
        projectLink: '#', // Placeholder link
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

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-future-of-design-thinking',
    title: 'The Future of Design Thinking in a Tech-Driven World',
    date: '2024-07-15',
    excerpt: 'Exploring how design thinking methodologies are evolving with advancements in AI and other technologies.',
    content: [
      { type: 'paragraph', content: "Design thinking has long been a cornerstone of innovation, providing a human-centered approach to problem-solving. As technology, particularly Artificial Intelligence (AI), continues its rapid advancement, the landscape of design thinking is set for a transformative shift. How will these methodologies adapt, and what new opportunities will arise for designers?" },
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'AI and design thinking concept', hint: 'abstract ai design' },
      { type: 'heading', content: 'AI as a Design Partner' },
      { type: 'paragraph', content: "Instead of viewing AI as a replacement for designers, we should see it as a powerful partner. AI can automate repetitive tasks, analyze vast amounts of user data to uncover insights, and even generate initial design concepts. This frees up designers to focus on higher-level strategic thinking, empathy, and creativity – areas where human intuition excels." },
      { type: 'heading', content: 'Ethical Considerations' },
      { type: 'paragraph', content: "With great power comes great responsibility. The integration of AI into design processes also brings new ethical challenges. Designers must be vigilant about issues like bias in algorithms, data privacy, and the potential for AI-driven designs to manipulate users. A renewed focus on ethical design principles will be paramount." },
      { type: 'list', items: ["The role of empathy in an AI world.", "Data-driven vs. intuition-led design.", "Upskilling for future design roles."] },
      { type: 'paragraph', content: "The future is not about AI versus human designers, but AI *with* human designers. By embracing these new tools thoughtfully and ethically, we can unlock unprecedented levels of innovation and create even more meaningful and impactful user experiences." }
    ],
    tags: ['Design Thinking', 'AI', 'Future of Design', 'Technology'],
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'futuristic tech interface'
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
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'Minimalist UI example', hint: 'clean minimalist ui' },
      { type: 'heading', content: 'Improved Performance' },
      { type: 'paragraph', content: "Fewer elements typically mean faster loading times and smoother performance, especially on mobile devices. This contributes significantly to a positive user experience and can impact conversion rates and user retention." },
      { type: 'heading', content: 'Timeless Appeal' },
      { type: 'paragraph', content: "While design trends come and go, the principles of minimalism – clarity, balance, and purposeful design – tend to endure. A well-executed minimalist design can remain relevant and effective for years." },
      { type: 'paragraph', content: "Achieving true minimalism is not about stripping everything away; it’s about making intentional choices to include only what is truly necessary to achieve the user’s goals and communicate the intended message effectively." }
    ],
    tags: ['Minimalism', 'UI Design', 'UX Design', 'User Experience'],
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'simple design elements'
  },
];

// Detailed data for Projects (if a dedicated /projects/[slug] page is used)
export const projects: Project[] = [
  {
    id: 'project-a',
    slug: 'project-alpha', // Make sure slugs are unique and URL-friendly
    title: 'Project Alpha',
    shortDescription: 'A revolutionary e-commerce platform design focusing on UX.',
    description: 'Project Alpha aimed to redefine the online shopping experience by integrating cutting-edge UI/UX principles with a highly personalized user journey. The storyline involved extensive user research, iterative prototyping, and collaboration with development teams to bring a seamless and engaging platform to life.',
    imageUrl: 'https://placehold.co/1200x675.png', // Larger image for detail page
    imageHint: 'modern ecommerce dashboard',
    technologies: ['Figma', 'React', 'User Research', 'Node.js'],
    liveLink: 'https://example.com/project-alpha-live', // Example link
    repoLink: 'https://github.com/your-username/project-alpha', // Example link
    storyline: [
      { type: 'heading', content: 'The Challenge' },
      { type: 'paragraph', content: 'Existing e-commerce platforms often suffer from cluttered interfaces and impersonal experiences. The goal was to create something intuitive, delightful, and highly performant, capable of handling a large product catalog and diverse user base.' },
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'Early sketch of platform architecture', hint: 'architecture sketch' },
      { type: 'heading', content: 'Our Approach & My Role' },
      { type: 'paragraph', content: 'We started with deep user interviews and persona development. This was followed by wireframing, low-fidelity, and high-fidelity prototypes using Figma. I led the UX research phase and collaborated closely with UI designers and front-end developers to ensure design feasibility and optimal user flow. Iterative testing with users was conducted at each stage.' },
      { type: 'list', items: ['Conducted 20+ user interviews.', 'Developed 5 key user personas.', 'Created interactive prototypes for A/B testing.'] },
      { type: 'heading', content: 'The Outcome' },
      { type: 'paragraph', content: 'A platform that saw a 30% increase in user engagement, a 25% reduction in cart abandonment, and a 15% rise in conversion rates within the first three months of launch. The design system created also streamlined future development efforts.' },
    ],
  },
  {
    id: 'project-b',
    slug: 'project-beta',
    title: 'Project Beta',
    shortDescription: 'A mobile app for mindfulness and well-being with a calm UI.',
    description: 'Project Beta is a serene mobile application designed to help users cultivate mindfulness and improve their mental well-being through guided meditations, breathing exercises, and progress tracking. The project involved creating a calming user interface, intuitive navigation, and engaging content delivery mechanisms.',
    imageUrl: 'https://placehold.co/1200x675.png',
    imageHint: 'mobile app mindfulness',
    technologies: ['SwiftUI', 'Adobe XD', 'Firebase', 'User Testing'],
    liveLink: 'https://example.com/project-beta-live',
    storyline: [
      { type: 'heading', content: 'Concept & Vision' },
      { type: 'paragraph', content: 'In an increasingly fast-paced world, Project Beta offers a personal sanctuary for users to find peace, reduce stress, and enhance clarity through guided meditations and structured mindfulness exercises. The vision was to make mental well-being accessible and engaging.' },
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'App screenshot of meditation screen', hint: 'meditation app ui' },
      { type: 'heading', content: 'Design Philosophy & Execution' },
      { type: 'paragraph', content: 'The design uses a palette of soft, natural colors, minimalist icons, and gentle, non-intrusive animations to create a tranquil and immersive user experience. I focused on creating a user journey that felt supportive and encouraging, with clear pathways to content and progress tracking.' },
      { type: 'list', items: ['Designed over 50 unique screens and user flows.', 'Developed a content strategy for guided meditations.', 'Integrated gamification elements to encourage consistent use.'] },
      { type: 'heading', content: 'Impact' },
      { type: 'paragraph', content: 'User feedback highlighted the app\'s calming effect and ease of use. Early metrics showed a 40% daily active user rate among beta testers and high completion rates for guided sessions.' },
    ],
  },
  // Add more detailed projects as needed
];

// Detailed data for Skill Categories (if a dedicated /skills page is used)
export const skillCategories: SkillCategory[] = [
  {
    name: 'Design',
    iconName: 'Palette', 
    skills: [
      { name: 'UI/UX Design', level: 95 },
      { name: 'Interaction Design', level: 90 },
      { name: 'Prototyping (Figma, XD)', level: 92 },
      { name: 'User Research & Testing', level: 88 },
      { name: 'Visual Design & Branding', level: 93 },
      { name: 'Mobile & Web App Design', level: 90 },
      { name: 'Design Systems', level: 85 },
    ],
  },
  {
    name: 'Development',
    iconName: 'Code',
    skills: [
      { name: 'HTML5 & CSS3/SCSS', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'React & Next.js', level: 85 },
      { name: 'Node.js & Express', level: 75 },
      { name: 'Python (Django)', level: 70 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Git & Version Control', level: 92 },
    ],
  },
  {
    name: 'Tools & Software',
    iconName: 'Settings',
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'Adobe XD', level: 90 },
      { name: 'Adobe Illustrator & Photoshop', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Jira & Confluence', level: 82 },
      { name: 'AWS (Basic Services)', level: 65 },
    ],
  },
  // Add more categories like "Methodologies", "Soft Skills" if desired for a detailed page
];

// Example for detailed Experience page data structure
export const experiences: Experience[] = [
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
    logoHint: 'modern tech logo',
  },
  {
    id: 'exp2',
    company: 'Creative Minds Agency',
    role: 'UI/UX Designer',
    period: 'Jun 2017 - Dec 2019',
    timeline: '2017-2019',
    achievements: [
      'Designed and launched 10+ websites and mobile apps for diverse clients, from concept to final mockups.',
      'Consistently received positive client feedback for creativity, communication, and attention to detail.',
      'Contributed to a 40% growth in the agency’s design portfolio by delivering high-quality, impactful designs.',
    ],
    storyline: 'During my time at Creative Minds, I worked on a wide array of projects, from startups to established brands. This fast-paced environment honed my ability to quickly understand client needs, iterate on designs based on feedback, and deliver high-quality solutions under tight deadlines. I particularly enjoyed the challenge of crafting unique brand identities and user experiences that resonated with target audiences and achieved business goals.',
    logoUrl: 'https://placehold.co/100x100.png',
    logoHint: 'creative agency logo',
  },
  // Add more experiences if needed
];
