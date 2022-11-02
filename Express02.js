// Preamble, so to say
var express = require('express');
var http = require('http');
var app = express();

// Variable deployPath is set in web.config and must match
// the path of app.js in virtual directory.
// If app.js is run from command line:
//   "C:/tssapp-deploy/tsappsvr/TestExpress/0.0.0> node app.js"
// deployPath is set to empty string.
var deployPath = process.env.deployPath || "";

// Static content server
app.use(deployPath + "/pages", express.static(__dirname + '/public'));

// REST API handler (placeholder)
app.all(deployPath + "/api", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("<h2>REST API Handler found.</h2>");
});

// Default handler
app.get(deployPath + "/", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("<h2>Default Handler found.</h2>");
});

// Not Found handler
app.use(function(req, res, next){
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("<h2>The requested resource is not available.</h2>");
  res.write("Request received on port " + process.env.PORT + "<br>");
  res.write("Request URL: " + req.url + "<br>");
  res.write("Deploy Path: " + deployPath + "<br>");
  res.end('[iisnode version is ' + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
});

// Server creation
var server = http.createServer(app);
var port = process.env.PORT || 2709;
server.listen(port);