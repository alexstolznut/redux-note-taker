const initialState = {
    tasks: ['I am a task'],
};

const appReducer = (state = initialState, action) => {
    console.log(action.type);
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat(action.task),
            };
        case 'DELETE_TASK':
            const tempState = state.tasks;
            tempState.splice(tempState.length-1, 1)
            return {
                ...state,
                tasks: tempState,
            }
        default:
            return state;
    }
};

export default appReducer;