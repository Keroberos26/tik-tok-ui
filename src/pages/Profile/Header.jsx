import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Avatar from '~/components/Image/Avatar';
import Button from '~/components/Button/';
import ShareOption from '~/components/Popper/ShareOption';
import { BanIcon, CheckIcon, FlagIcon, MessageIcon, MoreHorizontalIcon, ShareIcon } from '~/components/Icons';
import Menu from '~/components/Popper/Menu/Menu';

// Format number with K and M
function formatNumber(number) {
  if (!number) return 0;

  const units = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']; // Đơn vị số học
  let unitIndex = 0;

  while (number >= 1000) {
    number /= 1000;
    unitIndex++;
  }

  if (!unitIndex) return number;

  return number.toFixed(1) + units[unitIndex];
}

const MORE_ACTION = [
  {
    icon: <MessageIcon width="1.6rem" height="1.6rem" />,
    title: 'Gửi tin nhắn',
  },
  {
    icon: <FlagIcon width="1.6rem" height="1.6rem" />,
    title: 'Báo cáo',
  },
  {
    icon: <BanIcon width="1.6rem" height="1.6rem" />,
    title: 'Chặn',
  },
];

const cx = classNames.bind(styles);

const Header = ({ user }) => {
  return (
    <div className={cx('info-user')}>
      <div className={cx('info-share')}>
        <Avatar data={user} size="l" />
        <div className={cx('info-name')}>
          <h1>
            {user.nickname}
            {user.tick && <CheckIcon className={cx('check')} />}
          </h1>
          <h2>{user.first_name + ' ' + user.last_name}</h2>
          <Button variant="primary" className={cx('btn-follow')}>
            Follow
          </Button>
        </div>
      </div>

      <div className={cx('info-count')}>
        <div className={cx('number')}>
          <strong>{formatNumber(user.followings_count)}</strong>
          <span>Đang follow</span>
        </div>
        <div className={cx('number')}>
          <strong>{formatNumber(user.followers_count)}</strong>
          <span>Follower</span>
        </div>
        <div className={cx('number')}>
          <strong>{formatNumber(user.likes_count)}</strong>
          <span>Thích</span>
        </div>
      </div>
      <div className={cx('info-bio')}>{user.bio}</div>

      <div className={cx('action')}>
        <div>
          <ShareOption>
            <span>
              <ShareIcon />
            </span>
          </ShareOption>
        </div>
        <div>
          <Menu items={MORE_ACTION} classNameItem={cx('more-action-item')}>
            <span>
              <MoreHorizontalIcon />
            </span>
          </Menu>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Header;
