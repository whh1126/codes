import { INIT_DATA, CLICK_NEXT, CLICK_ITEM } from './exam.type'

const exam = (state = {
    index: 0, //第几题
    data: [], //所有的题目
    curdata: {}, //当前的题目
    length: 0, //一共多少道题
    startTime: 0,
    endTime: 0 //点击提交的时候
}, action) => {
    console.log(action);
    switch (action.type) {
        case INIT_DATA: //初始化数据
            {
                state.data = action.list;
                state.curdata = state.data[state.index]
                state.length = state.data.length;
                //开始时间
                return {
                    ...state,
                    data: [...state.data],
                    curdata: { ...state.curdata }
                }
            }
        case CLICK_NEXT:
            {
                let { ind } = action;
                console.log(ind, 'ind');
                state.index = ind;
                state.curdata = state.data[state.index];
                return {
                    ...state,
                    curdata: { ...state.curdata }
                }
            }
        case CLICK_ITEM: { //点击的是每一道题的选项
            let { id } = action;
            let { index } = state;
            console.log(id, index, 'actiond');
            state.data[index].selected = id;
            state.index = index + 1;
            if (state.index >= state.length - 1) {
                state.index = state.length - 1; //2
            }
            state.curdata = state.data[state.index]; //更新当前的题目状态

            return {
                ...state,
                data: [...state.data],
                curdata: { ...state.curdata }
            }
        }
        default: return state
    }

}


export default exam;