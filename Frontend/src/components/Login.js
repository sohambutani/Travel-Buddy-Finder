import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import '../styles/Login.css'; // Ensure this is the path to your CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email) errors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email address is invalid.";
    if (!password) errors.password = "Password is required.";
    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await login({ email, password });
      localStorage.setItem('token', response.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image-container">
          <img src="images/login-container-image.png" alt="Login" className="login-image" />
        </div>
        <div className="login-form-container">
          <img src="/logo.png" alt="Travel Buddy Logo" className="logo" />
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="input-field"
                />
              </div>
              {errors.email && <p className="error">{errors.email}</p>}
              
              <div className="input-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="input-field"
                />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
              
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
