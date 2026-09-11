import React, { useEffect, useState } from 'react';
import { fetchHealthStatus } from '../api/healthApi';
import { HealthStatus } from '../types/api.types';

export const HomePage: React.FC = () => {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHealthStatus()
      .then((data) => {
        setHealth(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="card-grid">
      <div className="card">
        <h3>🚀 Backend API Status</h3>
        <p>Verifies frontend-to-backend communication via Vite proxy.</p>
        {loading && (
          <span className="status-badge loading">Connecting to /api/v1/health...</span>
        )}
        {!loading && health && (
          <div>
            <span className="status-badge online">
              ● Connected: {health.message}
            </span>
            <p style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
              Environment: <strong>{health.environment}</strong> &bull; Timestamp: {health.timestamp}
            </p>
          </div>
        )}
        {!loading && error && (
          <span className="status-badge offline">
            ✕ Disconnected ({error})
          </span>
        )}
      </div>

      <div className="card">
        <h3>📦 Architecture & Stack</h3>
        <p>Production-ready folder structure initialized.</p>
        <ul className="stack-list">
          <li className="stack-item">
            <span>Layered Controller / Route / Model</span>
            <span className="check">✓ Modular</span>
          </li>
          <li className="stack-item">
            <span>Global Express Error Handler</span>
            <span className="check">✓ Active</span>
          </li>
          <li className="stack-item">
            <span>React Layout & Page Separation</span>
            <span className="check">✓ Structured</span>
          </li>
          <li className="stack-item">
            <span>API Client & Shared Types</span>
            <span className="check">✓ Typed</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

