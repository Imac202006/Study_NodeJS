var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //http header
  res.write("<p>The date and time are currently: " + dt.myDateTime() + "</p>" + "<p>Hello World Kiwi and Baby!</p>"); //response to client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
