import React from 'react';
import styles from './index.module.css';
import { BlockLink } from '../BlockLink';

const Pagination = ({ previous, next }: { previous?: string; next?: string }): React.ReactElement => {
    return (
        <div className={styles.pagination}>
            <div>{previous ? <BlockLink to={previous}>Předchozí</BlockLink>: null}</div>
            <div>{next ? <BlockLink to={next}>Další</BlockLink>: null}</div>
        </div>
    );
};

export default Pagination;
