const fs = require("fs");
const { parse } = require("path");
const bioData={
    name:"Vinod",
    age: 19,
    channel:"thapa technical",
};
const jsonData = JSON.stringify(bioData);

/*fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("Done");
});*/

fs.readFile("json1.json","UTF-8",(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(data);
    console.log(orgData);
});
//{"name":"Vinod","age":19,"channel":"thapa technical"}
//{ name: 'Vinod', age: 19, channel: 'thapa technical' }
