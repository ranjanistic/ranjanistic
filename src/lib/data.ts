
import type { LucideIcon } from 'lucide-react';
import { 
  Linkedin, Github, Gitlab, Palette, Code as CodeIcon, Settings, Users, MessageCircle, Briefcase, GraduationCap, LayoutDashboard, Wand2, BookOpen, Download, ExternalLink, Mail, MapPin, Phone, Lightbulb, CheckCircle
} from 'lucide-react';
import type { 
  WorkExperienceEntry, NavLink, HeroData, ProjectEntry, SkillArea, EducationEntry, SocialLinkInfo, Project, SkillCategory, Skill, EducationDetail
} from '@/lib/types';

// Attempt to import generated data
let generatedData;
try {
  generatedData = require('./generated-data.json');
} catch (error) {
  console.warn("generated-data.json not found. Using fallback empty data. Run build to generate.");
  generatedData = {
    heroData: {},
    navLinksData: [],
    socialLinksFooter: [],
    workExperienceData: [],
    projectData: [],
    projects: [],
    skillsData: [],
    skillCategories: [],
    educationData: [],
  };
}

const iconMap: Record<string, LucideIcon> = {
  Linkedin,
  Github,
  Gitlab,
  Palette,
  Code: CodeIcon,
  Settings,
  Users,
  MessageCircle,
  Briefcase,
  LayoutDashboard,
  Wand2,
  GraduationCap,
  BookOpen,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Lightbulb,
  CheckCircle
  // Add other icons used in data if necessary
};

export const heroData: HeroData = generatedData.heroData || {
  name: 'Priyanshu Ranjan',
  tagline: 'Loading tagline...',
  location: 'Noida, UP (India)',
  email: 'priyanshuranjan88@gmail.com',
  gitlab: 'https://gitlab.com/ranjanistic',
  github: 'https://github.com/ranjanistic',
  linkedin: 'https://linkedin.com/in/ranjanistic',
};

export const navLinksData: NavLink[] = generatedData.navLinksData || [
  { href: '/#top', label: 'Priyanshu R.' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
  { href: '/#contact', label: 'Contact' },
];

export const socialLinksFooter: SocialLinkInfo[] = (generatedData.socialLinksFooter || []).map((link: any) => ({
  name: link.name,
  url: link.url,
  icon: iconMap[link.iconName as keyof typeof iconMap] || MessageCircle, // Fallback icon
}));

export const workExperienceData: WorkExperienceEntry[] = (generatedData.workExperienceData || []).map((exp: any) => ({
  role: exp.role,
  company: exp.company,
  companyLink: exp.companyLink,
  period: exp.period,
  description: Array.isArray(exp.description) ? exp.description : (exp.descriptionItems ? String(exp.descriptionItems).split(';;').map(s => s.trim()) : [])
}));

export const projectData: ProjectEntry[] = generatedData.projectData || []; // For homepage

export const projects: Project[] = (generatedData.projects || []).map((p: any) => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  shortDescription: p.shortDescription,
  description: p.description,
  imageUrl: p.imageUrl,
  imageHint: p.imageHint,
  technologies: Array.isArray(p.technologies) ? p.technologies : (p.technologies ? String(p.technologies).split(',').map(t => t.trim()) : []),
  liveLink: p.liveLink,
  repoLink: p.repoLink,
  storyline: Array.isArray(p.storyline) ? p.storyline : [],
}));

export const skillsData: SkillArea[] = generatedData.skillsData || []; // For homepage

export const skillCategories: SkillCategory[] = (generatedData.skillCategories || []).map((category: any) => ({
  name: category.name,
  iconName: category.iconName, // The component will handle mapping this string to an icon
  skills: Array.isArray(category.skills) ? category.skills.map((skill: any) => ({
      name: skill.name,
      level: Number(skill.level) || 0,
  })) : [],
}));

export const educationData: EducationEntry[] = (generatedData.educationData || []).map((edu: any) => ({
  degree: edu.degree,
  institution: edu.institution,
  period: edu.period,
  details: Array.isArray(edu.details) ? edu.details.map((detail: any) => ({
      projects: detail.projects,
      projectLink: detail.projectLink,
      projectLinkText: detail.projectLinkText,
      specialization: detail.specialization,
  })) : [],
}));

// No blogPosts data as it was removed
