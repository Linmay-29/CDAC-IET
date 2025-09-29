let fp = require('fs');

let data = 'Hello stream';
fp.writeFile('newsample.txt',data,(err)=>{
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log("Successfull Creation");
});
