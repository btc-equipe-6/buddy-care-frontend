const express = require('express')
const app = express()
const porta = process.env.porta

app.get('/', (req,res)=>{
    res.send('Form')
})
