export const healthService = {
    getHealthStatus() {
        return {
            status: "healthy",
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            message: 'Bookify API is operational',
            environment: process.env.NODE_ENV || 'development',
        };
    }
};