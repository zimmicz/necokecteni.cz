type PostMetadata = {
    author: string;
    date: string;
    image?: string;
    tags: Array<{ label: string; link: string }>;
    title: string;
};

type Post = {
    id: string;
    contentHtml: string;
} & PostMetadata;
