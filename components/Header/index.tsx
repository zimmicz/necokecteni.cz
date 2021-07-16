import React from 'react';
import { BlockLink } from '../BlockLink';
import styles from './index.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1><BlockLink to="/">Něco ke čtení</BlockLink></h1>
        </header>
    );
};
