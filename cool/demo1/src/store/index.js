import {createStore} from "redux";
import usersReducer from "./reducer/usersReducer"
const store = createStore(usersReducer)
export default store;