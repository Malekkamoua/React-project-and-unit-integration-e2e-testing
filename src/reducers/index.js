import { combineReducers } from "redux";

import activePfeReducer from "./activePfeReducer";
import activeStudentReducer from "./activeStudentReducer";

const rootReducer = combineReducers({
  activePfe: activePfeReducer,
  activeStudent: activeStudentReducer,
});

export default rootReducer;
