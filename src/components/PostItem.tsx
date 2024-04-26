import React from 'react';
import { Post } from '../types/post';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

type PostItemProps = {
    post: Post;
    num: number;
    remove: (id: string) => void
}

const PostItem: React.FC<PostItemProps> = ({post, num, remove}) => {
  const router = useNavigate()
  //console.log(num);

    return (
        <div className="post">
            <div className="post__content">
              <strong>{num}. {post.title}</strong>
              <div>
              {post.body}
              </div>
            </div>
            <div className="post__btns">
              <MyButton onClick={() => {remove(post.id)}}>Delete</MyButton>
              <MyButton onClick={() => {router(`/posts/${post.id}`)}}>Open</MyButton>
            </div>
        </div>
    );
};

export default PostItem;