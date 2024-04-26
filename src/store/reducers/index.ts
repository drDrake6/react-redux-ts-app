import { combineReducers } from "redux";
import { postReducer, postsReducer } from "./postReducer";

export const rootReducer = combineReducers({
    post: postReducer,
    posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>