const ext = require('express');
const app = ext();
const path = require('path')

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))

app.use((req,res,next)=>{
    console.log("From middleware");
    next();
})

app.get('/aboutus',(req,res)=>{
    res.render('aboutus',{name:"Linmay"})
})

app.listen(8000,()=>{
    console.log("Sever Started");
});