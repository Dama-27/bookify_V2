import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import rootRouter from './routes';
import { notFoundHandler } from './middlewares/notFound';
import { globalErrorHandler } from './middlewares/errorHandler';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Core Middleware
app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
}));
app.use(express.json());

// API Routes
app.use('/api', rootRouter);

// Root Welcome Endpoint
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Welcome to Bookify API',
    version: '1.0.0',
    documentation: '/api/v1/health',
  });
});

// Error Handling Middleware
app.use(notFoundHandler);
app.use(globalErrorHandler);

// Start HTTP Server & Connect to DB
app.listen(PORT, () => {
  console.log(`[Server] Express server running on http://localhost:${PORT}`);
  connectDB();
});
