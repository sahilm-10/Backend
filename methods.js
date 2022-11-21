const express = require("express");
const app = express();
app.use(express.json());

let users = {};
app.get("/users",(req,res)=>{
    res.send(users);
})

app.post("/user",(req,res)=>{
    console.log(req.body.Name);
    users = req.body;
    res.json({
        message:"Data received",
        user : req.body
    })
});

app.patch("/user",(req,res)=>{
    console.log(req.body);
    let dataToBeUpdated = req.body;
    for(key in dataToBeUpdated){
        users[key] = dataToBeUpdated[key];
    }
    res.json({
        message:"Data updated Succesfully"
    })
})

app.delete("/user",(req,res)=>{
    users={};
    res.json({
        msg:"Data has been deleted!"
    })
})

app.listen(5000);