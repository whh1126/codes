
const defaultState = {
    list: [],
    sumPrice: 0,
    allcheck: false
};
const reducer = (state = defaultState, action) => {
    //总价
    const all = () => {
        let total = state.list.map(item => (
            item.price * item.count
        ))
        return total.reduce((prev, next) => prev + next, 0)
    };
    switch (action.type) {
     
        case "ADD_SHOP": {
            let ind = state.list.findIndex(item => item.id == action.obj.id)
            if (ind == -1) {
                action.obj.count = 1;
                state.list.push(action.obj)
            } else {
                state.list[ind].count++
            }
            return {
                ...state,
                list: [...state.list]
            }
        }
        case "CHANGE_CHECK": {//点击单选
            console.log(action)
            let { id, flag } = action
            let ind = state.list.findIndex(item => item.id == id);
            return {
                ...state,
                list: [...state.list]
            }
        }
        case "Change_Count": {
            let { id, count } = action;
            let ind = state.list.findIndex(item => item.id == id);//判断id是否相等
            state.list[ind].count = count;//判断所在id count是否一致
            state.sumPrice=all();
            return {
                ...state,
                list: [...state.list]
            }
        }
        default: return state
    }
};
export default reducer;