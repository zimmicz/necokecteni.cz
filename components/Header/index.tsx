import React from 'react';
import { BlockLink } from '../BlockLink';
import styles from './index.module.css';

type Props = {
    className?: string;
};

export const Header = ({ className, ...props }: Props) => {
    return (
        <header className={`${styles.header} ${className}`} {...props}>
            <h1><BlockLink to="/">Něco ke čtení</BlockLink></h1>
        </header>
    );
};
