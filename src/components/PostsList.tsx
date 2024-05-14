import React, { ReactNode, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useAction';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';
import { Post } from '../types/post';

type PostListProps = {
    title: ReactNode;
    posts: Post[];
    remove: (id: string) => void;
    lastElement: React.RefObject<HTMLDivElement>, 
    loadedOk: boolean;
}

const PostList: React.FC<PostListProps> = ({title, posts, remove, loadedOk, lastElement}) => {
        return (
        <div className='post-list'>
            <h1 style={{whiteSpace: 'nowrap'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition
                        key={post.id}
                        timeout={300}
                        classNames='post'
                    >
                        <PostItem remove={remove} post={post} num={index + 1}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
            {loadedOk &&
            <div ref={lastElement} style={{bottom: 0, width: '100%', height: 20, background: 'red'}}/>}
        </div>
    );
};

export default PostList;