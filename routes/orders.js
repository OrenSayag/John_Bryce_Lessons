const router = require('express').Router()

router.get('/',(req,res)=>{
  res.send(orders)
})

let orders = [1, 3, 5]

router.delete('/:id', (req,res)=>{
  orders = orders.filter(order=>order.id!==req.params.id);
  res.send(orders);
})

router.post('/',(req,res)=>{
  orders.push(req.body)
  console.log(req.body)
  res.send(orders)
})

module.exports = router