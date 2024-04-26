import { State } from "./utils";

export type Comment = {
    id: string;
    email: string;
    body: string;
}

export type Post = {
    id: string;
    title: string;
    body: string;
}

export type PostState = {
    post: Post | null;
} & State

export type PostsResponse = {
    posts: Post[];
    totalPages: number | null;
}

export type PostsState = PostsResponse & State

export enum PostsActionTypes{
    FETCH_POSTS = "FETCH_POSTS",
    FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
    ADD_POST = "ADD_POST",
    DELETE_POST = "DELETE_POST",
}

export enum PostActionTypes{
    FETCH_POST = "FETCH_POST",
    FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
    FETCH_POST_ERROR = "FETCH_POST_ERROR",
}

type FetchPostAction = {
    type: PostActionTypes.FETCH_POST;
}

export type FetchPostsAction = {
    type: PostsActionTypes.FETCH_POSTS;
    payload: Post[];
}

type FetchPostSuccessAction = {
    type: PostActionTypes.FETCH_POST_SUCCESS;
    payload: Post;
}

type FetchPostsSuccessAction = {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: PostsResponse;
}

type FetchPostErrorAction = {
    type: PostActionTypes.FETCH_POST_ERROR;
    payload: string;
}

type FetchPostsErrorAction = {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

type AddPostAction = {
    type: PostsActionTypes.ADD_POST;
    payload: Post[];
}

type DeletePostAction = {
    type: PostsActionTypes.DELETE_POST;
    payload: Post[];
}

export type PostsAction = 
    FetchPostsAction | 
    FetchPostsSuccessAction | 
    FetchPostsErrorAction | 
    AddPostAction |
    DeletePostAction;

export type PostAction = 
    FetchPostAction |
    FetchPostSuccessAction |
    FetchPostErrorAction