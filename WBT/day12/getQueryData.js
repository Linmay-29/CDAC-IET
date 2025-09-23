const h = require('http')
const url = require('url')
const s = h.createServer(function(req,res){
    let d = req.url;
    let d1 = url.parse(d, true).query;

    res.writeHead(200,{'content-type' : 'text/html'});
    console.log(req.headers);
    if (d1.name == 'Linmay' ){
        res.write("<h1>" + d1.name + "</h1>")
    }else
        res.write(JSON.stringify({message : "Not Valid"})); 
    
});
s.listen(8080);
