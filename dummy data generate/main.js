import express from "express";
import mongoose from "mongoose";
import { Employee } from "./models/Employee.js";

let conn = mongoose.connect(
  "mongodb+srv://faijan:1234@cluster0.ut6ef5c.mongodb.net/company"
);
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
};

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
  //clear the collection employee
  await Employee.deleteMany({});

  //generate random data
  let randomNames = [
    "Faijan",
    "Salman",
    "SRK",
    "Sohan",
    "Ayesha",
    "Ravi",
    "Priya",
    "Aman",
    "Simran",
    "Karan",
  ];

  let randomLang = [
    "React.js",
    "Python",
    "Node.js",
    "Java",
    "C++",
    "Django",
    "Next.js",
    "Flutter",
    "MongoDB",
    "TypeScript",
  ];

  let randomCities = [
    "Anand",
    "Vadodra",
    "Surat",
    "Basti",
    "Ahmedabad",
    "Rajkot",
    "Delhi",
    "Mumbai",
    "Pune",
    "Lucknow",
  ];

  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randomLang),
      city: getRandom(randomCities),
      isManager: Math.random() > 0 ? true : false,
    });
    console.log(e);
  }
  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
