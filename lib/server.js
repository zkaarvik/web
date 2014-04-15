// HTTP web server
//
// 

var http = require("http");

function start() {
	var onRequest = function(request, response) {
        console.log("Request received!");

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("I am server :)");
        response.end();
    };

    http.createServer(onRequest).listen(80);
    console.log("Server started.");
}

exports.start = start;