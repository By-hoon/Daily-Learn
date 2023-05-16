function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const rest = grade % 5;
    if (rest < 3) return grade;
    return (grade += 5 - rest);
  });
}
