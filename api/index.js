import express from "express";
import {client} from './server.js'

const app = express();

app.use(express.static("public"))

app.use((req,res,next) =>{
    console.log("ada request masuk");
    console.log(req.url); 
    next();
})

app.get("/api/planet", async(req,res)=>{
    const result = await client.query("select * from planet")
    res.send(result.rows)
})


app.listen(3000, ()=>{
    console.log("server running at port 3000")
})