export class Model {
  constructor() {
    this.projects = [];
  }

  findProject(projectId) {
    this.projects.find((p) => p.id === projectId);
  }

  createProject(projectName) {
    const newProject = new Project(projectName);
    this.projects.push(newProject);
    this.saveToLocalStorage();
  }

  removeProject(projectId) {
    this.projects = this.projects.filter((p) => p.id !== projectId);
    this.saveToLocalStorage();
  }

  createTodo(projectId, title, description, dueDate, priority) {
    const newTodo = new Todo(title, description, dueDate, priority);
    const project = this.findProject(projectId);
    project.push(newTodo);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  loadFromLocalStorage() {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) return JSON.parse(storedProjects);
    return [];
  }
}

class Project {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  getAllTodos() {
    return this.todos;
  }

  findTodoById(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
  }

  toggleCompletion() {
    this.done = !this.done;
  }
}
