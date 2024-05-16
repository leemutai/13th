
var http = require('http');
http.createServer(function(req,res)
{
    res.write("I am a programmer!!!");
    res.end();
}).listen(8080)
