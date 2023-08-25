import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import styles from './Profile.module.scss';
import * as userService from '~/services/userService';
import Header from './Header';

const cx = classNames.bind(styles);

const Profile = () => {
  const { nickname } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    userService
      .getAnUser({ nickname: nickname })
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, [nickname]);

  // console.log(user);

  return (
    <div className={cx('wrapper')}>
      <Header user={user} />
      <div className={cx('user-videos')}></div>
    </div>
  );
};

export default Profile;
