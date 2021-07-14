import Head from 'next/head';
import styles from './[bookId].module.css';
import { Layout } from '../../../components/Layout';
import { BlockLink } from '../../../components/BlockLink';
import { Post as PostComponent } from '../../../components/Post';
import { getPostIds, getPost } from '../../../lib/be-utils';
import { getPostsByAuthor } from '../../../lib/be-authors';

const Post = ({ postData }) => {
    return (
        <>
            <Head>
                <title>{`${postData.author}: ${postData.title}`}</title>
            </Head>
            <Layout>
                {{
                    content: (<PostComponent className={styles.post} {...postData} />),
                    sidebar: postData.more.length > 0
                        ? (
                            <div className={styles.sidebar}>
                                <h3>Další knihy autora</h3>
                                <ul>
                                    {postData.more.map(post => <li><BlockLink to={`/knihy/${post.id}`}>{post.title}</BlockLink></li>)}
                                </ul>
                            </div>
                        ) : null
                }}
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
    postData.more = (await getPostsByAuthor(params.slug));
        //.filter(post => post.id !== `${params.slug}/${params.bookId}`);

    return {
        props: {
            postData,
        },
    };
};
