import { combineReducers } from "redux";

import { errorReducer } from "./globalReducer";
import { loginReducer, userReducer } from "./authReducer";
import { statusReducer, myCourseReducer } from "./courseReducer";

const reducer = combineReducers({
  errorReducer,
  loginReducer,
  userReducer,
  statusReducer,
  myCourseReducer,
});

export default reducer;
