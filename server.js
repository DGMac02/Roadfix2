import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'RoadFix API is running' });
});

// Catch-all for SPA - serve index.html for all undefined routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════╗
║      🛣️  RoadFix API Server       ║
╠═══════════════════════════════════╣
║  Server running on:               ║
║  http://localhost:${PORT}              ║
╚═══════════════════════════════════╝
  `);
});
