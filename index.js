const express = require("express");
const bodyParser = require("body-parser");

const tokenRoutes = require("./routes/tokenRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api", tokenRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
