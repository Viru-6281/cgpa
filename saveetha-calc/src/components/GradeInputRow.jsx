import React from "react";

export default function GradeInputRow({ label, value, onChange, color }) {
  return (
    <div className="grade-row" style={{ borderColor: color }}>
      <div className="grade-badge" style={{ background: color }}>{label}</div>
      <input
        type="number"
        min="0"
        step="1"
        className="grade-input"
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value || 0)))}
      />
    </div>
  );
}
