// Settings for the server
const PORT = process.env.PORT || 8000;
const PUBLIC_PATH = 'public';

// Create an express app. Will use a static folder to
// server all basic html.
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(PUBLIC_PATH));

// Create server from express app
const http = require('http');
const server = http.createServer(app);

// Create a server with socket.io
const { Server } = require('socket.io');
const io = new Server(server);

// Start server
server.listen(PORT, () => {
  console.log(`App Started at http://localhost:${PORT}`);
});

// Event Handlers for the server. Making these seperate files to make this
// file cleaner and easier to manage. See this file for an example! Clean 😎
const registerTestHandler = require('./testHandler.js');

// After connection, socket is ready to listen!
io.on('connection', socket => {
  // Register all event handlers here.
  registerTestHandler(io, socket);
});