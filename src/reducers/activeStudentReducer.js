export default function (state = null, action) {
  switch (action.type) {
    case "STUDENT_SELECTED":
      return action.payload;
  }
  return state;
}
