const client = require('./connection')
const express = require('express')
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello world!")
})

app.listen(3000,()=>
    console.log("Server is now listening in port 3000")
)

client.connect();

// app.get("/",(req,res)=>{
//     console.log('can not connect')
//     client.query('Select * from users',(err,result)=>{
//         if(!err){
//             res.send("app works");
//         }
//     });
//     client.end;
// })
