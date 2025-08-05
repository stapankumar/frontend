import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/videos/portfolio2_3840_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="portfolio-content">
        <h1>📈 Your Portfolio</h1>
        <p>Track holdings, profit/loss stats, and portfolio health here.</p>

        <ul className="action-list">
          <li>🔍 Analyze individual asset performance</li>
          <li>📊 Monitor total profit/loss trend</li>
          <li>💼 Diversify your holdings smartly</li>
          <li>🚀 Stay updated with market movement</li>
        </ul>

        <div className="portfolio-cards">
          <div className="card">💼 Total Assets: ₹1,25,000</div>
          <div className="card">📈 Total Gain: +₹12,300</div>
          <div className="card">📉 Total Loss: -₹3,200</div>
          <div className="card">💰 Net Worth: ₹1,34,100</div>
        </div>

        <div className="portfolio-table">
          <table>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Qty</th>
                <th>Buy Price</th>
                <th>Current</th>
                <th>P/L</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bitcoin</td>
                <td>0.005</td>
                <td>₹20,00,000</td>
                <td>₹21,50,000</td>
                <td className="profit">+₹7500</td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td>0.15</td>
                <td>₹1,25,000</td>
                <td>₹1,10,000</td>
                <td className="loss">-₹2250</td>
              </tr>
              <tr>
                <td>Solana</td>
                <td>10</td>
                <td>₹5,500</td>
                <td>₹6,200</td>
                <td className="profit">+₹7000</td>
              </tr>
              <tr>
                <td>Cardano</td>
                <td>500</td>
                <td>₹45</td>
                <td>₹38</td>
                <td className="loss">-₹3500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
