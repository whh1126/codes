const defaultState = {
    list: [],
    old: [],
    search: [{
        id: 1,
        title: "电脑",
    }, {
        id: 2,
        title: "电话",
    }, {
        id: 3,
        title: "平板",
    }]
}
const reducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "GET_DATA":
            let { id } = action;
            console.log(action)
            newState.list = action.list;
            // newState.list = newState.list.filter(item => item.id == id)
            break;
        case "GET_OLD":
            newState.old = action.data
            break;
        case "SEARCH":
            let val = action.val;
            console.log(val)
            newState.list = newState.search.filter(item => {
                // console.log(item)
                // if (item.title.includes(val)) {
                //     return item
                // }
                return item.title.includes(val)
            })
            console.log(newState.list)
            break
        case "DEL": {
            let { index } = action
            newState.list.splice(index, 1);
            break;
        }
        case "ADD":
            newState.list.push(action.obj);
            break
        default:
            break;
    }
    return newState
}
export default reducer