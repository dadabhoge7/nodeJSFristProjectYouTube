// console.log(`Create se04rver`);
// let http = require('http');
// let server = http.createServer((req,res)=>{
//     res.write('create server');
//     res.end();
// });
// server.listen(4000,()=>{console.log(`I am listening on port`);});


console.log(`Host HTML File on server`);
let fs = require('fs');
let http = require('http');

let server = http.createServer((req,res)=>{
    fs.readFile('04_index.html','utf8',(err,data)=>{
        res.write(data);
        return res.end();
    });
});

server.listen(4000,()=>{
    console.log(`I am listening on port`);
});



