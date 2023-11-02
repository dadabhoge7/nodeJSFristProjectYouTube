// console.log(`============Write File ASynchro===================`);
// let fs = require('fs');
// fs.writeFile("02_abc.txt","This is writing for node js",()=>{});
// fs.readFileSync("02_abc.txt","utf8",(err,data)=>{
// console.log(`Data : ${data}`);
// });
// // console.log(`Data : ${data.toString()}`);
// console.log(`This has to print last`);

console.log(`============Write File Synchro===================`);
let fs = require('fs');
fs.writeFile("02_abc.txt","this writing from node js1",()=>{});
let data = fs.readFileSync("02_abc.txt");
console.log(data.toString);
console.log(`I am Dada Bhoge`);