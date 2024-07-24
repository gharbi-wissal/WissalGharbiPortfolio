// data.ts

export interface Section<T> {
  sectionName: string;
  entries?: T[];
}

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  environment: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  notes?: string;
}

export interface Skills {
  sectionName: string;
  languages: string[];
  frameworks: string[];
  database: string[];
  os: string[];
}

export interface Certifications {
  sectionName: string;
  entries: string[];
}

export interface Languages {
  sectionName: string;
  entries: string[];
}

export interface About {
  sectionName: string;
  name: string;
  title: string;
  location: string;
  background: string;
  description: string;
}

export interface Contact {
  sectionName: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface DataModel {
  about: About;
  contact: Contact;
  experience: Section<ExperienceEntry>;
  education: Section<EducationEntry>;
  skills: Skills;
  certifications: Certifications;
  languages: Languages;
}
