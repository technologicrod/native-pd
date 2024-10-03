import React  from 'react';
import './App.css';
import { useNavigate, NavLink } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported

function Nav() {
  const navigate = useNavigate();
  const name = "You"
  const handleLogout = () => {
    navigate('/'); // Navigate to the home page
  };
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">Bootlegify</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" activeclassname="active">Home</NavLink>
            </li>
          </ul>
          <div className="d-flex ms-auto">
            <div className="dropdown">
              <button type="button" className="btn btn-light dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'white', border: 'none', display: 'flex', alignItems: 'center' }}>
                <div className="profile-button" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="default-profile-pic" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: getRandomColor(), marginRight: '8px' }}></div>
                  <div style={{ fontSize: '14px', color: '#333', marginRight: '8px' }}>{name}</div>
                </div>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
