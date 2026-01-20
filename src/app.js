const express =require("express")
const app =express()
const connect =require("../src/config /db.js")
const user = require('./routes/user_route');
connect();
app.use(express.json());
app.use('/api', user)
app.get("/",(req,res)=>{
    res.send("init")
})
module.exports = app;