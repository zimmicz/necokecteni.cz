import _ from 'lodash';
import { getPosts } from './be-utils';

export const getAuthors = async (): Promise<Array<Author>> => {
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

export const getAuthorsByFirstLetters = async () => {
    const authors = await getAuthors();
    const authorsByLetters = authors.reduce<Record<string, Array<Author>>>((acc, author) => {
        const firstLetter = _.chain(author.author).words().last().value().charAt(0);

        return {
            ...acc,
            [firstLetter]: [...(acc[firstLetter] ?? []), author],
        }
    }, {});

    return authorsByLetters;
};
