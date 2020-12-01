import { combineReducers, createStore }from "redux";
import { cart } from "../reducers/cart";
import { user } from "../reducers/user";
const allReducers = combineReducers({cart, user})

export const store = createStore(allReducers);