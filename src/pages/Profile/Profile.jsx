import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import styles from './Profile.module.scss';
import * as userService from '~/services/userService';
import Header from './Header';
import Main from './Main';

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

  return (
    <div className={cx('wrapper')}>
      <Header user={user} />
      <Main data={user.videos} />
    </div>
  );
};

export default Profile;
