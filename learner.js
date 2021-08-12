const express = require("express");
const port = 22311;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello User, this is a fun project");
});

app.listen(port, () => {
  console.log("We are doing fine");
});
