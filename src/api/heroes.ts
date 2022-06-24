var express = require("express");
var router = express.Router();
var Hero = require("../models/hero");

router.get("/", function (req: any, res: any, next: any) {
  res.json({ success: true, data: "success" });
});

module.exports = router;
