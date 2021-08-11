const express = require("express");
const app = express();
const port = 666;
require("./DB/config");

//MIDDLEWARE
app.use(require("cors")());
app.use(express.json());

//ROUTES
app.use("/details", require("./routes/details"));
app.use("/actions", require("./routes/actions"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

