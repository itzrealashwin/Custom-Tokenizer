const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://custom-tokenizer-api-reference.vercel.app'
];

// CORS middleware with explicit OPTIONS handler
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

app.post('/api/encode', (req, res) => {
  // Your encoding logic here
  res.json({ message: "Encode API working!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
