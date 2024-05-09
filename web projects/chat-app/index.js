//Initialize expressJS
//app is now a requestListener
const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

//Initialize socket.io
const {Server} = require('socket.io')
const io = new Server(server)



// app.get('/', (req,res)=>{
//     res.send("Hello World from quoc")
// })

//pass the content of index.html to index.js
//without this, we cannot see index.html when running index.js
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket)=>{
    console.log('user connected')

    //socket anounce in console when recive mess from web
    socket.on('on-chat', data =>{
        console.log("message received")
    })
})

server.listen(3000, ()=>{
    console.log("listening on port 3000")
})