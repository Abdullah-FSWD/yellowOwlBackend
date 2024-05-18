import express from "express";
import {
  addStudent,
  updateStudent,
  getStudent,
  deleteStudent,
} from "../controller/students-controller.js";
// import { updateStudent } from "../controller/students-controller.js";

const route = express.Router();

route.get("/", getStudent);

route.post("/addStudent", addStudent);

route.put("/:id", updateStudent);

route.delete("/delete/:id", deleteStudent);

export default route;
