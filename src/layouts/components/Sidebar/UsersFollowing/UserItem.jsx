import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './UsersFollowing.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const UserItem = ({ data }) => {
  return (
    <Link to={`/@${data.nickname}`} className={cx('user-item')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          <span>{data.nickname}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('name')}>{data.full_name}</span>
      </div>
    </Link>
  );
};

UserItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserItem;
