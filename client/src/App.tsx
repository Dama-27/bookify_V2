import { useEffect, useState } from 'react';
import './App.css';

interface HealthResponse {
  status: string;
  message: string;
  timestamp?: string;
}

export default function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data: HealthResponse) => {
        setHealth(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <span className="badge">Step 1: Initialization</span>
        <h1 className="title">Bookify</h1>
        <p className="subtitle">E-Commerce Platform &bull; MERN + TypeScript</p>
      </header>

      <main className="card-grid">
        <div className="card">
          <h3>🚀 Backend API Status</h3>
          <p>Verifies frontend-to-backend communication via Vite proxy.</p>
          {loading && (
            <span className="status-badge loading">Connecting to /api/health...</span>
          )}
          {!loading && health && (
            <div>
              <span className="status-badge online">
                ● Connected: {health.message}
              </span>
              <p style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
                Server timestamp: {health.timestamp}
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
          <h3>📦 Tech Stack Configuration</h3>
          <p>Initial components installed and ready.</p>
          <ul className="stack-list">
            <li className="stack-item">
              <span>TypeScript (Strict Mode)</span>
              <span className="check">✓ Configured</span>
            </li>
            <li className="stack-item">
              <span>Node.js & Express</span>
              <span className="check">✓ Ready</span>
            </li>
            <li className="stack-item">
              <span>React 18 + Vite</span>
              <span className="check">✓ Running</span>
            </li>
            <li className="stack-item">
              <span>MongoDB & Mongoose</span>
              <span className="check">✓ Connected Config</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

