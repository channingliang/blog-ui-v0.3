interface ApiData {
    code: string;
    msg: string;
    data: any;
}

interface ContentStat {
    postCount: number;
    imageCount: number;
    tagCount: number;
    momentCount: number;
    commentCount: number;
}

interface RecentContent {
    addedPost: PostPageView;
    addedImages: ImagePageView[];
    editedPost: PostPageView;
    editedImages: ImagePageView[];
}

interface TagData {
    tagId: number;
    name: string;
}

type RecordData = PostPageView | ImagePageView;
interface PageData {
    records: RecordData[];
    total: number;
    size: number;
    current: number;
    pages: number;
}

interface PostPageView {
    postId: number;
    title: string;
    subtitle: string;
    coverUrl: string;
    createTime: string;
    viewCount: number;
}

interface PostDetail {
    postId: number;
    title: string;
    subtitle: string;
    content: string;
    coverUrl: string;
    createTime: string;
    editTime: string;
    viewCount: number;
    tags: TagData[];
    prev: PostDetail;
    next: PostDetail;
}

interface ImagePageView {
    imageId: number;
    title: string;
    content: string;
    url: string;
    createTime: string;
    editTime: string;
}

