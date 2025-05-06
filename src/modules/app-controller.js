import { Project } from "./project";
import { loadFromLocalStorage, saveToLocalStorage } from "./storage";
import { renderProjects } from "./dom";

export class AppController {
  constructor() {
    this.projects = [];
  }

  loadInitialData() {
    const data = loadFromLocalStorage();

    data.forEach((projectData) => {
      const project = new Project(projectData.name);
      this.projects.push(project);
    });

    renderProjects(this.projects);
  }

  addProject(name) {
    const newProject = new Project(name);
    this.projects.push(newProject);
    saveToLocalStorage(this.projects);
    renderProjects(this.projects);
  }
}
