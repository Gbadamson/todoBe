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
app.put("");

app.listen(port, () => {
  console.log("We are doing fine");
});
