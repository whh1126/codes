const defaultState = {
    list: []

}
const reducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "GET_DATA":
            console.log(action.data)
                newState.list=action.data
            break;

        default:
            break;
    }
    return newState

}
export default reducer