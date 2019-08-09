const defaultState = {
    foots: [],
    sumPrice: 0,
    arr: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INIT_DATA":
            state.foots = action.data.shop.goods;
            state.foots.map((item, index) => (
                item.foods.map((item1, index1) => (
                    item.count = 0
                ))
            ))
            return {
                ...state,
                foots: [...state.foots]
            }
        case "ADD_COUNT":
            {
                let { index, ins } = action;
                console.log(action)
                console.log(state.foots[ins].foods[index])
                state.foots[ins].foods[index].count = action.count;
                let ff = state.arr.findIndex(item => item.name == state.foots[ins].foods[index].name)
                if (ff == -1) {
                    state.arr.push(state.foots[ins].foods[index]);
                }
                state.sumPrice = state.arr.reduce((prev, next) => {
                    return prev + next.price * next.count
                }, 0)
                return {
                    ...state,
                    foots: [...state.foots],
                    arr: [...state.arr]
                }
            }
        default:
            return state
    }
}
export default reducer