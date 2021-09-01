import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//reducers
import PostReducer from "../reducer/PostReducer";
import UserReducer from "../reducer/UserReducer";

const rootReducer = combineReducers({
  PostReducer,
  UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
