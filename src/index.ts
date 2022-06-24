import express from "express";
import bodyParser from "body-parser";
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req: any, res: any, next: any) {
  // 1
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "content-type");
  next();
});
app.use("/", require("./api/heroes"));
app.use("/login", require("./api/login"));
var port = 8081;
app.listen(port, function () {
  console.log("server on http://localhost:" + port);
});
