import { Router } from 'express';
import healthRoutes from './health.routes';

const rootRouter = Router();

// Mount API v1 routes
rootRouter.use('/v1/health', healthRoutes);

// Compatibility route for /api/health
rootRouter.use('/health', healthRoutes);

export default rootRouter;

