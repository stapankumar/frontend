import './Home.css';
import { Link } from 'react-router-dom';

import { FaChartLine, FaLock, FaRocket } from 'react-icons/fa';

import { Parallax } from 'react-parallax';
import background from '../assets/6417743.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <Parallax bgImage={background} strength={300}>
        <div className="hero-section">
          <h1>
              Welcome to <span className="highlight">Trading Dashboard</span>
          </h1>
          <p className="tagline">Smarter trading starts here.</p>
          <Link to="/login" className="cta-button">Get Started</Link>
        </div>
      </Parallax>

      <section className="features-section">
        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3>Live Market Data</h3>
          <p>Track real-time prices with clean, fast UI.</p>
        </div>
        <div className="feature-card">
          <FaLock className="feature-icon" />
          <h3>Secure Insights</h3>
          <p>Your portfolio data is protected with best-in-class encryption.</p>
        </div>
        <div className="feature-card">
          <FaRocket className="feature-icon" />
          <h3>Powerful Tools</h3>
          <p>Customizable dashboards for futures, holdings, and strategy.</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to explore your trading journey?</h2>
        <Link to="/dashboard" className="cta-button">Explore Dashboard</Link>
      </section>
    </div>
  );
};

export default Home;
