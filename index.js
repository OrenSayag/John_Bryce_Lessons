const fs = require('fs');

// fs.mkdir('blah', (err)=>{
//   if(err){
//     console.log(err)
//   } else {
//    console.log("there's a folder with name you wanted")
//   }
// })

// setTimeout(() => {
//   fs.rmdir('blah', (err)=>{
//     if(err){
//       console.log(err)
//     } else {
//       console.log('successfuly deleted the blah folder')
//     }
//   }
//   )
// }, 4000);

// fs.writeFile('blah.txt','hello yolo ojhfjsh', (err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('success')
// })

fs.readFile('blah.txt', 'utf8', (error, data)=>{
  if(error){
    console.log(error)
    return
  }
  console.log(data)
})