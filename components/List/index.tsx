import _ from 'lodash';
import styles from './index.module.css';
import { Grid } from '../Grid';
import { HeroPost } from '../HeroPost';
import { Post } from '../Post';
import { clipUntilNewLine } from '../../lib/utils';

export default function List({ posts }: {  posts: Array<Post> }) {
    const chunks = _.chunk(posts, 5);

    return (
        <>
            {chunks.map(([heroPost, ...otherPosts], index) => (
                <div key={index}>
                    <HeroPost {...heroPost} />
                    <Grid>
                        {otherPosts.map(post => (
                            <Post
                                key={post.id}
                                className={styles.post}
                                {...post}
                                contentHtml={clipUntilNewLine(post.contentHtml)}
                            />
                        ))}
                    </Grid>
                </div>
            ))}
        </>
    );
}
