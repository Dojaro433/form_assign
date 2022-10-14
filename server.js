
const express = require("express");
const app = express();
const conn = require("./db");
const PORT = 8000;
const abcd = require("./routes/fills");
const cors = require("cors");

app.get("/",(req,res) => {


res.send("the server is satrt");


})

conn.connection.on("connected", (err)=>{

    if(err){
    console.error(err);
    
    }
    
    else{
    
        console.log("Connected to MongoDB");
    }
    
    
    
    })



    app.use(express.json());
    app.use(cors());
    app.use("/fills", require("./routes/fills"));
   






app.listen(PORT, ()=>{

console.log("Node js Server is started");


})

