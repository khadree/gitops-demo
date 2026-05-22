const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>🚀 GitOps Demo App</h1>
    <p>Version: 1.0.0</p>
    <p>Hostname: ${require('os').hostname()}</p>
    <p>Deployed via ArgoCD + Kind!</p>
  `);
});

server.listen(port, () => {
  console.log(\`App running on port \${port}\`);
});
    