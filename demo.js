// Example Express server created via GitHub MCP

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from GitHub MCP Server!',
    info: 'This file was created using Claude AI with GitHub MCP integration'
  });
});

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
