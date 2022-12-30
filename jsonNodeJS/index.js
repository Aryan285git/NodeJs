const bioData={
    name:"Vinod",
    age: 19,
    channel:"thapa technical",
};
console.log(bioData.channel);
//{"name":"Vinod","age":19,"channel":"thapa technical"}

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

//{ name: 'Vinod', age: 19, channel: 'thapa technical' }
const objData = JSON.parse(jsonData);
console.log(objData);