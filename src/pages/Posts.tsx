import React, { useEffect, useRef, useState } from 'react';
import PostList from '../components/PostsList';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';
import { Post } from '../types/post';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/model/MyModel';
import PostForm from '../components/PostForm';
import { usePost } from '../hooks/usePost';
import { PostFilterType } from '../types/utils';
import PostFilter from './PostFilter';
import Pagination from '../components/UI/Pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import Loader from '../components/UI/Loader/Loader';
import { HandleRequest, isEffected } from '../utils/pages';

const Posts: React.FC = () => {
   
    let [modal, setModal] = useState(false);
    let [filter, setFilter] = useState<PostFilterType>({sort: undefined, query: ''});
    let [limit, setLimit] = useState(10);
    let [page, setPage] = useState(1);
    const lastElement = useRef<HTMLDivElement>(null);

    const {posts, totalPages, isLoading: isPostLoading, error} = useTypedSelector(state => state.posts);

    //console.log(paginated)

    useObserver(lastElement, 
        page < (totalPages ? totalPages : 0),
        filter,
        isPostLoading,
        () => { setPage(page + 1) })

    useEffect(() => {
        
        fetchPosts(limit, page, posts);
    }, [limit, page])

    const removePost = (id: string) => {
        deletePost(id, posts);
    }

    const createPost = (post: Post) => {
        addPost(post, posts);
        setModal(false);
    }

    const changePage = (page: number) => {
        setPage(page)
      }

    const {fetchPosts, deletePost, addPost} = useActions()
    
    const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

    return (
        <div className='App'>
            <MyButton style={{marginTop: '2em'}} onClick={() => setModal(true)}>
                Create Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '1em 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/> 
            {HandleRequest(isPostLoading, error,
                    () => <PostList 
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title={posts.length === 0 ? "No posts" : "Posts list"}
                    lastElement={lastElement}
                    loadedOk={!isPostLoading && !isEffected(filter)}/> 
                  )}
            {/* <Pagination totalPages={totalPages ? totalPages : 0} page={page} changePage={changePage}/> */}
                
        </div>
    );
};

export default Posts;