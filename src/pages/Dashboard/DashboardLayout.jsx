import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './DashboardLayout.css';
import HoverPreview from '../../components/HoverPreview';

export default function DashboardLayout() {

  const navigate = useNavigate();
  const location = useLocation();
  const isDashboardRoot = location.pathname === '/dashboard';

  return (
    <div className="dashboard-container">
      {isDashboardRoot ? (
        <>
          <video autoPlay muted loop className="bg-video">
            <source src="/videos/dashboard1_1920_1080_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="overlay">
            <h1 className="dashboard-title">Smarter Trading Starts Here 🚀</h1>

            <div className="dashboard-options">

              <HoverPreview
                title="Market Overview"
                description="Live trends, real-time charts, and AI-driven analysis of crypto markets."
                onExplore={() => navigate('market')}
              >
                <div
                  className="dashboard-card"
                  onClick={() => navigate('market')}
                >
                  <h2>📈 Market</h2>
                  <p>Live trends, insights, and analytics</p>
                </div>
              </HoverPreview>

              <HoverPreview
                title="Your Portfolio"
                description="Track holdings, profit/loss stats, and portfolio health here."
                onExplore={() => navigate('market')}
              >
                <div
                  className="dashboard-card"
                  onClick={() => navigate('portfolio')}
                >
                  <h2>💼 Portfolio</h2>
                  <p>Track your assets and performance</p>
                </div>
              </HoverPreview>

              <HoverPreview
                title="Futures Trading"
                description="Advanced tools, leverage, and market forecasting strategies."
                onExplore={() => navigate('market')}
              >
                <div
                  className="dashboard-card"
                  onClick={() => navigate('futures')}
                >
                  <h2>📊 Futures</h2>
                  <p>Forecast and make smart moves</p>
                </div>
              </HoverPreview>

            </div>
          </div>
        </>
      ) : (
        <div className="dashboard-subpage">
          <Outlet />
        </div>
      )}
    </div>
  );
}
