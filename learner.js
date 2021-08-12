const express = require("express");
const port = 2221;
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello User, this is a fun project");
});
app.get("/todo", (req, res) => {
  fs.readFile("./Store/todo.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Oops! something seems not to be right");
    }
    const todo = JSON.parse(data);
    return res.json({ todo: todo });
  });
});

app.listen(port, () => {
  console.log("We are doing fine");
});
