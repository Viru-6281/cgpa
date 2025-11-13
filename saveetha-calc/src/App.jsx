import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import { routes } from "./routeConfig.jsx";
import "./App.css";

export default function App() {
  return (
    <Router basename="/cgpa">
      <div className="page">
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <FooterSpacer />
      </div>
    </Router>
  );
}

// Invisible spacer so header shadow doesn't overlap without creating scroll
function FooterSpacer() { return <div style={{ height: 0 }} />; }
