import Head from 'next/head';
import List from '../components/List';
import Pagination from '../components/Pagination';
import { Layout } from '../components/Layout';
import { getPosts } from '../lib/be-utils';
import { generateFeed } from '../lib/rss.gen';

export default function Home({ posts, postCount }) {
    return (
        <div className="container">
            <Head>
                <title>Něco ke čtení</title>
                <meta name="description" content="Něco ke čtení je seznam dobrých knih, které stojí za to si přečíst." />
                <meta name="keywords" content="knihy, čtení, četba, literatura" />
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

    generateFeed(posts);

    return {
        props: {
            posts: posts.slice(0, 10),
            postCount: posts.length,
        },
    };
};
