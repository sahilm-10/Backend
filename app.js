const express = require("express");
const app = express();

app.get("/",function(req,res){
    // res.send("<h1>Hello from response</h1>")
    res.sendFile("./index.html",{root:__dirname})
});

app.get("/about",function(req,res){
    // res.send("<h1>Hello from response</h1>")
    res.sendFile("./about.html",{root:__dirname})
});

// redirect
app.get("./aboutus",(req,res)=>{
    res.redirect("./about.html",{root:__dirname});
})

// 404 page
// use -> middleware
app.use((req,res)=>{
    res.status(404).sendFile('./404.html',{root:__dirname})
})

app.listen(3000);