import React from "react";
import Header from "./components/Header.jsx";
import CGPACard from "./components/CGPACard.jsx";
import AttendanceCard from "./components/AttendanceCard.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <h1 className="title">Calculators</h1>
        <div className="two-col">
          <CGPACard />
          <AttendanceCard />
        </div>
      </main>
      <FooterSpacer />
    </div>
  );
}

// Invisible spacer so header shadow doesn't overlap without creating scroll
function FooterSpacer() { return <div style={{ height: 0 }} />; }
