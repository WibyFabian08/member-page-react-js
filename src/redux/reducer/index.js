import { combineReducers } from "redux";

import { errorReducer } from "../reducer/globalReducer";
import { loginReducer, userReducer } from "../reducer/authReducer";

const reducer = combineReducers({
  errorReducer,
  loginReducer,
  userReducer,
});

export default reducer;
