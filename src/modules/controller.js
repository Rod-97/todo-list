export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.loadFromLocalStorage();
    this.selectedProject = this.model.projects[0] || null;
    this.view.renderAllProjects(this.model.projects, this.selectedProject);
    this.view.bindCreateProject(this.handleCreateProject.bind(this));
    this.view.bindDeleteProject(this.handleDeleteProject.bind(this));
    this.view.bindSelectProject(this.handleSelectProject.bind(this));
  }

  handleCreateProject(name) {
    const newProject = this.model.createProject(name);
    this.view.renderProject(newProject);
  }

  handleDeleteProject(projectId) {
    if (this.selectedProject && this.selectedProject.id === projectId) {
      this.selectedProject =
        this.model.projects.length > 0 ? this.model.projects[0] : null;
    }
    this.model.removeProject(projectId);
  }

  handleSelectProject(projectId) {
    const newSelectedProject = this.model.projects.find(
      (project) => project.id === projectId
    );

    if (newSelectedProject) {
      this.selectedProject = newSelectedProject;
      return newSelectedProject.id;
    }

    return null;
  }
}
