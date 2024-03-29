import fs from 'fs';
import path from 'path';
import globby from 'globby';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import _ from 'lodash';
import { sanitize } from './utils';

export const postsDirectory = path.join(process.cwd(), 'posts');

export const getFilenames = async (pathSegment = '') => globby([`${path.join(postsDirectory, pathSegment)}`]);

export const getPosts = async (filter?: string) => {
    const filenames = await getFilenames(filter);

    const promises = filenames.map(getPostData);

    const posts = await Promise.all(promises);
    const sortedPosts = _.orderBy(posts, post => [(new Date(post.date)).getTime(), post.title], ['desc', 'asc']);

    return sortedPosts;
}

export const getPost = async ({ slug: authorId, bookId }: { slug: string; bookId: string }): Promise<ReturnType<typeof getPostData>> => {
    const fullPath = path.join(postsDirectory, authorId, `${bookId}.md`);
    const result = await getPostData(fullPath);

    return result;
};

export const getPostIds = async () => {
    const posts = await getPosts();

    const result = _(posts)
        .map('id')
        .map(id => _.split(id, '/'))
        .map(ids => _.zipObject(['slug', 'bookId'], ids))
        .map(obj => ({ params: obj }))
        .value();

    return result;
}

const getPostData = async (fullPath: string): Promise<{ id: string; contentHtml: string } & PostMetadata> => {
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id: `${sanitize(matterResult.data.author)}/${sanitize(matterResult.data.title)}`,
        contentHtml,
        ...<PostMetadata>matterResult.data,
        tags: [
            ...matterResult.data.tags.map((tag: string) => (
                {
                    tag: sanitize(tag),
                    label: tag,
                    link: `/knihy/${sanitize(tag)}`
                }
            )),
            {
                tag: sanitize(matterResult.data.author),
                label: matterResult.data.author,
                link: `/autori/${sanitize(matterResult.data.author)}`
            },
        ],
    };
}
