import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Avatar = ({ data, size, ...props }) => {
  const [fallback, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(images.noAvatar);
  };

  const classes = cx('avatar', {
    ['size-' + size]: size,
  });

  return <img className={classes} src={fallback || data.avatar} alt={data.nickname} {...props} onError={handleError} />;
};

Avatar.propsType = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
  classNames: PropTypes.string,
};

export default Avatar;
