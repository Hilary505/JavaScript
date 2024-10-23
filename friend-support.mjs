import { readFile } from 'fs/promises';
import { createServer } from 'http';
import { join } from 'path';
import { stat } from 'fs/promises';

const port = 5000;
const guestsDir = join('.', 'guests');

const server = createServer(async (req, res) => {
  if (req.method === 'GET') {
    const guestName = req.url.slice(1); // Remove leading slash to get the filename
    const filePath = join(guestsDir, `${guestName}.json`);

    try {
      // Check if the file is accessible
      await stat(filePath);

      // Read the file content
      const data = await readFile(filePath, 'utf-8');
      const parsedData = JSON.parse(data);

      // Return the guest data
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(parsedData));
    } catch (err) {
      if (err.code === 'ENOENT') {
        // File does not exist
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'guest not found' }));
      } else if (err.code === 'EACCES') {
        // File exists but not accessible (permission error)
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      } else {
        // Any other error
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    }
  } else {
    // Only GET requests are allowed
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'method not allowed' }));
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
