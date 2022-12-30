const os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log(os.hostname());
console.log(os.tmpdir());
console.log(os.type());

const freememory=os.freemem();
console.log(`${freememory /1024 /1024 /1024}`);

const totalmemory=os.totalmem();
console.log(`${totalmemory /1024 /1024 /1024}`);