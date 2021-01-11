// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const fs = require("fs");

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
  // response.sendFile(__dirname + "/views/working.html");
});

app.get("/home", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
  // response.sendFile(__dirname + "/views/working.html");
});


app.get("/order", function(request, response) {
  response.sendFile(__dirname + "/views/order.html");
  // response.sendFile(__dirname + "/views/working.html");
});

app.get("/ping", function(request, response) {
  response.sendStatus(200);
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/views/404.html");
});

// helper function that prevents html/css/script malice
const cleanseString = function(string) {
  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
