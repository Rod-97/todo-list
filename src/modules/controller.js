export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.loadFromLocalStorage();
    this.view.renderProjects(this.model.projects);
  }
}
