//Initialize expressJS
//app is now a requestListener
const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

// app.get('/', (req,res)=>{
//     res.send("Hello World from quoc")
// })

//pass the content of index.html to index.js
//without this, we cannot see index.html when running index.js
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

server.listen(3000, ()=>{
    console.log("listening on port 3000")
})