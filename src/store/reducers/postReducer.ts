import { PostsAction, PostActionTypes, PostState, PostsState, PostAction, PostsActionTypes } from "../../types/post"

const initialPostsState: PostsState = {
    posts: [],
    totalPages: null,
    isLoading: false,
    error: null
}

const initialPostState: PostState = {
    post: null,
    isLoading: false,
    error: null
}

export const postsReducer = (state = initialPostsState, action: PostsAction): PostsState => {
    switch (action.type){
        case PostsActionTypes.FETCH_POSTS:
            return {posts: action.payload, totalPages: null, isLoading: true, error: null}
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {posts: action.payload.posts, totalPages: action.payload.totalPages, isLoading: false, error: null}
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {posts: [], totalPages: null, isLoading: false, error: action.payload}
        case PostsActionTypes.ADD_POST:
            return {posts: action.payload, totalPages: null, isLoading: false, error: null}
        case PostsActionTypes.DELETE_POST:
            return {posts: action.payload, totalPages: null, isLoading: false, error: null}
        default:
            return state
    }
}

export const postReducer = (state = initialPostState, action: PostAction): PostState => {
    switch (action.type){
        case PostActionTypes.FETCH_POST:
            return {post: null, isLoading: true, error: null}
        case PostActionTypes.FETCH_POST_SUCCESS:
            return {post: action.payload, isLoading: false, error: null}
        case PostActionTypes.FETCH_POST_ERROR:
            return {post: null, isLoading: false, error: action.payload}
        default:
            return state
    }
}