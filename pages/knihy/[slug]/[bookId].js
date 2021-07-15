import Head from 'next/head';
import styles from './[bookId].module.css';
import { Layout } from '../../../components/Layout';
import { Post as PostComponent } from '../../../components/Post';
import { getPostIds, getPost } from '../../../lib/be-utils';

const Post = ({ postData }) => {
    return (
        <>
            <Head>
                <title>{`${postData.author}: ${postData.title}`}</title>
                <meta name="description" content={`${postData.author}: ${postData.title}`} />
                <meta name="keywords" content={`${postData.title}, ${postData.tags.map(({ label }) => label).join(', ')}`} />
            </Head>
            <Layout>
                <PostComponent className={styles.post} {...postData} />
            </Layout>
        </>
    );
};

export default Post;

export const getStaticPaths = async () => {
    const paths = await getPostIds();

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params }) => {
    const postData = await getPost(params);

    return {
        props: {
            postData,
        },
    };
};
