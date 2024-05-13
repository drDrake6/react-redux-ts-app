import {useMemo} from "react";
import { Post } from "../types/post";
import { getValue } from "../utils/other";

export const useSortedPost = (posts: Post[], sort: keyof Post | undefined) => {
    const sortedPosts = useMemo(() => {
        if(sort){
            return [...posts].sort((a, b) => getValue(a, sort).localeCompare(getValue(b, sort)));
          }
          return posts;
      }, [sort, posts])
    return sortedPosts;
}

export const usePost = (posts: Post[], sort: keyof Post | undefined, query: string) => {
    const sortedPosts = useSortedPost(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])
    return sortedAndSearchedPosts;
}