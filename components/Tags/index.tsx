import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

type Props = {
    className?: string;
    tags: Array<{ label: string; link: string }>;
};

export const Tags = ({ tags, className, ...props }: Props) => (
    <ul className={`${styles.tags} ${className}`} {...props}>{[...tags].map(tag => {
        return (
            <li key={tag.label}>
                <Link href={tag.link}>
                    <a>
                        <small>{tag.label}</small>
                    </a>
                </Link>
            </li>
        )})}
    </ul>
);
