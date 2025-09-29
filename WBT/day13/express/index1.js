const exp = require('express');
const path = require('path');
const data = require('./MOCK_DATA.json')
const app = exp();

app.get('/',(req,res)=>{
    // req.hostname;
    res.send("BY GET");
});

app.get('/admin',(req,res)=>{
    res.send(data)
})
app.post('/admin/:id',(req,res)=>{
    let id = Number(req.params.id);
    const d = data.find((user)=>{
        return user = user.id === id;
    });
    res.send(d); 
})
app.post('/admin/:id/:name',(req,res)=>{
    let id = Number(req.params.id);
    let name = String(req.params.name);
    const d = data.find((user)=>{
        return user = user.id === id;
    });
    let config = path.join(`${id}`,name);
    console.log(config);
    // res.send(config);
    res.send(d); 
})
app.delete('/admin/:id',(req,res)=>{
    let id = Number(req.params.id);
    const d = data.find((user)=>{
        return user = user.id === id;
    });
    if(d==-1)
        res.status(404).send("Data Not Found");

    let deletedItem = data.splice(d,1);
    console.log(deletedItem);
    
    res.send("Delete Operation Done"); 
})
app.listen(8000 ,()=>{
    console.log("Server Started");
});
