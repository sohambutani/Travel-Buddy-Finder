import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src="/appheaderlogo.png" alt="Logo" className="header-logo" /> {/* Add the logo image */}
            <img src="/travelbuddy-name-logo.png" alt="Additional Image" className="additional-image" /> {/* Add the additional image */}
          </div>
          <h1 className="header-title">Welcome to the Travel Buddy Finder</h1>
          <div className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
