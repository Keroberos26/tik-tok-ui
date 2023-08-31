import React from 'react';
import classNames from 'classnames/bind';

import styles from './AuthModal.module.scss';
import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  KakaoTalkIcon,
  LineIcon,
  QRCodeIcon,
  TwitterIcon,
  UserIcon,
} from '~/components/Icons';
import Button from '~/components/Button/';

const LOGIN_OPTIONS = [
  {
    icon: <QRCodeIcon width="2rem" height="2rem" />,
    title: 'Sử dụng mã QR',
  },
  {
    icon: <UserIcon width="2rem" height="2rem" />,
    title: 'Số điện thoại / Email / TikTok ID',
  },
  {
    icon: <FacebookIcon width="2rem" height="2rem" />,
    title: 'Tiếp tục với Facebook',
  },
  {
    icon: <GoogleIcon width="2rem" height="2rem" />,
    title: 'Tiếp tục với Google',
  },
  {
    icon: <TwitterIcon width="2rem" height="2rem" />,
    title: 'Tiếp tục với Twitter',
  },
  {
    icon: <LineIcon width="2rem" height="2rem" />,
    title: 'Tiếp tục với LINE',
  },
  {
    icon: <KakaoTalkIcon width="2rem" height="2rem" />,
    title: 'Tiếp tục với KakaoTalk',
  },
  {
    icon: <AppleIcon width="2rem" height="2rem" />,
    title: 'Tiếp tục với Apple',
  },
  {
    icon: <InstagramIcon width="2rem" height="2rem" />,
    title: 'Tiếp tục với Instagram',
  },
];

const cx = classNames.bind(styles);

const Login = () => {
  return (
    <>
      <div className={cx('container')}>
        <div className={cx('login')}>
          <h1>Đăng nhập vào TikTok</h1>
          <ul className={cx('options')}>
            {LOGIN_OPTIONS.map((option, index) => (
              <li key={index}>
                <Button
                  className={cx('btn-option')}
                  leftIcon={option.icon}
                  rightIcon={<></>}
                  variant="secondary"
                  outline
                  rounded="none"
                  block
                >
                  {option.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx('agreement')}>
        <p>
          Bằng cách tiếp tục, bạn đồng ý với{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/legal/terms-of-use">
            Điều khoản Sử dụng
          </a>{' '}
          của TikTok và xác nhận rằng bạn đã đọc hiểu{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/legal/privacy-policy">
            Chính sách Quyền riêng tư
          </a>{' '}
          của TikTok.
        </p>
      </div>
    </>
  );
};

export default Login;
