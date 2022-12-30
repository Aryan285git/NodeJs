const EventEmitter = require("events");
const event = new EventEmitter();

event.on('sayMyName',()=>{
    console.log("Your name is Vinod");
});
event.on('sayMyName',()=>{
    console.log("Your name is Bhadhur");
});
event.on('sayMyName',()=>{
    console.log("Your name is Thapa");
});

event.emit("sayMyName");
