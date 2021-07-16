import React from 'react';
import styles from './index.module.css';
import { BlockLink } from '../BlockLink';

export const Navigation = (): React.ReactElement => {
  return (
    <div className={styles.navigation}>
      <BlockLink to="/feed.xml">RSS kanál</BlockLink>
    </div>
  );
};
