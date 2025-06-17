import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export type ProjectStorylineItem = 
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string; hint: string }
  | { type: 'list'; items: string[] };


export interface Project {
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

export interface Skill {
  name: string;
  level: number; // Percentage 0-100
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Experience {
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

export type BlogPostContentItem = 
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string; hint: string }
  | { type: 'list'; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  content: BlogPostContentItem[];
  tags: string[];
  coverImage: string;
  coverImageHint: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
