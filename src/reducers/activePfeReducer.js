export default function (state = null, action) {
  switch (action.type) {
    case "PFE_SELECTED":
      return action.payload;
  }
  return state;
}
