import Head from 'next/head';
import _ from 'lodash';
import List from '../components/List';
import Pagination from '../components/Pagination';
import { Layout } from '../components/Layout';
import { getPosts } from '../lib/be-utils';

export default function Home({ posts, postCount }) {
    return (
        <div className="container">
            <Head>
                <title>Něco ke čtení</title>
            </Head>
            <Layout>
                <List posts={posts} />
                {postCount > posts.length ? <Pagination next="/1" />: null}
            </Layout>
        </div>
    );
}

export const getStaticProps = async () => {
    const posts = await getPosts();

    return {
        props: {
            posts: posts.slice(0, 10),
            postCount: posts.length,
        },
    };
};
