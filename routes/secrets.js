const router = require('express').Router()
const vu = require('../helpers/verify')

require('dotenv').config()

const secrets = [
  'the earth is flat',
  'vaccines are bad',
  'epstein did kill himself',
  'the moon is made of cheese',
  'the corona is made for new world order',

]

router.get('/all', vu  ,(req, res)=>{
  
  res.send({
    greeting:`hey ${req.user}! Here are some facts to educate you:`,
    secrets})
})

router.get('/random', (req, res)=>{
  res.send(secrets[Math.floor(Math.random()*secrets.length)])
})

module.exports = router