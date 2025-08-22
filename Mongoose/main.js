import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let con = await mongoose.connect(
  "mongodb+srv://faijan:1234@cluster0.ut6ef5c.mongodb.net/todo"
);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const toso = new Todo({
    title: "Hey This First Todo",
    desc: "Description of Todo",
    isDone: false,
    days: "4",
  });
  toso.save();
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
