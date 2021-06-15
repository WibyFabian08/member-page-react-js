const initialOrderState = null;

export const orderReducer = (state = initialOrderState, action) => {
    if(action.type === 'SET_ORDER') {
        return action.value;
    }
    return state;
}