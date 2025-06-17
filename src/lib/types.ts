
import type { LucideIcon } from 'lucide-react';

// NavLink definition is now in data.ts as it's simpler

// Project types
export type ProjectStorylineItem = 
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string; hint: string }
  | { type: 'list'; items: string[] };

export interface Project { // Renamed from LegacyProject
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  storyline: ProjectStorylineItem[];
}

// Skill types
export interface Skill { // Renamed from LegacySkill
  name: string;
  level: number; 
}

export interface SkillCategory { // Renamed from LegacySkillCategory
  name: string;
  iconName: string; 
  skills: Skill[];
}

// Experience types
export interface WorkExperienceEntry { // This is the current structure used for the single page
  role: string;
  company: string;
  companyLink?: string;
  period: string;
  description: string[]; // List of achievements/responsibilities
}

export interface Experience { // Renamed from LegacyExperience, for detailed experience page if needed
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

// Blog types
export type BlogPostContentItem = 
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string; hint: string }
  | { type: 'list'; items: string[] };

export interface BlogPost { // Renamed from LegacyBlogPost
  slug: string;
  title: string;
  date: string; 
  excerpt: string;
  content: BlogPostContentItem[];
  tags: string[];
  coverImage: string;
  coverImageHint: string;
}

// SocialLink definition is now in data.ts (SocialLinkInfo)

// Simpler types for the single-page portfolio (as per kinseygross.com style)
// These were defined in data.ts previously, but good to have clear type names here too.
export interface HeroData {
  name: string;
  tagline: string;
  location: string;
  email: string;
  gitlab: string;
  github: string;
  linkedin: string;
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
export interface EducationEntry { // Simple education entry for homepage
  degree: string;
  institution: string;
  period: string;
  details?: EducationDetail[];
}

export interface SocialLinkInfo {
  name: string;
  url: string;
  icon: LucideIcon;
}
