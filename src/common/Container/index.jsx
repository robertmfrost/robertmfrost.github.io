import React from 'react';
import { bool, node } from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './Container.module.scss';

const Container = ({ children, grid, link, panel }) => {

  const container = () => (
    <div className={classnames(
      styles.container,
      { [styles.grid]: grid },
      { [styles.panel]: panel },
      { [styles.link]: link },
    )}>
      {children}
    </div>
  );

  return (
    <div className={classnames(styles.wrapper)}>
      {link && (
        <Link to={link}>
          {container()}
        </Link>
      )}
      {!link && container()}
    </div>
  );
};
Container.propTypes = {
  children: node,
  grid: bool, // causes the contents of the container to be laid out like a grid
  panel: bool, // causes the container to visually look like a panel with a drop shadow
};

export default Container;