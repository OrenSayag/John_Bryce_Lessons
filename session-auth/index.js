const express = require('express')
const session = require('express-session')
const app = express()

app.use(express.json())

app.use(session({
  secret: 'BlAhBlAhBlAh', 
  cookie:{
    maxAge: 4*60*1000,
    httpOnly: true,
    secure: false,
  },
  saveUninitialized: true,
  resave: true,
  name: 'my-session', //defaultively it would be the id of the session.
}))

app.use('/auth', require('./routes/auth')) // not a part of the template

app.get('/', (req, res)=>{
  res.send('welocme ot my api')
})

app.listen(2000, ()=>{
  console.log('server is up on port 2000')
})

/////// ^^^^^^^^^^^^^^^^^^ THE TEMPLATE