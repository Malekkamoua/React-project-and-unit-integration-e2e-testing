import { combineReducers } from "redux";

import activePfeReducer from "./activePfeReducer";

const rootReducer = combineReducers({ activePfe: activePfeReducer });

export default rootReducer;
