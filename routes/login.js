const express = require("express");
const router = express.Router();

const auth = require("../controllers/loginControl");

router.post("/login", auth.sign);
router.get("/login", auth.loginIndex);

module.exports = router;
