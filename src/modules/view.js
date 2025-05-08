export class View {
  constructor() {
    this.content = document.querySelector("#content");
    this.createProjectBtn = document.querySelector("#create-project-btn");
  }

  renderProjects(projects) {
    const projectsContainer = document.createElement("div");
    projects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.textContent = project.name;
      console.log(project.todos);
      projectsContainer.appendChild(projectDiv);
    });
    this.content.appendChild(projectsContainer);
  }
}
