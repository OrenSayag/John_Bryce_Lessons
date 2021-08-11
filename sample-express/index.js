const express = require('express');
const fs = require('fs');

const app = express();

const countries = [
  'united states of america',
  'united arab emiraths',
  'israel',
  'hungary',
  'germany',
  'mexico',
  'isle of man',
  'china',
  'japan',
]

const users = [];

app.use(express.json())

app.listen(1000, ()=>console.log('server is running on port 1000'));

app.get('/name/:country', (req, res)=>{
  console.log(req.params.country)
  const filteredArray = countries.filter(country=>country.toLocaleLowerCase().includes(req.params.country))
  console.log(filteredArray)
  // res.send(filteredArray.map(item=>item)) //my experimental code
  res.status(201).send(filteredArray)
})


app.post('/register', (req, res)=>{
  const {username, password} = req.body

  if(!username || !password) {
    return res.status(400).send("missing some info")
  }
  
  if(password.length < 4) {
    return res.status(400).send("password must be at least 5 characters")
  }

  users.push({username, password})
  fs.readFile('users.json','utf8', (err, data)=>{
    if(err){
      return console.log(err)
    }
    const usersArray = JSON.parse(data);
    usersArray.push({username, password})
    fs.writeFile('users.json', JSON.stringify(usersArray), (err)=>{
      if(err){
        return console.log(err)
      }
      res.send("registered successfuly")
    })
    console.log(data)
  })
})

app.get('/users', (req, res)=>{
  console.log(users)
  res.send(users)
})