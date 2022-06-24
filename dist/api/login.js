"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.post("/", (req, res) => {
    if (req.body.id === "jihunhyun" && req.body.pw === "1q2w3e4r!") {
        res.json({ success: true, data: req.body });
    }
    else {
        res.status(403);
        res.json({ success: false, message: "Invalid ID or PW" });
    }
});
module.exports = router;
