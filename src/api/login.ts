import express from "express";
var router = express.Router();

router.post("/", (req: express.Request, res: express.Response) => {
  if (req.body.id === "jihunhyun" && req.body.pw === "1q2w3e4r!") {
    res.json({ success: true, data: req.body });
  } else {
    res.status(403);
    res.json({ success: false, message: "Invalid ID or PW" });
  }
});

module.exports = router;
