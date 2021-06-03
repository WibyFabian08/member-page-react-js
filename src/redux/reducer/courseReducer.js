const initialCourseState = [];

export const myCourseReducer = (state = initialCourseState, action) => {
    if(action.type === 'SET_MY_COURSE') {
        return action.value;
    }
    return state;
}

const initialStatusState = 'idle';

export const statusReducer = (state = initialStatusState, action) => {
    if(action.type === 'SET_STATUS') {
        return action.value;
    }
    return state;
}