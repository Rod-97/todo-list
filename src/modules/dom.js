export function renderProjects(projectsData) {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const projects = document.createElement("div");

  projectsData.forEach((projectData) => {
    const project = document.createElement("div");
    project.textContent = projectData.name;
    projects.appendChild(project);
  });

  content.appendChild(projects);
}
