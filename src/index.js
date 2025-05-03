import "./styles.css";
import { Todo } from "./todo";
import { Project } from "./project";

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

const project = new Project("Programming");

project.addTodo(todo1);
project.addTodo(todo2);

console.log(project);
