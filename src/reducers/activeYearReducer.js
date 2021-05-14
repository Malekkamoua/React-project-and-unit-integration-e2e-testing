export default function (state = null, action) {
  switch (action.type) {
    case "YEAR_SELECTED":
      return action.payload;
  }
  return state;
}
