const express = require("express");
const { tokenizeText, detokenizeText } = require("../controllers/tokenController");

const router = express.Router();

router.post("/encode", tokenizeText);
router.post("/decode", detokenizeText)
module.exports = router;
