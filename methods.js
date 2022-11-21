const express = require("express");
const app = express();
app.use(express.json());

let users = [{
    id:"1",
    name:"Sahil",
    age:"20"
},
{
    id:"2",
    name:"Rahul",
    age:"30"
},
{
    id:"3",
    name:"Sam",
    age:"24"
},
];

// with query
app.get("/users",(req,res)=>{
    console.log(req.query);
    // res.send(req.query);
    let {name,age} = req.query;
    let dataFiltered = users.filter(UserObj=> {
        return(UserObj.name == name && UserObj.age == age);
    });
    res.send(dataFiltered);
})


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

// Params ***************
app.get("/users/:id",(req,res)=>{
    console.log(req.params.name);
    // // for db
    // let {id} = req.params;
    // let user = db.findOne(id);
    res.json({
        msg:"User id:" ,
        "obj" :req.params
    });
})



app.listen(5000);