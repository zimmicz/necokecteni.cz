import React from 'react';
import Head from 'next/head';
import { getTags } from '../../lib/be-tags';

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
    return {
        props: {
            tag: '1',
        },
    };
};
