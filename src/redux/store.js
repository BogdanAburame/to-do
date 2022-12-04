import { combineReducers, legacy_createStore as createStore } from "redux";
import modalsReducer from "./modalsReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  modals: modalsReducer
})

const store = createStore(rootReducer)

window.store = store
export default store