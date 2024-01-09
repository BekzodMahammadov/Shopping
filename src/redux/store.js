import { createStore, combineReducers } from "redux";
import { shopReducer } from "./reducer";

const rootReducer = combineReducers({
  shopReducer,
});

export default function store() {
  return createStore(rootReducer);
}
