import React from 'react';
import styles from './index.module.css';
import { Content } from '../Content';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { BlockLink } from '../BlockLink';
import { AuthorList } from '../AuthorList';

export const Layout = ({ children, authors }: React.PropsWithChildren<{ authors?: Record<string, Array<Author>>}>) => {
    return (
        <div className={styles.layout}>
            <Navigation>
                <a href="/feed.xml">RSS kanál</a>
                {authors ? <AuthorList authors={authors} /> : null}
            </Navigation>
            <Header />
            <Content className={styles.content}>{children}</Content>
        </div>
    );
};
