import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MenuItem = ({ data, className, onClick }) => {
  const classes = cx('menu-item', className, {
    separate: data.separate,
  });

  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
};

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuItem;
