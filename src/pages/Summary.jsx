import './Summary.css';
import { FaArrowUp, FaArrowDown, FaChartLine, FaFire, FaNewspaper } from 'react-icons/fa';

const PlaceholderCard = ({ icon, title }) => (
  <div className="card loading">
    <div className="icon">{icon}</div>
    <div className="line title shimmer"></div>
    <div className="line small shimmer"></div>
    <div className="line small shimmer"></div>
  </div>
);

const Summary = () => {
  return (
    <div className="summary-page">
      <section className="summary-section">
        <h2><FaChartLine /> Global Indices</h2>
        <div className="card-grid">
          <PlaceholderCard icon={<FaChartLine />} title="Index" />
          <PlaceholderCard icon={<FaChartLine />} title="Index" />
          <PlaceholderCard icon={<FaChartLine />} title="Index" />
        </div>
      </section>

      <section className="summary-section">
        <h2><FaArrowUp /> Top Gainers</h2>
        <div className="card-grid">
          <PlaceholderCard icon={<FaArrowUp />} title="Coin" />
          <PlaceholderCard icon={<FaArrowUp />} title="Coin" />
          <PlaceholderCard icon={<FaArrowUp />} title="Coin" />
        </div>
      </section>

      <section className="summary-section">
        <h2><FaArrowDown /> Top Losers</h2>
        <div className="card-grid">
          <PlaceholderCard icon={<FaArrowDown />} title="Coin" />
          <PlaceholderCard icon={<FaArrowDown />} title="Coin" />
          <PlaceholderCard icon={<FaArrowDown />} title="Coin" />
        </div>
      </section>

      <section className="summary-section">
        <h2><FaFire /> Trending Coins / Stocks</h2>
        <div className="card-grid">
          <PlaceholderCard icon={<FaFire />} title="Coin" />
          <PlaceholderCard icon={<FaFire />} title="Coin" />
          <PlaceholderCard icon={<FaFire />} title="Coin" />
        </div>
      </section>

      <section className="summary-section">
        <h2><FaNewspaper /> News & Updates</h2>
        <div className="card-grid">
          <PlaceholderCard icon={<FaNewspaper />} title="News" />
          <PlaceholderCard icon={<FaNewspaper />} title="News" />
        </div>
      </section>
    </div>
  );
};

export default Summary;
