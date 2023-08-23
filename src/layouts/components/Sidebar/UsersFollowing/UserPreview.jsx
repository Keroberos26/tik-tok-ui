import React from 'react';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './UsersFollowing.module.scss';

const cx = classNames.bind(styles);

const UserPreview = ({ data }) => {
  return (
    <>
      <header className={cx('header')}>
        <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
        <Button variant="primary" size="small">
          Follow
        </Button>
      </header>
      <div className={cx('body')}>
        <h4 className={cx('username')}>
          <span>{data.nickname}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('name')}>
          {data.first_name} {data.last_name}
        </span>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>{data.followers_count}</strong>
          <span className={cx('label')}> Following</span>
          <strong className={cx('value')}>{data.likes_count}</strong>
          <span className={cx('label')}> Like</span>
        </p>
      </div>
    </>
  );
};

UserPreview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserPreview;
