const defaultState = {
    list: [],
    allPrice: 0,
    searchList:[]
}
const reducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    const all = () => {
        let total = newState.list.map(item => (
             item.price  * item.num
        ))
        return total.reduce((prev, next) => prev + next, 0)
    }
    switch (action.type) {
        case "INIT":
            newState.list = action.data
            break;
        case "DEL":
            newState.list.splice(action.id, 1);
            break;
        case "ADD":
            newState.list.push(action.item);
            break;
        case "ADDNUM":
            //所在下标  便利list数组.findIndex每一项的id与action.id相比较
            let ind = newState.list.findIndex(item => item.id === action.id);
            newState.list[ind].num = newState.list[ind].num + 1;
            newState.allPrice = all();
            break;
        case "REDUCENUM":
            let index = newState.list.findIndex(item => item.id === action.id);
            if (newState.list[index].num > 1) {
                newState.list[index].num = newState.list[index].num - 1;
            }
            break;
            case "Search":
                let name=action.name;
            console.log(name);

        default:
            break;
    }
    return newState
}
export default reducer

