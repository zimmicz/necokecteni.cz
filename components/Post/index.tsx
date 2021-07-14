import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import { Tags } from '../Tags';

export const Post = ({ author, id, tags, title, contentHtml, className }: Post & { className?: string }) => {
    return (
        <section className={`${styles.post} ${className}`}>
            <h2 className={styles.title}><Link href={`/knihy/${id}`}><a>{author}: {title}</a></Link></h2>
            <Tags className={styles.tags} tags={tags} />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </section>
    );
};
