import { Dispatch } from "redux"
import { Post, PostAction, PostActionTypes, PostsAction, PostsActionTypes } from "../../types/post"
import axios from "axios"
import { getPagesCount, isPrevPage } from "../../utils/pages"

export const fetchPosts = (limit: number = 100, page: number = 1, posts: Post[] = []) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try{
            //console.log(4, posts);
            dispatch({type: PostsActionTypes.FETCH_POSTS, payload: posts})
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })

            const totalPages = getPagesCount(Number(response.headers['x-total-count']), limit);

            //console.log(posts.length, totalPages, posts.length / totalPages, page < 1 + posts.length / totalPages)
            
            if(isPrevPage(page, posts.length, totalPages)){     
                //console.log("if");
                dispatch({
                    type: PostsActionTypes.FETCH_POSTS_SUCCESS, 
                    payload: {
                        posts: posts,
                        totalPages,
                    }})
                }
            else{
                //console.log("else");
                posts = [...posts, ...response.data];
                setTimeout(() => {
                    dispatch({
                        type: PostsActionTypes.FETCH_POSTS_SUCCESS, 
                        payload: {
                            posts,
                            totalPages,
                        }})
                }, 500)
            }   
        } catch(e){
            console.log(e)
            dispatch({
                type: PostsActionTypes.FETCH_POSTS_ERROR, 
                payload: "error during loading posts"
            })
        }
    } 
}

export const fetchPost = (id: string | undefined) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try{
            if(!id){
                dispatch({type: PostActionTypes.FETCH_POST_ERROR, payload: "wrong post id"})
            }
            dispatch({type: PostActionTypes.FETCH_POST})
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            setTimeout(() => {
                dispatch({type: PostActionTypes.FETCH_POST_SUCCESS, payload: response.data})
            }, 5)
        } catch(e){
            dispatch({
                type: PostActionTypes.FETCH_POST_ERROR, 
                payload: "error during loading post " + id
            })
        }
    } 
}

export const addPost = (post: Post, posts: Post[]) => {
    return (dispatch: Dispatch<PostsAction>) => {
        posts = [...posts, post];
        dispatch({type: PostsActionTypes.ADD_POST, payload: posts})
    } 
}

export const deletePost = (id: string, posts: Post[]) => {
    return (dispatch: Dispatch<PostsAction>) => {
        posts = posts.filter(el => el.id !== id)
        dispatch({type: PostsActionTypes.DELETE_POST, payload: posts})
    } 
}