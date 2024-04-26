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

const Posts: React.FC = () => {
   
    let [modal, setModal] = useState(false);
    let [filter, setFilter] = useState<PostFilterType>({sort: 'title', query: ''});
    let [limit, setLimit] = useState(10);
    let [page, setPage] = useState(1);
    const lastElement = useRef<HTMLDivElement>(null);

    const {posts, totalPages, isLoading: isPostLoading, error} = useTypedSelector(state => state.posts);

    useObserver(lastElement, page < (totalPages ? totalPages : 0), isPostLoading, () =>{
        setPage(page + 1)
      })

    useEffect(() => {
        fetchPosts(limit, page, posts);
        //console.log(limit, page)
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
            {error &&
                <h1>Error occured {error}</h1>
            }
            <PostList 
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title={"Posts list"}
            lastElement={lastElement}
            loadedOk={!isPostLoading}/> 
            {isPostLoading &&
                <div style={{
                    display: 'flex', 
                    justifyContent: 'center',
                    marginTop: '50'}}>
                      <Loader></Loader>
                  </div>
            }
            {/* {HandleRequest(isPostLoading, error, 
                    () => posts.length === 0 ? <h1>No posts</h1> : <PostList 
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title={"Posts list"}
                    lastElement={lastElement}
                    loadedOk={!isPostLoading}/> 
                  )} */}
            <Pagination totalPages={totalPages ? totalPages : 0} page={page} changePage={changePage}/>
                
        </div>
    );
};

export default Posts;