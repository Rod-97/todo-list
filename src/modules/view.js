export class View {
  constructor() {
    this.createProjectBtn = document.querySelector("#create-project-btn");
    this.projectsContainer = document.querySelector("#projects-container");
    this.todosContainer = document.querySelector("#todos-container");
  }

  renderProject(project) {
    const projectDiv = document.createElement("div");
    const projectName = document.createElement("p");
    const closeSpan = document.createElement("span");
    projectDiv.classList.add("project");
    projectDiv.classList.add(project.id);
    closeSpan.classList.add("close-span");
    projectName.textContent = project.name;
    closeSpan.textContent = "\u2716";
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(closeSpan);
    this.projectsContainer.appendChild(projectDiv);
  }

  renderAllProjects(projects) {
    projects.forEach((project) => this.renderProject(project));
  }

  bindCreateProject(handler) {
    this.createProjectBtn.addEventListener("click", () => {
      const projectName = prompt("Enter project name");
      if (projectName) handler(projectName);
    });
  }

  bindDeleteProject(handler) {
    const closeSpans = document.querySelectorAll(".close-span");
    closeSpans.forEach((closeSpan) => {
      closeSpan.addEventListener("click", () => {
        const confirmation = prompt(
          "Are you sure you want to delete this project? (yes/no)"
        );
        if (confirmation.toLowerCase() !== "yes") return;
        const projectDiv = closeSpan.parentElement;
        const projectId = projectDiv.classList[1];
        handler(projectId);
        projectDiv.remove();
      });
    });
  }
}
