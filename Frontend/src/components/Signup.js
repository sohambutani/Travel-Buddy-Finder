import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/api';
import '../styles/SignUp.css'; // Ensure this is the path to your CSS file

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!username) errors.username = "Username is required.";
    if (!email) errors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email address is invalid.";
    if (!phone) errors.phone = "Phone number is required.";
    if (!password) errors.password = "Password is required.";
    if (password.length < 6) errors.password = "Password must be at least 6 characters.";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match.";
    return errors;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await signup({ username, email, phone, password });
      localStorage.setItem('token', response.token);
      navigate('/');
    } catch (error) {
      console.error('Sign up failed', error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-image-container">
          <img src="images/signup-container-image.png" alt="Sign Up" className="signup-image" />
        </div>
        <div className="signup-form-container">
          <img src="/logo.png" alt="Travel Buddy Logo" className="logo" />
          <div className="signup-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="input-group">
                <img src="/username-icon.png" alt="Username Icon" className="icon" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="input-field"
                />
              </div>
              {errors.username && <p className="error">{errors.username}</p>}

              <div className="input-group">
                <img src="/email-icon.png" alt="Email Icon" className="icon" />
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
                <img src="/phone-icon.png" alt="Phone Icon" className="icon" />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="input-field"
                />
              </div>
              {errors.phone && <p className="error">{errors.phone}</p>}

              <div className="input-group">
                <img src="/password-icon.png" alt="Password Icon" className="icon" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="input-field"
                />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}

              <div className="input-group">
                <img src="/confirm-password-icon.png" alt="Password Icon" className="icon" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="input-field"
                />
              </div>
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
