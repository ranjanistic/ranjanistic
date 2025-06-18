
import type { LucideIcon } from 'lucide-react';

// Project types
export type ProjectStorylineItem = 
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string; hint?: string } // hint is optional
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
  detail?: string; // For proficiency level like "Professional Working"
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
  location?: string;
  description: string[];
  imageUrls?: string[]; // Changed from imageUrl
  imageHints?: string[]; // Changed from imageHint
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

// General types for portfolio structure
export interface HeroData {
  name: string;
  title?: string; // e.g., "Technology Leadership, Software Development | Physics Major"
  tagline: string; // More detailed summary
  summary?: string; // Short bio for about section
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
  imageUrl?: string;
  imageHint?: string;
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
  campus?: string;
  details?: EducationDetail[];
}

export interface SocialLinkInfo {
  name: string;
  url: string;
  icon: LucideIcon; 
  iconName?: string; 
}

// GitHub API Types
export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description?: string | null;
  stargazers_count: number;
  forks_count: number;
  language?: string | null;
  updated_at: string;
}

// New Types
export interface Certification {
  name: string;
  issuingOrganization?: string;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl?: string;
  imageHint?: string;
}

export interface HonorAward {
  title: string;
  associatedWith?: string;
  date?: string;
  description?: string;
}
