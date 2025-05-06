import "./styles.css";
import { Todo } from "./modules/todo";
import { Project } from "./modules/project";
import { AppController } from "./modules/app-controller";
import { clearLocalStorage } from "./modules/storage";
/*
const todo1 = new Todo(
  "Complete to-do list",
  "Description",
  new Date("2025-05-05"),
  "High"
);
const todo2 = new Todo(
  "Learn Algorithms",
  "Practice textbook",
  new Date("2025-06-06"),
  "Medium"
);
*/

clearLocalStorage();

const app = new AppController();
app.loadInitialData();
app.addProject("Project 1");
app.addProject("Project 2");
app.addProject("Project 3");
