import { combineReducers } from "redux";

import { errorReducer, tokenReducer } from "./globalReducer";
import { loginReducer, userReducer } from "./authReducer";
import { statusReducer, myCourseReducer, messageReducer } from "./courseReducer";

const reducer = combineReducers({
  errorReducer,
  loginReducer,
  userReducer,
  statusReducer,
  myCourseReducer,
  messageReducer,
  tokenReducer
});

export default reducer;
