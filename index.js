// A bare-bones web app implementation with NodeJS
const util = require('util');
const http = require('http');

// Create a server object
http.createServer(function (req, res) {
  console.log(req.method + " " + req.url); // Log request URL to console
  //console.log(util.inspect(req)); // Log request details to console
  res.write("<h1>Hello World!</h1>\n"); // Write a response to the client
  res.end(); // End the response
}).listen(3000); // The server object listens on port 3000
