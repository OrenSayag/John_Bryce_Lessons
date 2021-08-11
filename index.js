const express = require("express")
const cors = require("cors")
const { connectToMongoDB } = require("./config/db")

const app = express()
connectToMongoDB()

app.use(cors())
app.use(express.json())
app.use("/api", require("./routes/api"))

app.get("/", (req, res)=>{
    return res.send("<h1>API DOCS</h1>")
})

app.listen(1000, ()=>{
  console.log("Rockin'1000")
})