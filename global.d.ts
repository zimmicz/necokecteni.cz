type PostMetadata = {
    author: string;
    date: string;
    image?: string;
    tags: Array<string>;
    title: string;
};

type Post = {
    id: string;
    contentHtml: string;
} & PostMetadata;
