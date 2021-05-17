export function activeTeacherAction(teacher) {
  console.log(teacher);
  return {
    type: "TEACHER_SELECTED",
    payload: teacher,
  };
}
