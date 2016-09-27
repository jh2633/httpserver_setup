var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "note.html");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);
