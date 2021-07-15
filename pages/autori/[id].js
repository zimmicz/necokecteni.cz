import React from 'react';
import { getAuthors, getPostsByAuthor } from '../../lib/be-authors';
import { Layout } from '../../components/Layout';
import List from '../../components/List';

const Author = ({ posts }) => {
    return (
        <Layout>
            {{
                content: <List posts={posts} />
            }}
        </Layout>
    );
}

export default Author;

export const getStaticPaths = async () => {
    const authors = await getAuthors();

    return {
        paths: authors.map(author => `/autori/${author.id}`),
        fallback: false
    };
};

export const getStaticProps = async ({ params }) => {
    const posts = await getPostsByAuthor(params.id);

    return {
        props: {
            posts,
        },
    };
};
