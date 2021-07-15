import React from 'react';
import styles from './index.module.css';
import { Content } from '../Content';
import { Header } from '../Header';

type Props = {
    children: {
        content: React.ReactNode;
        sidebar: React.ReactNode;
    }
};

export const Layout = ({ children }: Props) => {
    return (
        <div className={styles.layout}>
            <Header className={styles.header} />
            <Content className={styles.content}>{children.content}</Content>
        </div>
    );
};
