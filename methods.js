const express = require("express");
const app = express();
app.use(express.json());

let users = [{
    id:"1",
    name:"Sahil",
    age:"19"
},
{
    id:"2",
    name:"Rahul",
    age:"19"
},
{
    id:"3",
    name:"Sam",
    age:"19"
}
];

const userRouter = express.Router();
app.use("/user",userRouter);

userRouter
    .route("/")
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)

userRouter
    .route("/:name")
    .get(getUserById)    
// app.get("/users",)



// app.post("/user",);

// app.patch("/user",)

// app.delete("/user",)

// with query
app.get("/users",(req,res)=>{
    res.send(users);
})

// Params ***************
// app.get("/users/:id",)

function getUserById(req,res){
    console.log(req.params.name);
    // // for db
    // let {id} = req.params;
    // let user = db.findOne(id);
    res.json({
        msg:"User id:" ,
        "obj" :req.params
    });
}

function getUser(req,res){
    console.log(req.query);
    // res.send(req.query);
    let {name,age} = req.query;
    // let dataFiltered = users.filter(UserObj=> {
    //     return(UserObj.name == name && UserObj.age == age);
    // });
    res.send(users);
}

function postUser(req,res){
    console.log(req.body.Name);
    users.push(req.body);
    res.json({
        message:"Data received",
        user : req.body
    })
}

function updateUser(req,res){
    console.log(req.body);
    let dataToBeUpdated = req.body;
    for(key in dataToBeUpdated){
        users[key] = dataToBeUpdated[key];
    }
    res.json({
        message:"Data updated Succesfully"
    })
}

function deleteUser(req,res){
    users={};
    res.json({
        msg:"Data has been deleted!"
    })
}

app.listen(5000);