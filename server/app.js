const HTTP = require('http');
const HOSTNAME = '127.0.0.1';
const PORT = 8090;

HTTP.createServer( (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello from nodejs server.');
}).listen(PORT, HOSTNAME, ()=>{
	console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
