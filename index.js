const express = require('express')
// const { exec } = require("child_process");


const app = express()

const logger = (req, res, next) => {
  console.log(`${req.method} - ${req.url}, ${new Date().toISOString()}`)
  next()
}

app.listen(2000, ()=>{
  console.log('server is running on port 2000')
})

const products = [
  {id: 1, name: 'blah 1', price:57.4},
  {id: 2, name: 'blah 2', price:95.4},
  {id: 3, name: 'blah 3', price:355.4},
  {id: 4, name: 'blah 4', price:15.4},
]

app.get('/products/all',logger,(req,res)=>{
  res.send(products)
})

app.get('/products/byid/:id',logger, (req,res)=>{
  res.send(products.find(prod=>prod.id==req.params.id))
  
})



// exec("shutdown /r", (error, stdout, stderr) => {
//   if (error) {
//       console.log(`error: ${error.message}`);
//       return;
//   }
//   if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

