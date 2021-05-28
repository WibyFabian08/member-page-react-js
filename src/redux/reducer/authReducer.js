const loginState = {
    name: '',
    password: ''
}

export const loginReducer = (state = loginState, action) => {
    if(action.type === 'SET_LOGIN') {
        return {
            ...state,
            name: action.value,
            password: action.value
        }
    }
    return state;
}

const userState = null;

export const userReducer = (state = userState, action) => {
    if(action.type === 'SET_USER_DETAILS') {
        return action.value;
    }
    return state;
}