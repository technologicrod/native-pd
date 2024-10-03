import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Nav from './Nav';
import Login from './Login';
import Home from './Home';

const SidebarLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route exact path="/home" element={<Home />} />
        </Route>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
