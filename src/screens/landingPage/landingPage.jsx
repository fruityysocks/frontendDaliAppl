import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landingPage.scss';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/naps');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to DALI&apos;s Social Media App!</h1>
      <button type="button" onClick={handleNavigate}>Go to App</button>
    </div>
  );
}
