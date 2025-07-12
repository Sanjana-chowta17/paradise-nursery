import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // We’ll create this next for styling

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="company-name">🌿 Paradise Nursery</h1>
        <p className="intro-text">
          Welcome to Paradise Nursery — your one-stop destination for beautiful, healthy houseplants that bring life to your space.
        </p>
        <button className="get-started-btn" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
