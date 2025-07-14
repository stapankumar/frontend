import './Login.css';
import { useState } from 'react';

import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

  const [isSignup, setIsSignup] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>

        <form className="login-form">
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <span onClick={togglePasswordVisibility} className="eye-toggle">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="input-group">
            <input type="text" placeholder="Enter Captcha" required />
            <div className="captcha-box">X7Y4A</div>
          </div>

          {!isSignup && (
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          )}
          <button type="submit">{isSignup ? 'Register' : 'Sign In'}</button>
        </form>

        <p className="switch-mode">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? ' Sign In' : ' Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
