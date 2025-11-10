import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">🎓</div>
      <div className="brand"><h1>Saveetha Calculator</h1></div>
      <nav className="nav">
        <span className="nav-link">Features</span>
        <span className="nav-link">Tools</span>
        <span className="nav-link">Contact Us</span>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}
