import { HealthStatus } from '../types/api.types';

export const fetchHealthStatus = async (): Promise<HealthStatus> => {
  const response = await fetch('/api/v1/health');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

