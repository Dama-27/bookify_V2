import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Middleware
app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
}));
app.use(express.json());

// Routes
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Welcome to Bookify API',
    docs: '/api/health',
  });
});

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Bookify API is operational',
    timestamp: new Date().toISOString(),
  });
});

// Start Server & Connect to DB
app.listen(PORT, () => {
  console.log(`[Server] Server is running on http://localhost:${PORT}`);
  connectDB();
});

