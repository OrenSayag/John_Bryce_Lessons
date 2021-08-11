const express = require('express')
<<<<<<< HEAD

require('dotenv').config()

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
=======
const fs = require('fs')
// const { exec } = require("child_process");


const app = express()

app.listen(2000, ()=>{
  console.log('server is running on port 2000')
  })

app.use(express.json());

app.use((req, res, next) => {
  console.log(`\n |${req.method} - ${req.url}, |${new Date().toISOString()}|`)

  const string = `\n |${req.method} - ${req.url}, | DATE: ${new Date().toISOString()} | IP: ${req.ip} `
  const fileName = './logs/'+req.url.split('/')[1]+'.log'
  
  fs.appendFile(fileName, string, (err)=>{
    if(err){return console.log(err)}
  })

  next()
})

app.use('/products', require('./routes/products'))
app.use('/orders', require('./routes/orders'))
app.use('/users', require('./routes/users'))
  
const users = [
  {id: 1, name: 'blah 1', price:57.4},
  {id: 2, name: 'blah 2', price:95.4},
  {id: 3, name: 'blah 3', price:355.4},
  {id: 4, name: 'blah 4', price:15.4},
]

let orders = [];




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
      
      
>>>>>>> b6937e472ac39653ba1234c7afac503ed387bb7c
