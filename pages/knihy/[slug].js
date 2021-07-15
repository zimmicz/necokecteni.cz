import React from 'react';
import Head from 'next/head';
import { getTags, getTagBySlug } from '../../lib/be-tags';

const Tag = ({ tag }) => {
    return (
        <>
            <Head>
                <title>{tag}: seznam knih</title>
            </Head>
            <div>hello world {tag}</div>
        </>
    );
};

export default Tag;

export const getStaticPaths = async () => {
    const paths = await getTags();

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params }) => {
    const tag = await getTagBySlug(params.slug);
    return {
        props: {
            tag,
        },
    };
};
