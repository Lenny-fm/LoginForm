import { createStore, combineReducers } from "redux";
import userReducer from '../features/userSlice'



const store = createStore(combineReducers({
    user:userReducer
}))

export default store;