import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
