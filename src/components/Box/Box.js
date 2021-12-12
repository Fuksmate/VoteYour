import React from 'react';
import styles from './Box.module.css';

const Box = () => (
  <div className={styles.Box} data-testid="Box">
    Box Component
  </div>
);


Box.defaultProps = {};

export default Box;
