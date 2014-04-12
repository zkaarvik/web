// HTTP web server
//
// 

var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("I am server :)");
	response.end();

	console.log("Request received!");
}).listen(80);
