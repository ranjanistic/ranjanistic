import type { Project, SkillCategory, Experience, BlogPost } from '@/lib/types';
import { Briefcase, Code, Users, Feather, LayoutDashboard, Palette, TerminalSquare, Mic2, PenTool } from 'lucide-react';

export const navLinks = [
  { href: '/', label: 'Home', icon: LayoutDashboard },
  { href: '/about', label: 'About', icon: Users },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/skills', label: 'Skills', icon: Code },
  { href: '/experience', label: 'Experience', icon: TerminalSquare },
  { href: '/blog', label: 'Blog', icon: PenTool },
  { href: '/contact', label: 'Contact', icon: Mic2 },
];

export const projects: Project[] = [
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
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'Early sketch', hint: 'design sketch' },
      { type: 'heading', content: 'Our Approach' },
      { type: 'paragraph', content: 'We started with deep user interviews and persona development. This was followed by wireframing, low-fidelity, and high-fidelity prototypes, constantly testing with users.' },
      { type: 'heading', content: 'The Outcome' },
      { type: 'paragraph', content: 'A platform that saw a 30% increase in user engagement and a 15% rise in conversion rates within the first three months of launch.' },
    ]
  },
  {
    id: 'project-b',
    slug: 'project-beta',
    title: 'Project Beta',
    shortDescription: 'A mobile app for mindfulness and well-being.',
    description: 'Project Beta is a serene mobile application designed to help users cultivate mindfulness and improve their mental well-being. The project involved creating a calming user interface, intuitive navigation, and engaging content delivery mechanisms.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mindfulness app',
    technologies: ['SwiftUI', 'Adobe XD', ' иллюстратор'],
    liveLink: '#',
    storyline: [
      { type: 'heading', content: 'Concept' },
      { type: 'paragraph', content: 'In a fast-paced world, Project Beta offers a sanctuary for users to find peace and clarity through guided meditations and mindfulness exercises.' },
      { type: 'image', src: 'https://placehold.co/800x450.png', alt: 'App screenshot', hint: 'mobile interface' },
      { type: 'heading', content: 'Design Philosophy' },
      { type: 'paragraph', content: 'The design uses soft colors, minimalist icons, and gentle animations to create a tranquil and immersive experience.' },
    ]
  },
  {
    id: 'project-c',
    slug: 'project-gamma',
    title: 'Project Gamma',
    shortDescription: 'A data visualization dashboard for SaaS companies.',
    description: 'Project Gamma provides SaaS companies with a powerful and intuitive dashboard to visualize key metrics and gain actionable insights. The focus was on clarity, usability, and performance.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data dashboard',
    technologies: ['D3.js', 'Next.js', 'Sketch'],
    liveLink: '#',
    repoLink: '#',
    storyline: [
      { type: 'heading', content: 'The Problem' },
      { type: 'paragraph', content: 'SaaS companies are awash in data but often struggle to extract meaningful insights quickly. Project Gamma solves this by presenting complex data in an easily digestible format.' },
      { type: 'heading', content: 'Key Features' },
      { type: 'list', items: ['Customizable dashboards', 'Real-time data updates', 'Interactive charts and graphs', 'Anomaly detection'] },
    ]
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Design',
    icon: Palette,
    skills: [
      { name: 'UI/UX Design', level: 95 },
      { name: 'Interaction Design', level: 90 },
      { name: 'Prototyping', level: 92 },
      { name: 'User Research', level: 88 },
      { name: 'Visual Design', level: 93 },
    ],
  },
  {
    name: 'Development',
    icon: Code,
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript (React, Next.js)', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Git & Version Control', level: 80 },
    ],
  },
  {
    name: 'Tools',
    icon: Briefcase,
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'Adobe XD', level: 90 },
      { name: 'Sketch', level: 85 },
      { name: 'Adobe Illustrator', level: 80 },
      { name: 'Jira & Confluence', level: 82 },
    ],
  },
];

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
    logoHint: 'tech logo'
  },
  {
    id: 'exp2',
    company: 'Creative Minds Agency',
    role: 'UI/UX Designer',
    period: 'Jun 2017 - Dec 2019',
    timeline: '2017-2019',
    achievements: [
      'Designed and launched 10+ websites and mobile apps for diverse clients.',
      'Consistently received positive client feedback for creativity and attention to detail.',
      'Contributed to a 40% growth in the agency’s design portfolio.',
    ],
    storyline: 'During my time at Creative Minds, I worked on a wide array of projects, from startups to established brands. This fast-paced environment honed my ability to quickly understand client needs and deliver high-quality designs under tight deadlines. I particularly enjoyed the challenge of crafting unique brand identities and user experiences that resonated with target audiences.',
    logoUrl: 'https://placehold.co/100x100.png',
    logoHint: 'creative agency'
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-future-of-design-thinking',
    title: 'The Future of Design Thinking in a Tech-Driven World',
    date: '2024-07-15',
    excerpt: 'Exploring how design thinking methodologies are evolving with advancements in AI and other technologies.',
    content: [
      { type: 'paragraph', content: 'Design thinking has long been a cornerstone of innovation, providing a human-centered approach to problem-solving. As technology, particularly Artificial Intelligence (AI), continues its rapid advancement, the landscape of design thinking is set for a transformative shift. How will these methodologies adapt, and what new opportunities will arise for designers?' },
      { type: 'image', src: 'https://placehold.co/800x400.png', alt: 'AI and design thinking concept', hint: 'AI design' },
      { type: 'heading', content: 'AI as a Design Partner' },
      { type: 'paragraph', content: 'Instead of viewing AI as a replacement for designers, we should see it as a powerful partner. AI can automate repetitive tasks, analyze vast amounts of user data to uncover insights, and even generate initial design concepts. This frees up designers to focus on higher-level strategic thinking, empathy, and creativity – areas where human intuition excels.' },
      { type: 'heading', content: 'Ethical Considerations' },
      { type: 'paragraph', content: 'With great power comes great responsibility. The integration of AI into design processes also brings new ethical challenges. Designers must be vigilant about issues like bias in algorithms, data privacy, and the potential for AI-driven designs to manipulate users. A renewed focus on ethical design principles will be paramount.' },
      { type: 'list', items: ['The role of empathy in an AI world.', 'Data-driven vs. intuition-led design.', 'Upskilling for future design roles.'] },
      { type: 'paragraph', content: 'The future is not about AI versus human designers, but AI *with* human designers. By embracing these new tools thoughtfully and ethically, we can unlock unprecedented levels of innovation and create even more meaningful and impactful user experiences.' },
    ],
    tags: ['Design Thinking', 'AI', 'Future of Design', 'Technology'],
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'futuristic design'
  },
  {
    slug: 'minimalism-in-ui-ux',
    title: 'The Power of Minimalism in UI/UX Design',
    date: '2024-06-28',
    excerpt: 'A deep dive into why less is often more when it comes to creating effective and engaging user interfaces.',
    content: [
      { type: 'paragraph', content: 'In a world saturated with information and visual stimuli, minimalism in UI/UX design offers a breath of fresh air. It’s more than just an aesthetic trend; it’s a philosophy centered on clarity, purpose, and user focus. But what makes minimalist design so powerful, and how can it be effectively implemented?' },
      { type: 'heading', content: 'Clarity and Focus' },
      { type: 'paragraph', content: 'Minimalist interfaces remove unnecessary clutter, allowing users to focus on the core content and functionality. By prioritizing essential elements and employing generous white space, designers can guide the user’s attention and make interactions more intuitive.' },
      { type: 'image', src: 'https://placehold.co/800x400.png', alt: 'Minimalist UI example', hint: 'minimalist interface' },
      { type: 'heading', content: 'Improved Performance' },
      { type: 'paragraph', content: 'Fewer elements typically mean faster loading times and smoother performance, especially on mobile devices. This contributes significantly to a positive user experience and can impact conversion rates and user retention.' },
      { type: 'heading', content: 'Timeless Appeal' },
      { type: 'paragraph', content: 'While design trends come and go, the principles of minimalism – clarity, balance, and purposeful design – tend to endure. A well-executed minimalist design can remain relevant and effective for years.' },
      { type: 'paragraph', content: 'Achieving true minimalism is not about stripping everything away; it’s about making intentional choices to include only what is truly necessary to achieve the user’s goals and communicate the intended message effectively.' },
    ],
    tags: ['Minimalism', 'UI Design', 'UX Design', 'User Experience'],
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'clean design'
  },
];

// Social links for footer
export const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/priyanshu', icon: Feather }, // Using Feather as placeholder
  { name: 'GitHub', url: 'https://github.com/priyanshu', icon: Code },
  { name: 'Dribbble', url: 'https://dribbble.com/priyanshu', icon: Palette },
];
