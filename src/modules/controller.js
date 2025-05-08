export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.loadFromLocalStorage();
    this.view.renderProjects(this.model.projects);
    this.view.bindCreateProject(this.handleCreateProject.bind(this));
  }

  handleCreateProject(name) {
    this.model.createProject(name);
    this.view.renderProjects(this.model.projects);
  }
}
