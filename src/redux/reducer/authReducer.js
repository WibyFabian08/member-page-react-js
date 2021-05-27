const loginState = {
    name: '',
    password: ''
}

const loginReducer = (state = loginState, action) => {
    if(action.type === 'SET_LOGIN') {
        return {
            ...state,
            name: action.value,
            password: action.value
        }
    }
    return state;
}