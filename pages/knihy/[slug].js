import React from 'react';
import Head from 'next/head';
import { Layout } from '../../components/Layout';
import List from '../../components/List';
import { getTags, getTagBySlug, getPostsByTag } from '../../lib/be-tags';

const Tag = ({ tag, posts }) => {
    return (
        <>
            <Head>
                <title>{tag}: seznam knih</title>
            </Head>
            <Layout>
                <List posts={posts} />
            </Layout>
        </>
    );
};

export default Tag;

export const getStaticPaths = async () => {
    const tags = await getTags();

    return {
        paths: tags.map(tag => ({ params: { slug: tag.tag }})),
        fallback: false
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const { tag, label } = await getTagBySlug(slug);
    const posts = await getPostsByTag(tag);

    return {
        props: {
            tag: label,
            posts,
        },
    };
};
