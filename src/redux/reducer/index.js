import {combineReducers} from 'redux';

import {globalReducer} from '../reducer/globalReducer';
import {authReducer} from '../reducer/authReducer';

const reducer = combineReducers({
    globalReducer,
    authReducer    
})

export default reducer;