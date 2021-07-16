type PostMetadata = {
    author: string;
    date: string;
    image?: string;
    tags: Array<{ tag: string; label: string; link: string }>;
    title: string;
};

type Post = {
    id: string;
    contentHtml: string;
} & PostMetadata;

type Author = {
    author: string;
    id: string;
};
