const linkRead = require('./userDefineReadFile');
const path = require('path');
const fs = require('fs');

const loc = __dirname;
console.log(loc);
const config = path.join(loc+'/sample.txt')
console.log(config);

linkRead.readFs(config,fs);

let data = "hello";
try{
    
    fs.appendFileSync(config,` ${data}`);
}catch(error){
        console.log(error);
} 

linkRead.readFs(config,fs);
