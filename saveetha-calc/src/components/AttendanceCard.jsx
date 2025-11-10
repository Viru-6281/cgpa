import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

export default function AttendanceCard() {
  // store values as numbers or NaN
  const [saved, setSaved] = useLocalStorage("attendance_simple", {
    attended: NaN,
    total: NaN,
  });
  const [attended, setAttended] = useState(Number.isFinite(saved.attended) ? saved.attended : "");
  const [total, setTotal] = useState(Number.isFinite(saved.total) ? saved.total : "");

  useEffect(() => {
    // persist numeric values (or NaN)
    const a = attended === "" ? NaN : Number(attended);
    const t = total === "" ? NaN : Number(total);
    setSaved({ attended: Number.isFinite(a) ? a : NaN, total: Number.isFinite(t) ? t : NaN });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attended, total]);

  const valid = Number.isFinite(Number(attended)) && Number.isFinite(Number(total)) && Number(total) > 0;
  const pct = valid ? (Number(attended) / Number(total)) * 100 : 0;

  let resultText = "Enter attended and total classes.";
  if (valid) {
    if (pct < 80) {
      // minimal x such that (attended + x)/(total + x) >= 0.8
      const a = Number(attended);
      const t = Number(total);
      const needed = Math.ceil((0.8 * t - a) / (1 - 0.8));
      const x = Math.max(0, needed);
      resultText = `${pct.toFixed(1)}% — Attend ${x} more ${x === 1 ? "class" : "classes"} to reach 80%.`;
    } else {
      // maximal leaves y such that attended/(total + y) >= 0.8 -> y <= attended/0.8 - total
      const a = Number(attended);
      const t = Number(total);
      const maxLeaves = Math.max(0, Math.floor(a / 0.8 - t));
      resultText = `${pct.toFixed(1)}% — You can take ${maxLeaves} ${maxLeaves === 1 ? "leave" : "leaves"} and stay ≥ 80%.`;
    }
  }

  return (
    <div className="card">
      <div className="card-title">
        <span className="card-emoji">%</span> Subject-Wise Attendance
      </div>
      <p className="card-subtitle">
        Enter classes attended and total classes to see result for 80%.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <label style={{ display: "block", color: "#6b7280", marginBottom: 6 }}>Attended</label>
          <input
            className="subject-num"
            type="number"
            min="0"
            placeholder="e.g., 40"
            value={attended}
            onChange={(e) => setAttended(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
          />
        </div>

        <div>
          <label style={{ display: "block", color: "#6b7280", marginBottom: 6 }}>Total</label>
          <input
            className="subject-num"
            type="number"
            min="1"
            placeholder="e.g., 50"
            value={total}
            onChange={(e) => setTotal(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
          />
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <div style={{
          borderRadius: 10, padding: 12, background: valid ? (pct < 80 ? "rgba(249,115,22,0.08)" : "rgba(16,185,129,0.06)") : "#f3f4f6",
          color: "#111827", fontWeight: 700
        }}>
          {resultText}
        </div>
      </div>
    </div>
  );
}
