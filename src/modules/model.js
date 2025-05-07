export class Model {}

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

function saveToLocalStorage(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function loadFromLocalStorage() {
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects) return JSON.parse(storedProjects);
  return [];
}

function clearLocalStorage() {
  localStorage.removeItem("projects");
}
