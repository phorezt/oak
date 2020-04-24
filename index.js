const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("oak"));

app.listen(port, () =>
  console.log(`Oak app listening at http://localhost:${port}`)
);
