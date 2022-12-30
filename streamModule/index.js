const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request",(req,res)=>{
    /*   1ST WAY
    fs.readFile("input.txt","utf-8",(err,data)=>{
        if(err)
        console.error(err);
        res.end(data);
    });
    
    2ND WAY
    const rstream = fs.createReadStream("input.txt");
        rstream.on("data", (chunkdata)=>{
            res.write(chunkdata);
        });
        rstream.on("end", ()=>{
            res.end();
        });
        rstream.on("error", (err)=>{
            console.log(err);
            res.end("file not found");
        });
    */
   const rstream = fs.createReadStream("input.txt");
   rstream.pipe(res);
});

server.listen(8000,"127.0.0.1");