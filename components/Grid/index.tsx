import React from 'react';
import styles from './index.module.css';

export const Grid = ({ children }: React.PropsWithChildren<unknown>) => (
    <div className={styles.grid}>{children}</div>
);
