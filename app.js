const express = require('express')
const cors = require('cors')
const chat = require('./data')
const app = express()

app.use(cors())

app.get('/chat',(req,res)=>{
    res.send(chat)
})

app.get('/chat/:id',(req,res)=>{
    const msg = chat.find((c)=>req.params.id === c._id)
    res.send(msg)
})

app.listen(5000,()=>{
    console.log("Server run on 5000");
})