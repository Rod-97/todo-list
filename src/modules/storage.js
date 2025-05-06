export function saveToLocalStorage(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadFromLocalStorage() {
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects) return JSON.parse(storedProjects);
  return [];
}

export function clearLocalStorage() {
  localStorage.removeItem("projects");
}
