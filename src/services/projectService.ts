import { Project } from "../types/Project";
import projectsData from "../data/projects.json";

export class ProjectService {
  static getAllProjects(): Project[] {
    return projectsData as Project[];
  }

  static getFeaturedProjects(): Project[] {
    return projectsData.filter(project => project.featured) as Project[];
  }

  static getProjectsByCategory(category: string): Project[] {
    return projectsData.filter(project => project.category === category) as Project[];
  }

  static getProjectsByYear(year: string): Project[] {
    return projectsData.filter(project => project.date === year) as Project[];
  }

  static getProjectsByTechStack(tech: string): Project[] {
    return projectsData.filter(project => 
      project.techStack.some(techItem => 
        techItem.toLowerCase().includes(tech.toLowerCase())
      )
    ) as Project[];
  }
} 