export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
  featured?: boolean;
  caseStudy?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface MetricStat {
  label: string;
  value: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    headline: string;
    bio: string[];
    location: string;
    status: {
      available: boolean;
      text: string;
    };
    socials: {
      github: string;
      linkedin?: string;
      twitter?: string;
      email: string;
      resumeUrl?: string;
    };
  };
  stats?: MetricStat[];
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
}
