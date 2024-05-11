const express = require("express");
const assistintController = require("../Controllers/assistintController");

const router = express.Router();

router.post("/", assistintController.CreateAssistint);

module.exports = router;
