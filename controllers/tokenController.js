const { getMapping } = require("../models/tokenModel");

function tokenizeText(req, res) {
  if (!req.body) {
    return res.status(400).json({ message: "Text is required" });
  }
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  const mapping = getMapping();
  const lowerText = text;
  const tokens = [];

  for (const char of lowerText) {
    let found = false;
    for (const [num, letters] of Object.entries(mapping)) {
      if (letters.includes(char)) {
        tokens.push(parseInt(num));
        found = true;
        break;
      }
    }
    if (!found) tokens.push(null);
  }

  res.json({ tokens });
}

function detokenizeText(req, res) {
      if (!req.body) {
    return res.status(400).json({ message: "Tokens are required"});
  }
  const { tokens } = req.body;
  if (!tokens || !Array.isArray(tokens)) {
    return res.status(400).json({ message: "Tokens array is required" });
  }

  const mapping = getMapping();
  let text = "";

  for (const token of tokens) {
    if (token === null || token === undefined) {
      text += "?";
      continue;
    }

    const letters = mapping[token.toString()];
    if (letters && letters.length > 0) {
      text += letters[0];
    } else {
      text += "?";
    }
  }

  res.json({ text });
}

module.exports = { detokenizeText, tokenizeText };
