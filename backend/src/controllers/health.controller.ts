import { Request, Response } from 'express';

export const getHealthStatus = (_req: Request, res: Response): void => {
  res.status(200).json({
    status: 'ok',
    message: 'Bookify API is operational',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
};

