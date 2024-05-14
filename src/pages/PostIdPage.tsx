import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { HandleRequest } from '../utils/pages';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import PostService from '../components/API/PostService';
import { useFetching } from '../hooks/useFatching';
import { Comment } from '../types/post';

const PostIdPage: React.FC = () => {
    const {fetchPost} = useActions()
    const {post, isLoading, error} = useTypedSelector(state => state.post);
    const params = useParams()
    //let [post, setPost] = useState({});
    let [comments, setComments] = useState<Comment[]>([]);
    // let [fetchPostById, isLoading, error] = await fetchPost(params.id)

     let {fetching: fetchComments, 
        isLoading: isCommentsLoading, 
        error: commentsError} = useFetching(async (id: string | undefined) => {
         const response = await PostService.getCommentByPostId(id)
         setComments(response.data)
     })

    useEffect(() => {
        fetchPost(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className='content'>
            
            {HandleRequest(isLoading, error,
                () => post == null ? "No post" : <h1>{post.id}. {post.title}</h1>)} 
            
             {HandleRequest(isCommentsLoading, commentsError, 
                () => <div>
                        <h1>
                            Comments
                        </h1>
                        <div>
                            {comments.map((comment) => 
                                <div style={{marginTop: '1em'}} key={comment.id}>
                                    <h5>{comment.email}</h5>
                                    <div>{comment.body}</div>
                                </div>)}
                        </div>
                      </div>, !isLoading)
            }
        </div>
    );
};

export default PostIdPage;