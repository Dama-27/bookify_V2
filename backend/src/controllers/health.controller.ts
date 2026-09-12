import { Request, Response } from 'express';
import { healthService } from '../services/health.service';

export const getHealthStatus = (_req: Request, res: Response): void => {
  const health = healthService.getHealthStatus();

  res.status(200).json({
    success: true,
    data: health
  });
};

