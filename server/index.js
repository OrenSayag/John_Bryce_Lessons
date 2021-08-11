<<<<<<< HEAD
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

=======
// imports
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

// init
const app = express()
dotenv.config()

// middleweres
app.use(cors())
app.use(express.json())
app.use("/auth", require('./routes/auth'))
app.use("/cart", require('./routes/cart'))
app.use("/products", require('./routes/products'))

// route
app.get('/', (req,res)=>res.send("<h1>Welcome</h1>"))

// run the server
app.listen(1000, ()=>console.log("rockin'1000 go visit on http://localhost:1000"))
>>>>>>> ff0ee525d3e6a087ea82a9a4be0efc2195fa1852
