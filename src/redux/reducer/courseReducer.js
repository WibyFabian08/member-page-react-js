const initialCourseState = [];

export const myCourseReducer = (state = initialCourseState, action) => {
    if(action.type === 'SET_MY_COURSE') {
        return action.value;
    }
    return state;
}

const initDatajoinClassState = {};

export const datajoinClassReducer = (state = initDatajoinClassState, action) => {
    if(action.type === 'SET_JOIN_CLASS') {
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

const initialMessageState = '';

export const messageReducer = (state = initialMessageState, action) => {
    if(action.type === 'SET_MESSAGE') {
        return action.value;
    }
    return state;
}