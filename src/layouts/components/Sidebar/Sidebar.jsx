import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
  CompassActiveIcon,
  CompassIcon,
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import UserFollowing from './UsersFollowing';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Đang Follow"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="Khám phá"
          to={config.routes.explore}
          icon={<CompassIcon />}
          activeIcon={<CompassActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <UserFollowing label="Các tài khoản đang follow" />
      <footer className={cx('footer')}>
        <div className={cx('link-container')}>
          <a href="/about" target="_blank">
            Giới thiệu
          </a>
          <a href="https://newsroom.tiktok.com/" target="_blank" rel="noreferrer">
            Bảng tin
          </a>
          <a href="/about/contact" target="_blank">
            Liên hệ
          </a>
          <a href="https://career.tiktok.com/" target="_blank" rel="noreferrer">
            Sự nghiệp
          </a>
        </div>
        <div className={cx('link-container')}>
          <a href="/forgood" target="_blank">
            TikTok for Good
          </a>
          <a href="/business" target="_blank">
            Quảng cáo
          </a>
          <a href="https://developers.tiktok.com/?refer=tiktok_web" target="_blank" rel="noreferrer">
            Developers
          </a>
          <a href="/transparency" target="_blank">
            Minh bạch
          </a>
          <a href="/tiktok-rewards/eligibility" target="_blank">
            TikTok Rewards
          </a>
          <a href="/embed" target="_blank">
            TikTok Embeds
          </a>
        </div>
        <div className={cx('link-container')}>
          <a href="https://support.tiktok.com" target="_blank" rel="noreferrer">
            Trợ giúp
          </a>
          <a href="/safety" target="_blank">
            An toàn
          </a>
          <a href="/legal/page/row/terms-of-service" target="_blank">
            Điều khoản
          </a>
          <a href="/legal/page/row/privacy-policy" target="_blank">
            Quyển riêng tư
          </a>
          <a href="/creators/creator-portal" target="_blank">
            Cổng thông tin Tác giả
          </a>
          <a href="/community-guidelines" target="_blank">
            Hướng dẫn Cộng đồng
          </a>
        </div>
        <div className={cx('link-container')}>
          <a href="/legal/page/global/law-enforcement" target="_blank">
            Thêm
          </a>
        </div>
        <div className={cx('link-container')}>
          <p className={cx('copyright')}>&copy; 2023 TikTok</p>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
