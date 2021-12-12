import React from 'react';
import styles from './Box.module.css';

const Box = () => (
  <div className={styles.Box} data-testid="Box">
    You never know, I might end up in there one day and add API.
  </div>
);


Box.defaultProps = {};

export default Box;
