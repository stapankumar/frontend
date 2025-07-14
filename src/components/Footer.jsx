import { FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/stapankumar"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub className="github-icon" />
        Contribute on GitHub
      </a>
      <p>© 2025 Trading Dashboard</p>
    </footer>
  );
};

export default Footer;
