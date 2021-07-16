import React from 'react';
import styles from './index.module.css';
import { Content } from '../Content';
import { Header } from '../Header';
import { Navigation } from '../Navigation';

export const Layout = ({ children }: React.PropsWithChildren<unknown>) => {
    return (
        <div className={styles.layout}>
            <Navigation />
            <Header />
            <Content className={styles.content}>{children}</Content>
        </div>
    );
};
