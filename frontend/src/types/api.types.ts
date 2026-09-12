export interface HealthStatus {
  status: string;
  message: string;
  timestamp?: string;
  environment?: string;
}

export interface ApiErrorResponse {
  status: string;
  statusCode: number;
  message: string;
}

