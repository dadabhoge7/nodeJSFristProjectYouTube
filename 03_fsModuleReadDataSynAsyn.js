console.log(`======================================`);

console.log(`Work Asynchronous`);
let fs = require('fs');
fs.readFile("02_abc.txt","utf8",(err,data)=>{
if(err){
    console.log(err);
}
console.log(data);
});
console.log(`This has to print last`);

// console.log(`==================================`);
// console.log(`Work Asynchronous`);
// let fs = require('fs');
// const data = fs.readFileSync("02_abc.txt");
// console.log(`Data of File : ${data}`);
// console.log(`This has to print last`);