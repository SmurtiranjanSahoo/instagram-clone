import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//reducers
import PostReducer from "../reducer/PostReducer";
import UserReducer from "../reducer/UserReducer";
import StoryReducer from "../reducer/StoryReducer";

const rootReducer = combineReducers({
  PostReducer,
  UserReducer,
  StoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
