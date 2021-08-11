const router = require('express').Router()


router.get('/all',(req,res)=>{
  res.send(products)
})

let products = [1, 2, 3]

console.log('hello from products')

router.get('/byid/:id', (req,res)=>{
  res.send(products.find(prod=>prod.id==req.params.id))
  
})

module.exports = router;