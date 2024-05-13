import { Post } from "./post";

export type State = {
    isLoading: boolean;
    error: string | null;
}

export type KeyOf<T extends object> = Extract<keyof T, string>;

export type PostFilterType = {
    sort: KeyOf<Post> | undefined,
    query: string
}

export type OptionType = {
    key: string,
    value: string,
    name: string
}