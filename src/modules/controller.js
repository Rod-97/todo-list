export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.loadFromLocalStorage();
    this.view.renderAllProjects(this.model.projects);
    this.view.bindCreateProject(this.handleCreateProject.bind(this));
    this.view.bindDeleteProject(this.handleDeleteProject.bind(this));
  }

  handleCreateProject(name) {
    const newProject = this.model.createProject(name);
    this.view.renderProject(newProject);
  }

  handleDeleteProject(projectId) {
    this.model.removeProject(projectId);
  }
}
