//imports
const express = require('express')

//init
const app = express()
require('dotenv').config()
const port = process.env.PORT || 1000

//middlewares
app.use(express.json())
app.use('/todos', require('./routes/todos'))



app.listen(port, ()=>{
  console.log('server is running on '+port)
})

