import './Home.css';
import { Link } from 'react-router-dom';

import { FaChartLine, FaLock, FaRocket } from 'react-icons/fa';

import { Parallax } from 'react-parallax';
import background from '../assets/6417743.jpg';

import Globe from 'react-globe.gl';
import { useEffect, useState, useRef } from 'react';

const Home = () => {

  const globeRef = useRef();
  const [points, setPoints] = useState([]);

  useEffect(() => {
    //dummy market data (replace with API later)
    setPoints([
      { lat: 40.7128, lng: -74.006, market: 'NYSE', change: '+0.82%', color: 'lime' },
      { lat: 35.6762, lng: 139.6503, market: 'Nikkei 225', change: '-0.45%', color: 'red' },
      { lat: 51.5074, lng: -0.1278, market: 'FTSE 100', change: '+0.12%', color: 'lime' },
      { lat: 19.076, lng: 72.8777, market: 'Nifty 50', change: '+1.02%', color: 'lime' }
    ]);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.enableZoom = false;   // disables two-finger + scroll zoom
        controls.autoRotate = true;    // Optional: make it spin
        controls.autoRotateSpeed = 0.7;
      }
    }
  }, []);

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

      <div className="globe-section" style={{ height: "500px" }}>
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="rgba(0,0,0,0)"
          pointsData={points}
          pointColor={p => p.color}
          pointAltitude={0.03}
          pointRadius={0.5}
          onPointClick={p => alert(`${p.market} ${p.change}`)}
        />
      </div>

      <div className="ticker-bar">
        <span>BTC/USD: 29,342.22 ▲</span>
        <span>ETH/USD: 1,843.55 ▼</span>
        <span>Gold: 1,945.12 ▲</span>
        <span>Crude Oil: 82.14 ▼</span>
      </div>

      <section className="cta-section">
        <h2>Ready to explore your trading journey?</h2>
        <Link to="/dashboard" className="cta-button">Explore Dashboard</Link>
      </section>
    </div>
  );
};

export default Home;
