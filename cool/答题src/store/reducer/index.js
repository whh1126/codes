const defaultState = {
    list: []
};
const reducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "INIT":
            newState.list = action.initvalue;//initvalue指的是action里传过来的值
            break;
        case "CHOOSE":
            const { id: { id }, itemid } = action.val;
            const right = state.list[id].right;//正确选项
           
            if (itemid !== right) {
                newState.list[id].list.forEach(item => {
                    if (item.id === itemid) item.error = true;
                })
            }
            newState.list[id].list.forEach(item => {
                if (item.id === right) item.right = true
            })
            newState.list[id].choose = itemid === right 
            break
        default:
            break;
    }
    return newState
}
export default reducer
