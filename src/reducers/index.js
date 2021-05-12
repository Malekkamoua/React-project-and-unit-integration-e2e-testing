import { combineReducers } from "redux";

import activePfeReducer from "./activePfeReducer";
import activeStudentReducer from "./activeStudentReducer";
import activeTeacherReducer from "./activeTeacherReducer";

const rootReducer = combineReducers({
  activePfe: activePfeReducer,
  activeStudent: activeStudentReducer,
  activeTeacher: activeTeacherReducer,
});

export default rootReducer;
