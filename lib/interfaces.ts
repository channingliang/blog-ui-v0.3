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

interface PostsData {
    postId: number;
    title: string;
    subtitle: string;
    coverUrl: string;
    createTime: string;
    viewCount: number;
}

interface PostsPageData {
    records: PostsData[];
    total: number;
    size: number;
    current: number;
    pages: number;
}

