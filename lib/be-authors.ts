import _ from 'lodash';
import { getPosts } from './be-utils';

export const getAuthors = async () => {
    const posts = await getPosts();

    return _.chain(posts).map(post => ({
        author: post.author,
        id: post.id.split('/')[0],
    })).filter(post => !!post.author).uniqBy(post => post.author).value();
};

export const getPostsByAuthor = async (id: string) => {
    const posts = await getPosts(id);

    return posts;
}
