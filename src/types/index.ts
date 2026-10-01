export interface PersonalInfo {
  name: string;
  titles: string[];
  headline: string;
  summary: string;
  location: string;
  phone: string;
  email: string;
  status: string;
  languages: string[];
}

export interface MetricCard {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export type SkillLevel = 'Working Knowledge' | 'Intermediate' | 'Familiar';

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Data Manipulation & Analysis' | 'Databases' | 'Business Intelligence' | 'Statistical Methods';
  level: SkillLevel;
  iconName: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
  keyOutcomes: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  highlights: string[];
  synergyWithData: string;
}

export interface CertificationItem {
  name: string;
  organization: string;
  year: string;
  badge: string;
  skillsCovered: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  businessProblem: string;
  technologies: string[];
  analyticalProcess: {
    step: string;
    description: string;
  }[];
  keyInsights: string[];
  outcome: string;
  datasetContext: string;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  tools: string[];
  description: string;
  iconName: string;
}
