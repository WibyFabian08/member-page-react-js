const initialState = null;

export const errorReducer = (state = initialState, action) => {
    if(action.type === 'SET_ERROR') {
        return action.value
    }
    return state;
}

const initTokenState = null;

export const tokenReducer = (state = initTokenState, action) => {
    if(action.type === 'SET_TOKEN') {
        return action.value;
    }
    return state;
}