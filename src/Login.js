import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/home');
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="mb-4">Welcome to Bootlegify</h1>
      <div className="card p-4 shadow" style={{ width: '300px' }}>
        <h1 className="mb-4">Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3 position-relative">
            <label htmlFor="password">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="form-control pe-5" // Added pe-5 for padding on the right
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y pe-3 pt-4"
              style={{ cursor: 'pointer' }}
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
            </span>
          </div>
          <button className="btn btn-primary mt-4" onClick={handleLogout}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
