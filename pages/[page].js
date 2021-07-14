import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import _ from 'lodash';
import styles from './[page].module.css';
import { Layout } from '../components/Layout';
import List from '../components/List';
import Pagination from '../components/Pagination';
import { getPosts } from '../lib/be-utils';
import { getAuthors } from '../lib/be-authors';

export default function Page({ authors, posts, postCount }) {
    const { query: { page } } = useRouter();
    const previous = _.toString(_.toInteger(page) - 1);
    const next = (_.toInteger(page) + 1) * 10 < postCount && _.toString(_.toInteger(page) + 1);

    return (
        <div className="container">
            <Head>
                <title>Něco ke čtení</title>
            </Head>
            <Layout>
                {{
                    content: (
                        <>
                            <List posts={posts} />
                            {postCount > posts.length
                                ? (
                                    <Pagination
                                        previous={previous}
                                        next={next}
                                    />
                                ) : null
                            }
                        </>
                    ),
                    sidebar: (
                        <div className={styles.sidebar}>
                            <h3>Autoři</h3>
                            <ul>
                                {authors.map(author => <li><Link href={`autori/${author.id}`}><a>{author.author}</a></Link></li>)}
                            </ul>
                        </div>
                    )
                }}
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
    const authors = await getAuthors();
    const posts = await getPosts();
    const page = parseInt(params.page, 10);

    return {
        props: {
            authors,
            posts: posts.slice(page * 10, (page + 1) * 10),
            postCount: posts.length,
        },
    };
};
