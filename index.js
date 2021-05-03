const express = require('express')

const app = express()

app.use(express.json())

app.use('/auth', require('./routes/auth')) // routing
app.use('/secrets', require('./routes/secrets')) // routing

app.get('/', (req, res)=>{
  res.send('welocme ot my api')
})

app.listen(2000, ()=>{
  console.log('server is up on port 2000')
})

/////// ^^^^^^^^^^^^^^^^^^ THE TEMPLATE