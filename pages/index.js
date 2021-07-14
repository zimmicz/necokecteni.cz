import Head from 'next/head';
import Link from 'next/link';
import _ from 'lodash';
import List from '../components/List';
import Pagination from '../components/Pagination';
import styles from './index.module.css';
import { Layout } from '../components/Layout';
import { getPosts } from '../lib/be-utils';
import { getAuthors } from '../lib/be-authors';

export default function Home({ authors, posts, postCount }) {
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
                            {postCount > posts.length ? <Pagination next="1" />: null}
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
    );
}

export const getStaticProps = async () => {
    const authors = await getAuthors();
    const posts = await getPosts();

    return {
        props: {
            authors,
            posts: posts.slice(0, 10),
            postCount: posts.length,
        },
    };
};
