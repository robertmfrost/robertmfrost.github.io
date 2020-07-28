import React from 'react';
import { node, string } from 'prop-types';
import classnames from 'classnames';
import styles from './Quote.module.scss';

const Quote = ({ children, link, src }) => (
  <>
    <div className={classnames(styles.quote)}>
      {children}
    </div>
    <div className={classnames(styles.source)}>
      {src}
      {link && (
        <>
          <span> (</span>
          <a href={link}>link</a>
          <span>)</span>
        </>
      )}
    </div>
  </>
);
Quote.prototype = {
  children: node,
  src: string.isRequired,
};

export default Quote;