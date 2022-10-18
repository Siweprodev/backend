const client = require('./connection')
const express = require('express')
const app = express();

app.get('/users',(res,req)=>{
    client.query('Select * from users',(err,result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
