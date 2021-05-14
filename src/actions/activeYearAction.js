export function activeYearAction(year) {
  console.log(year);
  return {
    type: "YEAR_SELECTED",
    payload: year,
  };
}
