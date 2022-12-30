const fs= require("fs");

fs.writeFileSync("read.txt","Welcome to my channel");

fs.appendFileSync("read.txt","\nI am fine Thank You!!");

const buf_data=fs.readFileSync("read.txt");
org_data= buf_data.toString();
console.log(org_data);
 