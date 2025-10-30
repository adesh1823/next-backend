// const { resolve } = require("path");

const { rejects } = require("assert");
const { resolve } = require("path");
const { resolveTripleslashReference } = require("typescript");


// function testing(){
//     return 1 ; 

// }

let check = new Promise(function(resolve,rejects){
    console.log("first");
    
    setTimeout(()=>{
        resolve("ch")
    },1234)
})

check.then((data)=>console.log(data))
console.log(testing());

console.log("there is bottom ");


module.exports = {testing:testing};
