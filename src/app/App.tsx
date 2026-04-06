import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import F1LoginAnimation from './components/F1LoginAnimation';

function AppContent() {
  const [showLoginAnimation, setShowLoginAnimation] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setShowLoginAnimation(true);
  };

  const handleLoginComplete = () => {
    setShowLoginAnimation(false);
    navigate('/dashboard');
  };

  if (showLoginAnimation) {
    return <F1LoginAnimation onComplete={handleLoginComplete} />;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPageWrapper onLogin={handleLogin} />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

function LandingPageWrapper({ onLogin }: { onLogin: () => void }) {
  return <LandingPage onLoginClick={onLogin} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}