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
      projectsContainer.appendChild(projectDiv);
    });
    this.content.appendChild(projectsContainer);
  }

  bindCreateProject(handler) {
    this.createProjectBtn.addEventListener("click", () => {
      const projectName = prompt("Enter project name");
      if (projectName) handler(projectName);
    });
  }
}
