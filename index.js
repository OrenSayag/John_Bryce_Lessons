const express = require('express');
const app = express()
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io');
const io = new Server(server)

app.get('/', (req, res)=>{
  // console.log("hello warld")
  res.sendFile(__dirname + "/index.html")
})




io.on("connection", (socket)=>{
  console.log("new client connected with ID of " + socket.id)
  socket.on('disconnect', ()=>{
    console.log("old client disconnected")
  })

  socket.on('newMsfFromClient', (msg) => {
    console.log('message: ' + msg);
    socket.broadcast.emit('newMsgFromServer', msg)
  });
  
  socket.on('typing', () => {
    socket.broadcast.emit('typing')
  });
})

server.listen(3000, ()=>{
  console.log('running on 3000')
})