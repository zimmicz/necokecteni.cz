import React from 'react';
import styles from './index.module.css';

export const Navigation = ({ children }: React.PropsWithChildren<unknown>): React.ReactElement => {
  return (
    <div className={styles.navigation}>
      {children}
    </div>
  );
};
