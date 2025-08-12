const fs = require("fs");
const path = require("path");

const mappingPath = path.join(__dirname, "../mapping.json");

let mapping = JSON.parse(fs.readFileSync(mappingPath, "utf8"));

function getMapping() {
  return mapping;
}

module.exports = { getMapping };
