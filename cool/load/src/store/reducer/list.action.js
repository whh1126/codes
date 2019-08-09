import axios from "axios";
import "../../mock/index";
import { GET_DATA, GET_OLD } from "./list.type"
//主页面请求
export const getList = (dispatch) => {
    axios.get('/api/list').then((res) => {
        dispatch({
            type: GET_DATA,
            list: res.data.list
        })
    })

}
//scroll请求
// export const getOld = (dispatch) => {
//     axios.get('/api/old').then((res) => {
//         dispatch({
//             type: GET_OLD,
//             old: res.data.old
//         })
//     })
// }
//页面加载
