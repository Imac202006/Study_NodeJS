var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //http header
  var q = url.parse(req.url, true).query;
  res.write("<p>The date and time are currently: " + dt.myDateTime() + "</p>" + "<p>Hello, " + q.firstname + q.lastname + "</p>"); //response to client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
