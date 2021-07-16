import Head from 'next/head';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { Layout } from '../components/Layout';
import List from '../components/List';
import Pagination from '../components/Pagination';
import { getPosts } from '../lib/be-utils';
import { getAuthorsByFirstLetters } from '../lib/be-authors';

export default function Page({ authors, posts, postCount }) {
    const { query: { page } } = useRouter();
    const previous = `/${_.toString(_.toInteger(page) - 1)}`;
    const next = (_.toInteger(page) + 1) * 10 < postCount && `/${_.toString(_.toInteger(page) + 1)}`;

    return (
        <div className="container">
            <Head>
                <title>Něco ke čtení</title>
                <meta name="description" content="Něco ke čtení je seznam dobrých knih, které stojí za to si přečíst." />
                <meta name="keywords" content="knihy, čtení, četba, literatura" />
            </Head>
            <Layout authors={authors}>
                <List posts={posts} />
                {postCount > posts.length
                    ? (
                        <Pagination
                            previous={previous}
                            next={next}
                        />
                    ) : null
                }
            </Layout>
        </div>
    )
}

export const getStaticPaths = async () => {
    const POSTS_PER_PAGE = 10;
    const posts = (await getPosts()).length;
    const pages = Math.ceil(posts / POSTS_PER_PAGE);
    const paths = Array.from({ length: pages }).map((_, index) => ({ params: { page: index.toString() }}));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const posts = await getPosts();
    const authors = await getAuthorsByFirstLetters();
    const page = parseInt(params.page, 10);

    return {
        props: {
            authors,
            posts: posts.slice(page * 10, (page + 1) * 10),
            postCount: posts.length,
        },
    };
};
