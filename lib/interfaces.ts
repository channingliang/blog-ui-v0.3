interface ApiData {
    code: string;
    msg: string;
    data: any;
}

interface BlogData {
    articleCount: number;
    photoCount: number;
    tagCount: number;
    journalCount: number;
    commentCount: number;
}

interface TagData {
    tagId: number;
    name: string;
}

type RecordData = PostsData | ImagesData;
interface PageData {
    records: RecordData[];
    total: number;
    size: number;
    current: number;
    pages: number;
}

interface PostsData {
    postId: number;
    title: string;
    subtitle: string;
    coverUrl: string;
    createTime: string;
    viewCount: number;
}

interface PostData {
    postId: number;
    title: string;
    subtitle: string;
    content: string;
    coverUrl: string;
    createTime: string;
    editTime: string;
    viewCount: number;
    tags: TagData[];
    prev: PostData;
    next: PostData;
}

interface ImagesData {
    imageId: number;
    title: string;
    url: string;
}

interface ImageData {

}

