const h = require('http')
const url = require('url')

let todos = [{id:1,name:'kunal'},{id:2,name:'linmay'}];
const s = h.createServer(function(req,res){
    const method = req.method;
    const url = req.url;
    
    const parsedUrl = new URL(url,`http://${req.headers.host}`);
    const pathName = parsedUrl.pathname;

    if(method == 'GET' && pathName == '/todos'){
        res.writeHead(200,{'content-type':'text/json'});
        res.end(JSON.stringify(todos));
    }
});
s.listen(8080);
