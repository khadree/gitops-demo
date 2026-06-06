const http = require('http');
const os = require('os');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>GitOps Demo App</h1>
    <p>Version: 3.0.0</p>
    <p>Hostname: ${os.hostname()}</p>
    <p>Deployed via ArgoCD + Kind!</p>
  `);
});

server.listen(port, () => {
  console.log(`App running on port ${port}`);
});