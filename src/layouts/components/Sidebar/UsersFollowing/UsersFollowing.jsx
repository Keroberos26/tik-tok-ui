import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './UsersFollowing.module.scss';
import * as searchServices from '~/services/searchService';
import UserItem from './UserItem';

const cx = classNames.bind(styles);

const UserFollowing = ({ label }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await searchServices.search('hoa', 'more');
      setUsers(result);
    };

    fetchApi();
  });

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('label')}>{label}</h2>
      {users.map((result) => (
        <UserItem key={result.id} data={result} />
      ))}
      <button className={cx('btn-see-more')}>Xem thêm</button>
    </div>
  );
};

UserFollowing.propTypes = {
  label: PropTypes.string.isRequired,
};

export default UserFollowing;
