// Grade points (added F = 0)
export const GRADE_POINTS = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
};

export const CREDIT_PER_SUBJECT = 4;

export function calcCGPA(counts) {
  // counts: {S: n, A: n, B: n, C: n, D: n, E: n, F: n}
  let totalSubjects = 0;
  let totalPoints = 0;

  for (const [grade, gp] of Object.entries(GRADE_POINTS)) {
    const n = Number(counts[grade] || 0);
    totalSubjects += n;
    totalPoints += n * gp;
  }

  const cgpa = totalSubjects ? totalPoints / totalSubjects : 0;

  return {
    cgpa: Number.isFinite(cgpa) ? Number(cgpa.toFixed(2)) : 0,
    totalSubjects,
    totalCredits: totalSubjects * CREDIT_PER_SUBJECT,
  };
}
