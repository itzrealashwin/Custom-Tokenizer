const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const tokenRoutes = require("./routes/tokenRoutes");

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", tokenRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
