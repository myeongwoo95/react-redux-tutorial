import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

//root 리듀서 만들기
const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;