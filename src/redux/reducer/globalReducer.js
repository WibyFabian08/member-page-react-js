const initialState = null;

export const errorReducer = (state = initialState, action) => {
    if(action.type === 'SET_ERROR') {
        return action.value
    }
    return state;
}