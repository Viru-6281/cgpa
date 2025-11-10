import React, { useMemo } from "react";
import GradeInputRow from "./GradeInputRow.jsx";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { calcCGPA } from "../utils/cgpa.js";

const COLORS = {
  S: "#DCFCE7",
  A: "#E0F2FE",
  B: "#FEF3C7",
  C: "#FCE7F3",
  D: "#FEE2E2",
  E: "#EDE9FE",
  F: "#F3F4F6",
};

export default function CGPACard() {
  const [counts, setCounts] = useLocalStorage("cgpa_counts", {
    S: 0, A: 0, B: 0, C: 0, D: 0, E: 0, F: 0,
  });

  const { cgpa } = useMemo(() => calcCGPA(counts), [counts]);

  function update(grade, n) {
    setCounts((c) => ({ ...c, [grade]: n }));
  }

  return (
    <div className="card">
      <div className="card-title">
        <span className="card-emoji">🧮</span> CGPA Calculator
      </div>
      <p className="card-subtitle">
        Enter the number of subjects for each grade.
      </p>

      <div className="grid grades">
        {["S", "A", "B", "C", "D", "E", "F"].map((g) => (
          <GradeInputRow
            key={g}
            label={g}
            value={counts[g]}
            onChange={(n) => update(g, n)}
            color={COLORS[g]}
          />
        ))}
      </div>

      <div className="cgpa-footer" style={{ marginTop: "auto" }}>
        <div className="cgpa-label">Your CGPA</div>
        <div className="cgpa-value">{Number(cgpa).toFixed(2)}</div>
        {/* removed "Based on X subjects and Y credits." as requested */}
      </div>
    </div>
  );
}
