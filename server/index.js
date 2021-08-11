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