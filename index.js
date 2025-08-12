const express = require("express");
const cors = require("cors");

const app = express();
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://custom-tokenizer-api-reference.vercel.app',
    'http://localhost:3000'
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204); // respond OK to preflight
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
