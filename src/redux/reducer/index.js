import { combineReducers } from "redux";

import { globalReducer } from "../reducer/globalReducer";
import { loginReducer, userReducer } from "../reducer/authReducer";

const reducer = combineReducers({
  globalReducer,
  loginReducer,
  userReducer,
});

export default reducer;
