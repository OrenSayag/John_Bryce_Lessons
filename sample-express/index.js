const express = require('express');

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
  users.push(req.body)
  res.send()
})

app.get('/users', (req, res)=>{
  console.log(users)
  res.send(users)
})