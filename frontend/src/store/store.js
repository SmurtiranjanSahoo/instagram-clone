import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//reducers
import PostReducer from "../reducer/PostReducer";

const rootReducer = combineReducers({
  PostReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
