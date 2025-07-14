import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../assets/009-profit.png';

import useAuth from '../hooks/useAuth';
import useTheme from '../hooks/useTheme';

import { AiFillHome } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { FaChartLine } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { TbLogout2 } from 'react-icons/tb';
import { TbLogin2 } from "react-icons/tb";

import { FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {

  const { isDarkMode, toggleTheme } = useTheme();

  const { isLoggedIn, login, logout } = useAuth();
  
  return (
    <header className="header">

      <div className="nav-container">

        <div className="logo-title">
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="site-name">Trading Dashboard</h1>
        </div>

        <div className="currency-selector">
          <select>
            <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search coins (e.g. BTC, ETH)..."
          />
        </div>

        <nav className="nav-links">
          <Link to="/">
            <AiFillHome /> Home
          </Link>
          <Link to="/dashboard">
            <MdDashboard /> Dashboard
          </Link>
          <Link to="/summary">
            <FaChartLine /> Summary
          </Link>
        </nav>

        <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <FiSun className="theme-icon" /> : <FiMoon className="theme-icon" />}
        </div>

        <div className="profile-wrapper">
          <div className="profile-menu">
            <FaUserCircle className="profile-icon" />
          </div>
          <div className="dropdown-menu">

            {!isLoggedIn ? (
              <Link to="/login" className="login-link">
                <TbLogin2 className="login-icon"/> Login
              </Link>
            ):(
              <button className="logout-button">
                <TbLogout2 className="logout-icon"/> Logout
              </button>
            )}
            
          </div>
        </div>

      </div>

    </header>
  );
};

export default Header;
