import { FaGithub, FaTwitter, FaTelegram, FaDiscord, FaYoutube, FaPhone, FaHome, FaChartLine, FaListAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    const flash = document.createElement('div');
    flash.className = 'page-flash';
    document.body.appendChild(flash);

    setTimeout(() => {
      document.body.removeChild(flash);
      navigate(path); 
    }, 300);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Trading Dashboard</h2>
          <p>Trade smart. Stay ahead.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <button onClick={() => handleClick('/')}>
            <FaHome /> Home
          </button>
          <button onClick={() => handleClick('/dashboard')}>
            <FaChartLine /> Dashboard
          </button>
          <button onClick={() => handleClick('/summary')}>
            <FaListAlt /> Summary
          </button>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact"> 
            <FaPhone /> Contact
          </Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaTelegram /></a>
            <a href="#"><FaDiscord /></a>
            <a href="#"><FaYoutube /></a>
            <a href="https://github.com/stapankumar" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Trading Dashboard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
