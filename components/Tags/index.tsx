import React from 'react';
import Link from 'next/link';
import { sanitize } from '../../lib/utils';
import styles from './index.module.css';

type Props = {
    className?: string;
    tags: Array<string>;
};

export const Tags = ({ tags, className, ...props }: Props) => (
    <ul className={`${styles.tags} ${className}`} {...props}>{[...tags].map(tag => {
        return (
            <li key={tag}>
                <Link href={`knihy/${sanitize(tag)}`}>
                    <a>
                        <small>{tag}</small>
                    </a>
                </Link>
            </li>
        )})}
    </ul>
);
