export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  link?: string;
  github?: string;
  featured?: boolean;
  image?: string; // ← image URL or local path
}

export interface Paper {
  id: string;
  title: string;
  abstract: string;
  venue: string;
  year: number;
  authors: string[];
  link?: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  link?: string;
  slug: string; // ← URL-friendly identifier
  content?: string; // ← full article content
}

export interface Skill {
  category: string;
  items: string[];
}
