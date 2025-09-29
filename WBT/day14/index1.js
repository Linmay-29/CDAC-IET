const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

//usefull to check validation and sending data to next script (Runs First)
app.use((req,res,next)=>{
    console.log("Middle ware started");
//    res.set('content-type','text/html');
    // if(!(req.query.name.trim() == "kunal Pardeshi")){
    //     return res.status(404).send("Data is not valid")
    // }
    // req.validatedName = req.query.name.trim();
    next();
    
})

//this is using hbs render will be used
// app.get('/aboutus',(req,res)=>{
//     let config = req.data;
//     console.log(config);
//     res.render('aboutus',{name : "Kunal"});
// })

// app.get('/aboutus',(req,res)=>{
//     let config = req.data;
//     console.log(config);
//     res.render('aboutus',{name : "Kunal"});
// })

app.get('/addition',(req,res)=>{
    // let config = req.data;
    let num1 = req.query.num1;
    let num2 = req.query.num2;

    let sum1 = parseInt(num1) + parseInt(num2);
    // console.log(config);
    res.render('addition',{Sum : sum1});
})

//THis is normal way to access file
// app.get('/aboutus',(req,res)=>{
//     let config = path.join(__dirname,'aboutus.html');
//     console.log(config);
//     console.log(req.validatedName);
    
//     // res.sendFile(config);
//     res.send(`Hello ${req.validatedName}`);
// })

app.listen(8080,()=>{
    console.log("Server Started");
})