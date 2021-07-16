import React from 'react';
import Head from 'next/head';
import { getAuthorsByFirstLetters, getAuthors, getPostsByAuthor } from '../../lib/be-authors';
import { Layout } from '../../components/Layout';
import List from '../../components/List';

const Author = ({ authors, posts }) => {
    return (
        <>
            <Head>
                <title>{posts[0].author}: seznam knih</title>
                <meta name="description" content={`${posts[0].author}: seznam knih`} />
                <meta name="keywords" content={`${posts[0].author}, seznam knih, ${posts.map(post => post.title).join(', ')}`} />
            </Head>
            <Layout authors={authors}>
                <List posts={posts} />
            </Layout>
        </>
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
    const authors = await getAuthorsByFirstLetters();

    return {
        props: {
            authors,
            posts,
        },
    };
};
