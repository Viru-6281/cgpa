import React from "react";

export default function SubjectRow({ item, onChange, onDelete }) {
  const { id, name, attended, total } = item;

  const valid = Number.isFinite(attended) && Number.isFinite(total) && total > 0 && attended >= 0 && attended <= total;
  const pct = valid ? (attended / total) * 100 : 0;

  // Recommendation for 80%
  let hint = "Invalid input.";
  if (valid) {
    if (pct < 80) {
      // x additional classes to reach >=80%: find smallest x s.t. (attended + x)/(total + x) >= 0.8
      const x = Math.max(0, Math.ceil((0.8 * total - attended) / (1 - 0.8)));
      hint = `Attend ${x} more ${x === 1 ? "class" : "classes"} to reach 80%.`;
    } else {
      // how many leaves can take while staying >=80% : max y with (attended)/(total + y) >= 0.8
      const y = Math.max(0, Math.floor(attended / 0.8 - total));
      hint = `You can take ${y} ${y === 1 ? "leave" : "leaves"} and stay ≥ 80%.`;
    }
  }

  return (
    <div className="subject-row">
      <input
        className="subject-name"
        value={name}
        placeholder="Subject 1"
        onChange={(e) => onChange(id, { name: e.target.value })}
      />
      <input
        className="subject-num"
        type="number"
        placeholder="e.g., 40"
        min="0"
        value={Number.isFinite(attended) ? attended : ""}
        onChange={(e) => {
          const v = e.target.value === "" ? NaN : Number(e.target.value);
          onChange(id, { attended: v });
        }}
      />
      <input
        className="subject-num"
        type="number"
        placeholder="e.g., 50"
        min="0"
        value={Number.isFinite(total) ? total : ""}
        onChange={(e) => {
          const v = e.target.value === "" ? NaN : Number(e.target.value);
          onChange(id, { total: v });
        }}
      />

      <div className={`subject-hint ${valid ? (pct < 80 ? "warn" : "ok") : "invalid"}`}>
        {valid ? `${pct.toFixed(1)}% — ${hint}` : hint}
      </div>

      <button className="trash" onClick={() => onDelete(id)} title="Remove">
        🗑️
      </button>
    </div>
  );
}
