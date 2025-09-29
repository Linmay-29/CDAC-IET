const path = require('path');
const fs = require('fs');

let dir = __dirname;
console.log(dir);
const config = path.join(dir+'/sample.txt');
console.log("config = "+config);

fs.readFile(config,'utf-8',(err,data)=>{
    if(err){
        console.log("Error "+err);
    }else{
        console.log(data);
    }
});