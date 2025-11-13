import React from "react";
import CGPACard from "./components/CGPACard.jsx";
import AttendanceCard from "./components/AttendanceCard.jsx";

/**
 * Home Page: Display both calculators in a two-column layout
 */
export function HomePage() {
  return (
    <main className="content">
      <h1 className="title">Calculators</h1>
      <div className="two-col">
        <CGPACard />
        <AttendanceCard />
      </div>
    </main>
  );
}

/**
 * CGPA Calculator Page: Full-screen CGPA calculator
 */
export function CGPAPage() {
  return (
    <main className="content">
      <h1 className="title">CGPA Calculator</h1>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <CGPACard />
      </div>
    </main>
  );
}

/**
 * Attendance Calculator Page: Full-screen Attendance calculator
 */
export function AttendancePage() {
  return (
    <main className="content">
      <h1 className="title">Attendance Calculator</h1>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <AttendanceCard />
      </div>
    </main>
  );
}
