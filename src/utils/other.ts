import { Post } from "../types/post";
import { KeyOf } from "../types/utils";

export function getValue<T, K extends keyof T>(data: T, key: K) {
    return data[key];
}

const postKeys: Record<string, KeyOf<Post>> = {
    'title': 'title',
    'body': 'body',
}

export function getPostKey(key: string): keyof Post {
    return postKeys[key];

    // switch(key){
    //     case 'title':
    //         return 'title'
    //     case 'body':
    //         return 'body'
    //     default: 
    //         return 'title';
    // }
}