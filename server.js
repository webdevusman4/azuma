// Hostinger Node.js Application Startup File
// Compatible with Hostinger hPanel Node.js Selector, Cloud Hosting, and VPS (PM2)

const path = require('path');
const fs = require('fs');

const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js');

if (fs.existsSync(standaloneServer)) {
  // Use Next.js high-performance standalone server
  require(standaloneServer);
} else {
  // Fallback to standard Next.js production server
  const http = require('http');
  const next = require('next');

  const port = parseInt(process.env.PORT, 10) || 3000;
  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev, dir: __dirname });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    http.createServer((req, res) => {
      handle(req, res);
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
}

