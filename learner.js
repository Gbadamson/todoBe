//Instantiating the express framework
const express = require("express");
//creating a dummy routing port
const port = 2221;
//Calling on the class of file sytem, a module in the express framework
const fs = require("fs");
//Initailizing the instance of the class of express
const app = express();

//this is to do a get request from the server
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
//We are creating this so that we can be able to update a file on the todo server
app.put("/todo/:id/done", (req, res) => {
  const id = req.params.id;

  const findtodo = (todo, id) => {
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].id === parseInt(id)) {
        return i;
      }
    }
    return -1;
  };

  fs.readFile("./Store/todo.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Oops! Server is displaying errors");
    }
    let todo = JSON.parse(data);
    const todoIndex = findtodo(todo, id);

    if (todoIndex === -1) {
      return res.status(404).send("Error!!!, Page not found");
    }

    todo[todoIndex].complete = true;

    fs.writeFile("./Store/todo.json", JSON.stringify(todo), () => {
      return res.json({ status: "ok" });
    });
  });
});

app.listen(port, () => {
  console.log("We are doing fine");
});
