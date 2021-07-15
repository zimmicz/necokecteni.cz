import _ from 'lodash';
import { getPostData } from './posts';
import { sanitize } from './utils';
import { getFilenames, postsDirectory } from './be-utils';

export const getTags = async () => {
    const filenames = await getFilenames();
    const promises = filenames
        .map(filename => {
            const filepath = filename.split(postsDirectory).reverse()[0];
            const [, slug, bookId] = filepath.split('/');
            return getPostData({ slug, bookId: bookId.replace(/\.md$/, '')});
        });

    const done = await Promise.all(promises);
    const tags = _(done)
        .filter('tags')
        .map('tags')
        .flatten()
        .uniq()
        .map(sanitize)
        .map(tag => ({ params: { slug: tag }}))
        .value();

    return tags;
};

export const getTagBySlug = async (slug: string) => {
    const filenames = await getFilenames();
    const promises = filenames
        .map(filename => {
            const filepath = filename.split(postsDirectory).reverse()[0];
            const [, slug, bookId] = filepath.split('/');
            return getPostData({ slug, bookId: bookId.replace(/\.md$/, '')});
        });

    const done = await Promise.all(promises);
    const tags = _(done)
        .filter('tags')
        .map('tags')
        .flatten()
        .uniq()
        .value();

    return tags.find(tag => sanitize(tag) === slug);
};
