import { createContext } from 'react';

interface IPostData {
    content: string;
}

const PostDataContext = createContext<IPostData | null>(null);

export default PostDataContext;
