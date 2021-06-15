import { combineReducers } from "redux";

import { errorReducer, tokenReducer } from "./globalReducer";
import { loginReducer, userReducer } from "./authReducer";
import { statusReducer, myCourseReducer, messageReducer } from "./courseReducer";
import {orderReducer} from './orderReducer';

const reducer = combineReducers({
  errorReducer,
  loginReducer,
  userReducer,
  statusReducer,
  myCourseReducer,
  messageReducer,
  tokenReducer,
  orderReducer
});

export default reducer;
