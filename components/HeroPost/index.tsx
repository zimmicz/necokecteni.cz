import React from 'react';
import _ from 'lodash';
import styles from './index.module.css';
import { BlockLink } from '../BlockLink';
import { Tags } from '../Tags';
import { clipUntilNewLine } from '../../lib/utils';

export const HeroPost = ({ id, author, image, title, contentHtml, tags }: Post) => {
    const contentUntilFirstNewline = clipUntilNewLine(contentHtml);

    return (
            <section className={styles.post}>
                <div className={styles.titleAndTags}>
                    <h2 className={styles.title}>
                        <BlockLink className={styles.link} to={`/knihy/${id}`}>
                            <span className={styles.author}>{author}</span>
                            {title}
                        </BlockLink>
                    </h2>
                    <Tags className={styles.tags} tags={tags} />
                </div>
                {contentUntilFirstNewline ? <div className={styles.content} dangerouslySetInnerHTML={{ __html: contentUntilFirstNewline }} /> : null}
            </section>
    );
};
