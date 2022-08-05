var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.post("/contact", urlEncodedParser, (req, res) => {
  console.log(req.body);
});
