var httpRef = require("http")
function process(req,resp)
{
	resp.writeHead(200,{"Content-Type":"text/html"});
	resp.write("Welcome to GitHub");
	console.log("Welcome to GitHub");
	resp.end();
}
var port = httpRef.createServer(process);
port.listen(3000);