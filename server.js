// creating server with node js
const http = require("http");
const fs  = require("fs");
const _ = require("lodash");
// creating server instance
const server = http.createServer(
    (req,res)=>{
        console.log("Server started");
        // console.log("123",req);
        // res.setHeader('Content-type','text/html');
        // res.write("<h1>Hello World</h1>");
        // res.end();

        //  Using lodash functions .once ***********************

        let greet = _.once(()=>{
            console.log("How are you??");
        });
        greet();
        greet();

// render multiple pages on websites by specific route...

let path = './'
switch(req.url){
    case '/':
        path+= '/index.html'
        res.statusCode = 200;
        break;
    case '/about':
        path += '/about.html'
        res.statusCode = 200;
        break;
    case '/aboutus' :
        res.statusCode = 301;
        res.setHeader('Location','/about');
        res.end();
        break;
    default :
        path += '/404.html'
        res.statusCode = 404;
        break;
}
fs.readFile(path,(err,file)=>{
            if(err){
                console.log(err);
            }
            else{
                res.write(file);
                res.end();
            }
        })
    }
)
// portname , hostname,cb
server.listen(3000,"localhost",()=>{
    console.log("Server listening to port 3000");
})