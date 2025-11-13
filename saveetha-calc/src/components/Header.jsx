import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">🎓</div>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="brand"><h1>Saveetha Calculator</h1></div>
      </Link>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cgpa" className="nav-link">CGPA</Link>
        <Link to="/attendance" className="nav-link">Attendance</Link>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}
