import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { getFilenames, postsDirectory } from './be-utils';

const latestPosts = 3;

export const getTenLatestPosts = async () => {
    const filenames = (await getFilenames()).slice(0, latestPosts);

    const promises = filenames
        .map(filename => {
            const filepath = filename.split(postsDirectory).reverse()[0];
            const [, authorId, bookId] = filepath.split('/');
            return getPostData({ authorId, bookId: bookId.replace(/\.md$/, '')});
        });

    return Promise.all(promises);
};

export const getPostData = async ({ slug: authorId, bookId }) => {
    const fullPath = path.join(postsDirectory, `${authorId}/${bookId}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id: `${authorId}/${bookId}`,
        contentHtml,
        ...matterResult.data
    };
}
