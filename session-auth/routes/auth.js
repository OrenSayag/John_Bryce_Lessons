const router = require('express').Router()

const users = [
  {
    id:Math.random(), 
    username:'Jo', 
    first_name: 'John',
    last_name: 'Johniel',
    password: 'blah',
    last_visit: Date.now(),
  }
]

router.post('/login', (req,res)=>{
  const {username, password} = req.body
  // make sure all info exists
  if (!username || !password){
    return res.status(400).send('missing some info')
  }
  
  //try to find the user
  
  const user = users.find(user=>user.username===username)
  
  // make sure username registered
  if(!user){
    return res.status(400).send('user not found')
  }
  
  // password match 
  if(user.password===password){
    return res.status(403).send('user not found')
  }

  //respond 
  
})

router.post('/register', (req,res)=>{
  const {username, first_name, last_name, password} = req.body

  // make sure all info exists
  if(!username || !first_name || !last_name || !password){
    return res.status(400).send('missing some info')
  }

  // make sure username is not taken
  if(users.some(user=>user.username==username)){
    return res.status(400).send('username is taken')
  }

  // add id and last_visit and push it to users array
  users.push({
    username, first_name, last_name, password,
    last_visit: Date.now(),
    id: Math.random(),
  })

  res.send(`success, ${users.length}th user! Welcome home ${first_name}`)

})



module.exports = router