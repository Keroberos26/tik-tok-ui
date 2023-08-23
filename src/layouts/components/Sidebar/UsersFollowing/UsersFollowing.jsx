import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './UsersFollowing.module.scss';
import * as userService from '~/services/userService';
import UserItem from './UserItem';

const cx = classNames.bind(styles);

const PER_PAGE = 10;
const MORE_PER_PAGE = 20;

const UserFollowing = ({ label }) => {
  const [users, setUsers] = useState([]);
  const [perPage, setPerPage] = useState(PER_PAGE);

  useEffect(() => {
    userService
      .getSuggested({ page: 1, perPage: perPage })
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, [perPage]);

  const handleSeeMore = () => {
    if (perPage === PER_PAGE) setPerPage(MORE_PER_PAGE);
    else setPerPage(PER_PAGE);
  };

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('label')}>{label}</h2>
      {users.map((result) => (
        <UserItem key={result.id} data={result} />
      ))}
      <button className={cx('btn-see-more')} onClick={handleSeeMore}>
        {perPage === MORE_PER_PAGE ? 'Ẩn bớt' : 'Xem thêm'}
      </button>
    </div>
  );
};

UserFollowing.propTypes = {
  label: PropTypes.string.isRequired,
};

export default UserFollowing;
