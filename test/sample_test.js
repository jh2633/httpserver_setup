var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "../app.js");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);
