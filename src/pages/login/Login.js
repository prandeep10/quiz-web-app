import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dummyUsername = 'username10';
  const dummyPassword = 'password';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === dummyUsername && password === dummyPassword) {
      localStorage.setItem('loggedin', 'true');
      localStorage.setItem('username', username);
      navigate('/'); // Redirect to the home page
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert('Signup functionality not implemented.');
  };

  return (
    <div className="login-container">
      <div className="tabs">
        <button
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => setActiveTab('signup')}
        >
          Signup
        </button>
      </div>
      <div className="form-container">
        {activeTab === 'login' ? (
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Signup</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
