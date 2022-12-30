const http = require("http");

const server = http.createServer((req,res)=>{
    //console.log(req.url);
    if(req.url=="/")
    res.end("Hello from the HOME side");
    else if(req.url=="/menu")
    res.end("Hello from the MENU side");
    else if(req.url=="/about")
    res.end("Hello from the ABOUTUS side");
    else if(req.url=="/contact")
    res.end("Hello from the CONTACT side");
    else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h1>Error 404. Page does not exist</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to port no 8000");
});