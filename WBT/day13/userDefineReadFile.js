// const fs = require('fs');
function readFs(config,fs){
    try{
    let data = fs.readFileSync(config,'utf-8');
    console.log(data);    
    }catch(error){
            console.log(error);
    }
}
module.exports.readFs = readFs;