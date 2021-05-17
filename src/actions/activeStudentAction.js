export function activeStudentAction(student) {
  console.log(student);
  return {
    type: "STUDENT_SELECTED",
    payload: student,
  };
}
