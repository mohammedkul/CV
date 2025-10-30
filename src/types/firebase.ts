export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  avatar?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  createdAt?: number;
  updatedAt?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  order?: number;
  startDate?: string;
  endDate?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  technologies?: string[];
  role?: string;
  teamSize?: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level?: number; // 0-100
  icon?: string;
  order?: number;
  yearsOfExperience?: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  order?: number;
  icon?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  gpa?: string;
  description?: string;
  achievements?: string[];
  logo?: string;
  order?: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  logo?: string;
  skills?: string[];
  order?: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  content: string;
  rating?: number;
  date?: string;
  featured?: boolean;
  order?: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  achievements?: string[];
  technologies?: string[];
  logo?: string;
  order?: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  author?: string;
  publishedDate: string;
  tags?: string[];
  category?: string;
  readTime?: number;
  views?: number;
  featured?: boolean;
  externalUrl?: string;
  createdAt?: number;
  updatedAt?: number;
}

// Database response types
export interface FirebaseResponse<T> {
  [key: string]: T;
}