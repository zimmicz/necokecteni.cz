import React from 'react';
import styles from './index.module.css';

export const Sidebar = ({ children, ...props }: React.PropsWithChildren<{ className?: string }>) => {
    return (
        <aside {...props}>
            <div className={styles.sticky}>
                {/*
                <form className={styles.searchForm}>
                    <input className={styles.searchInput} type="text" placeholder="Jméno autora nebo knihy..." />
                    <input className={styles.searchSubmit} type="submit" value="Hledat" />
                </form>
                */}
                {children}
            </div>
        </aside>
    );
};
