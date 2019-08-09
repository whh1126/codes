const defaultState = {
    list: []
}
const usersReducer = (state = defaultState, action) => {
    let newState = { ...state, list: [...state.list] };
    switch (action.type) {
        case "ADD_USER":
            newState.list.push(action.val)
            break;
        case "ADD_SEX":
            newState.list.push(action.girl)
            break;
        case "DEL":
            newState.list.splice(action.index, 1)
            break;
        default:
            break;
    }
    return newState
}
export default usersReducer
