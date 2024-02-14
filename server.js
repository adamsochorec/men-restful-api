const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

require("dotenv-flow").config();

// route
app.get("/api/welcome", (req, res) => {
  res.status(200).send({ message: "Welcome to the MEN RESTFUL API" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log("Server is running on port: ", +PORT);
});

module.exports = app;
