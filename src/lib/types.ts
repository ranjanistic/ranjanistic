
import type { LucideIcon } from 'lucide-react';

// Project types
export type ProjectStorylineItem = 
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string; hint?: string } // hint is optional from XLSX
  | { type: 'list'; items: string[] };

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  imageHint?: string; // hint is optional
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  storyline: ProjectStorylineItem[];
}

// Skill types
export interface Skill {
  name: string;
  level: number; 
}

export interface SkillCategory {
  name: string;
  iconName: string; // Stays as string, component will map to LucideIcon
  skills: Skill[];
}

// Experience types
export interface WorkExperienceEntry {
  role: string;
  company: string;
  companyLink?: string;
  period: string;
  description: string[];
}

export interface Experience { // For detailed experience page if ever needed
  id: string;
  company: string;
  role: string;
  period: string;
  timeline: string;
  achievements: string[];
  storyline: string;
  logoUrl?: string;
  logoHint?: string;
}

// Blog types (kept for potential future re-add, but not currently used)
export type BlogPostContentItem = 
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string; hint?: string }
  | { type: 'list'; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  date: string; 
  excerpt: string;
  content: BlogPostContentItem[];
  tags: string[];
  coverImage: string;
  coverImageHint?: string;
}

// General types for portfolio structure
export interface HeroData {
  name: string;
  tagline: string;
  location: string;
  email: string;
  gitlab?: string;
  github?: string;
  linkedin?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ProjectEntry { // Simple project entry for homepage
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export interface SkillArea { // Simple skill area for homepage
  title: string;
  skills: string; 
}

export interface EducationDetail {
  projects?: string;
  projectLink?: string;
  projectLinkText?: string;
  specialization?: string;
}
export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details?: EducationDetail[];
}

export interface SocialLinkInfo {
  name: string;
  url: string;
  icon: LucideIcon; // In data.ts, we map iconName string to this
  iconName?: string; // From JSON
}
