const express = require('express')
const fs = require('fs')
// const { exec } = require("child_process");


const app = express()

app.listen(2000, ()=>{
  console.log('server is running on port 2000')
  })

app.use(express.json());

app.use((req, res, next) => {
    console.log(`\n |${req.method} - ${req.url}, |${new Date().toISOString()}|`)
    console.log(`req is ${req}`)
    next()
  })
  
const products = [
  {id: 1, name: 'blah 1', price:57.4},
  {id: 2, name: 'blah 2', price:95.4},
  {id: 3, name: 'blah 3', price:355.4},
  {id: 4, name: 'blah 4', price:15.4},
]

let orders = [];


app.get('/orders',(req,res)=>{
  res.send(orders)
})

app.delete('/orders/:id', (req,res)=>{
  orders = orders.filter(order=>order.id!==req.params.id);
  res.send(orders);
})

app.post('/orders',(req,res)=>{
  orders.push(req.body)
  console.log(req.body)
  res.send(orders)
})

app.get('/products/all',(req,res)=>{
  res.send(products)
})

app.get('/products/byid/:id', (req,res)=>{
  res.send(products.find(prod=>prod.id==req.params.id))
  
})


// exec("shutdown /r", (error, stdout, stderr) => {
//     if (error) {
//           console.log(`error: ${error.message}`);
//           return;
//       }
//       if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         console.log(`stdout: ${stdout}`);
//       });
      
      