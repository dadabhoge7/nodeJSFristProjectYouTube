const heading = "custom Module Export and import";
function add(a,b){
console.log(`Result of add : ${a+b}`);
}
const sub = (a,b)=>{
    console.log(`Result of Sub : ${a-b}`);
}
const mul = (a,b)=>{
    console.log(`Result of Mul : ${a*b}`);
}
const div = (a,b)=>{
    console.log(`Result of div : ${a/b}`);
}
module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
module.exports.heading = heading;
