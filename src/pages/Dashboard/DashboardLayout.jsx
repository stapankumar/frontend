import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="market">Market</Link> |{" "}
        <Link to="portfolio">Portfolio</Link> |{" "}
        <Link to="futures">Futures</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
