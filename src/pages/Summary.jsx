import './Summary.css';
import { TbWorldDollar } from "react-icons/tb";
import { HiNewspaper } from "react-icons/hi2";
import { RiBitCoinLine } from "react-icons/ri";
import { MdOutlineTrendingUp, MdOutlineTrendingDown } from "react-icons/md";

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
        <h2><TbWorldDollar /> Global Indices</h2>
        <div className="card-grid">
          <PlaceholderCard icon={<TbWorldDollar />} title="Index" />
          <PlaceholderCard icon={<TbWorldDollar />} title="Index" />
          <PlaceholderCard icon={<TbWorldDollar />} title="Index" />
        </div>
      </section>

      <section className="summary-section">
        <h2><MdOutlineTrendingUp /> Top Gainers</h2>
        <div className="card-grid">
          <PlaceholderCard icon={<MdOutlineTrendingUp />} title="Coin" />
          <PlaceholderCard icon={<MdOutlineTrendingUp />} title="Coin" />
          <PlaceholderCard icon={<MdOutlineTrendingUp />} title="Coin" />
        </div>
      </section>

      <section className="summary-section">
        <h2><MdOutlineTrendingDown /> Top Losers</h2>
        <div className="card-grid">
          <PlaceholderCard icon={<MdOutlineTrendingDown />} title="Coin" />
          <PlaceholderCard icon={<MdOutlineTrendingDown />} title="Coin" />
          <PlaceholderCard icon={<MdOutlineTrendingDown />} title="Coin" />
        </div>
      </section>

      <section className="summary-section">
        <h2><RiBitCoinLine /> Trending Coins / Stocks</h2>
        <div className="card-grid">
          <PlaceholderCard icon={<RiBitCoinLine />} title="Coin" />
          <PlaceholderCard icon={<RiBitCoinLine />} title="Coin" />
          <PlaceholderCard icon={<RiBitCoinLine />} title="Coin" />
        </div>
      </section>

      <section className="summary-section">
        <h2><HiNewspaper /> News & Updates</h2>
        <div className="card-grid">
          <PlaceholderCard icon={<HiNewspaper />} title="News" />
          <PlaceholderCard icon={<HiNewspaper />} title="News" />
          <PlaceholderCard icon={<HiNewspaper />} title="News" />
        </div>
      </section>
    </div>
  );
};

export default Summary;
