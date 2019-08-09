import { createStore, combineReducers,applyMiddleware } from "redux";
import logger from "redux-logger"
import exam from "./exam/examreducer"
const reducer = combineReducers({
    exam
})
const store = createStore(reducer,applyMiddleware(logger));
window.store=store
export default store