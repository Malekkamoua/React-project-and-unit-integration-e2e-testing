export default function (state = null, action) {
  switch (action.type) {
    case "TEACHER_SELECTED":
      return action.payload;
  }
  return state;
}
