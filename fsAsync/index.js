const fs= require("fs");

fs.writeFile("file.txt","today is awesome day.",(err)=>{
console.log("files are created");
console.log(err);
});

fs.appendFile("file.txt","\nLets hangout.",(err)=>{
    console.log("files appended");
});

fs.readFile("file.txt","UTF-8",(err,data)=>{
    console.log(data);
});