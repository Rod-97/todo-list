import { Controller } from "./modules/controller";
import { Model } from "./modules/model";
import { View } from "./modules/view";
import "./styles.css";

const app = new Controller(new Model(), new View());
