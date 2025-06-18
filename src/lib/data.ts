
import type { LucideIcon } from 'lucide-react';
import { 
  Linkedin, Github, Gitlab, Palette, Code as CodeIcon, Settings, Users, MessageCircle, Briefcase, GraduationCap, LayoutDashboard, Wand2, BookOpen, Download, ExternalLink, Mail, MapPin, Phone, Lightbulb, CheckCircle
} from 'lucide-react';
import type { 
  WorkExperienceEntry, NavLink, HeroData, ProjectEntry, SkillArea, EducationEntry, SocialLinkInfo, Project, SkillCategory, Skill, EducationDetail
} from '@/lib/types';

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
};

// --- Default Fallback Data ---
const defaultHeroData: HeroData = {
  name: 'Priyanshu Ranjan',
  tagline: 'Forward-Thinking Design Expert & Developer',
  location: 'Noida, UP (India)',
  email: 'priyanshuranjan88@gmail.com',
  gitlab: 'https://gitlab.com/ranjanistic',
  github: 'https://github.com/ranjanistic',
  linkedin: 'https://linkedin.com/in/ranjanistic',
};

const defaultNavLinksData: NavLink[] = [
  { href: '/#top', label: 'Priyanshu R.' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
  { href: '/#contact', label: 'Contact' },
];

const defaultSocialLinksFooterRaw: Omit<SocialLinkInfo, 'icon'>[] = [
  { name: 'Linkedin', url: 'https://linkedin.com/in/ranjanistic', iconName: 'Linkedin' },
  { name: 'Github', url: 'https://github.com/ranjanistic', iconName: 'Github' },
  { name: 'Gitlab', url: 'https://gitlab.com/ranjanistic', iconName: 'Gitlab' },
];

const defaultSocialLinksFooter: SocialLinkInfo[] = defaultSocialLinksFooterRaw.map(link => ({
  ...link,
  icon: iconMap[link.iconName as keyof typeof iconMap] || MessageCircle,
}));

// Attempt to import generated data
let generatedData: any;
try {
  generatedData = require('./generated-data.json');
} catch (error) {
  console.warn("generated-data.json not found or is invalid. Using fallback data. Run build to generate.");
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

// --- Exported Data with Fallbacks ---
export const heroData: HeroData = 
  (generatedData.heroData && generatedData.heroData.name) 
  ? generatedData.heroData 
  : defaultHeroData;

export const navLinksData: NavLink[] = 
  (generatedData.navLinksData && generatedData.navLinksData.length > 0) 
  ? generatedData.navLinksData 
  : defaultNavLinksData;

export const socialLinksFooter: SocialLinkInfo[] = 
  (generatedData.socialLinksFooter && generatedData.socialLinksFooter.length > 0)
  ? (generatedData.socialLinksFooter || []).map((link: any) => ({
      name: link.name,
      url: link.url,
      icon: iconMap[link.iconName as keyof typeof iconMap] || MessageCircle,
    }))
  : defaultSocialLinksFooter;

// For other data types, provide similar robust fallbacks if they become critical
export const workExperienceData: WorkExperienceEntry[] = (generatedData.workExperienceData || []).map((exp: any) => ({
  role: exp.role,
  company: exp.company,
  companyLink: exp.companyLink,
  period: exp.period,
  description: Array.isArray(exp.description) ? exp.description : (exp.descriptionItems ? String(exp.descriptionItems).split(';;').map(s => s.trim()) : [])
}));

export const projectData: ProjectEntry[] = generatedData.projectData || [];

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

export const skillsData: SkillArea[] = generatedData.skillsData || [];

export const skillCategories: SkillCategory[] = (generatedData.skillCategories || []).map((category: any) => ({
  name: category.name,
  iconName: category.iconName,
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
