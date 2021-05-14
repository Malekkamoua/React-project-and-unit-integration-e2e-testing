import { combineReducers } from "redux";

import activePfeReducer from "./activePfeReducer";
import activeStudentReducer from "./activeStudentReducer";
import activeTeacherReducer from "./activeTeacherReducer";
import activeYearReducer from "./activeYearReducer";

const rootReducer = combineReducers({
  activePfe: activePfeReducer,
  activeStudent: activeStudentReducer,
  activeTeacher: activeTeacherReducer,
  activeYear: activeYearReducer,
});

export default rootReducer;
