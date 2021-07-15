import React from 'react';
import styles from './index.module.css';
import { Content } from '../Content';
import { Header } from '../Header';

export const Layout = ({ children }: React.PropsWithChildren<unknown>) => {
    return (
        <div className={styles.layout}>
            <Header className={styles.header} />
            <Content className={styles.content}>{children}</Content>
        </div>
    );
};
