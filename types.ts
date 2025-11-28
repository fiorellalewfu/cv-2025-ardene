export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: { url: string; display: string };
  portfolio: { url: string; display: string };
  location: string;
}

export interface HeaderData {
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  pill: string;
  contact: ContactInfo;
}

export interface ProfileSectionData {
  title: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface SkillsSectionData {
  title: string;
  groups: SkillGroup[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  dates: string;
  tasks: string[];
}

export interface ExperienceSectionData {
  title: string;
  items: ExperienceItem[];
}

export interface EducationItem {
  title: string;
  meta: string;
  tasks?: string[]; // For Formation professionnelle
}

export interface EducationSectionData {
  title: string;
  items: EducationItem[];
}

export interface InterestsSectionData {
  title: string;
  description: string;
}

export interface CVData {
  header: HeaderData;
  profile: ProfileSectionData;
  skills: SkillsSectionData;
  experience: ExperienceSectionData;
  professionalEducation: EducationSectionData;
  academicEducation: EducationSectionData;
  interests: InterestsSectionData;
}
