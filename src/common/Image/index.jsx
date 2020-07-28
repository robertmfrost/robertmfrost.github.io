import React from 'react';
import { bool, string } from 'prop-types';
import classnames from 'classnames';
import styles from './Image.module.scss';

const Image = ({ cropped, height, src, width }) => (
  <picture className={classnames(styles.picture)}>
    <img
      className={classnames(
        styles.image,
        { [styles.cropped]: cropped }
      )}
      alt={src}
      src={src}
      style={{
        height: height,
        width: width,
      }}
    />
  </picture>
);
Image.propTypes = {
  cropped: bool,
  height: string,
  src: string.isRequired,
  width: string,
};

export default Image;