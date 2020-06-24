const initialState = {
    tasks: []
}
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "Adiciona_Tarefa":
            return {
                ...state, tasks:[...state.tasks, action.task]
        };
    default:
        return state

    }
}