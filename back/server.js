const express=require("express");
const cors=require('cors')
const mysql=require("mysql");
const app=express();
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"master"
})

app.get("./master",(req,res)=>{
    const sql="SELECT * from student";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.listen(8081,()=>{
    console.log("Listening...");
})