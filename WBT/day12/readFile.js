let fp = require('fs');

fp.readFile('newsample.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});