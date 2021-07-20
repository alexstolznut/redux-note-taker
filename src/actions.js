//defining the action creators

export const actions = {
    addTask: (task) => ({
        type: 'ADD_TASK',
        task,
    }),
    deleteTask: () => ({
        type:'DELETE_TASK',
       
    })
};

