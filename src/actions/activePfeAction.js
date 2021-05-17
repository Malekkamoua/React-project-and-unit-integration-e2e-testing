export function activePfeAction(pfe) {
  console.log(pfe);
  return {
    type: "PFE_SELECTED",
    payload: pfe,
  };
}
