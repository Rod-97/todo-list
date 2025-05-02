import "./styles.css";
import { Todo } from "./todo";

const todo = new Todo(
  "Complete to-do list",
  "Description",
  new Date("2025-05-05"),
  "High"
);

console.log(todo);
