const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'RoadFix/wwwroot')));

// Serve index.html for all routes (Single Page Application)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'RoadFix/wwwroot/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`RoadFix server running at http://localhost:${PORT}`);
});
