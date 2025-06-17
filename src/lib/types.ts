import type { LucideIcon } from 'lucide-react';

// NavLink definition is now in data.ts as it's simpler

// Project types (old, for reference, might be removed if not used by other pages)
export type ProjectStorylineItem = 
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string; hint: string }
  | { type: 'list'; items: string[] };

export interface LegacyProject { // Renamed to avoid conflict if new page needs 'Project'
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

// Skill types (old)
export interface LegacySkill {
  name: string;
  level: number; 
}

export interface LegacySkillCategory {
  name: string;
  iconName: string; 
  skills: LegacySkill[];
}

// Experience types
export interface WorkExperienceEntry {
  role: string;
  company: string;
  companyLink?: string;
  period: string;
  description: string[];
}

export interface LegacyExperience {
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

// Blog types (old)
export type BlogPostContentItem = 
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string; hint: string }
  | { type: 'list'; items: string[] };

export interface LegacyBlogPost {
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

// New, simpler types will be inferred from data.ts structures if not explicitly defined here.
// For example, HeroData, ProjectEntry, SkillArea, EducationEntry, NavLink, SocialLinkInfo
// are defined as interfaces directly in data.ts for clarity in this refactor.
// If these types were to be used across many files, defining them here would be better.

