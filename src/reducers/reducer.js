const initialState = {
    tasks: [],
    token: ''
}
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "Adiciona_Tarefa":
            return {
                ...state, tasks:[...state.tasks, action.task]
        } 
        case "Adiciona_Token":
            return{
                ...state,token: action.token
            }
    default:
        return state

    }
}
