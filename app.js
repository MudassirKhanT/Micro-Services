const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.get("/", (req, res) => {
  for (let i = 0; i < 1000000000; i++) {}
  res.send("Hello World");
});
app.get("/stress-test", (req, res) => {
  for (let i = 0; i < 1000000000; i++) {}
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on the port : 3000");
});
