import _ from 'lodash';
import { getFilenames, getPost, postsDirectory } from './be-utils';

export const getTags = async () => {
    const filenames = await getFilenames();
    const promises = filenames
        .map(filename => {
            const filepath = filename.split(postsDirectory).reverse()[0];
            const [, slug, bookId] = filepath.split('/');
            return getPost({ slug, bookId: bookId.replace(/\.md$/, '')});
        });

    const done = await Promise.all(promises);
    const tags = _(done)
        .filter('tags')
        .map('tags')
        .flatten()
        .uniq()
        .value();

    return tags;
};

export const getTagBySlug = async (slug: string) => {
    const tags = await getTags();

    return tags.find(tag => tag.tag === slug);
};

export const getPostsByTag = async (tag: string) => {
    const filenames = await getFilenames();

    const promises = filenames
        .map(filename => {
            const filepath = filename.split(postsDirectory).reverse()[0];
            const [, slug, bookId] = filepath.split('/');
            return getPost({ slug, bookId: bookId.replace(/\.md$/, '')});
        });

    const done = await Promise.all(promises);
    // @ts-ignore
    const posts = done.filter(post => post.tags.find(mytag => mytag.tag === tag));

    return posts;
};
