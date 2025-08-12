const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json());

app.post('/api/encode', (req, res) => {
  // Your encoding logic here
  res.json({ message: "Encode API working!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
