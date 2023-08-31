import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './AuthModal.module.scss';
import {
  AngleDownIcon,
  FacebookIcon,
  GoogleIcon,
  KakaoTalkIcon,
  LineIcon,
  TwitterIcon,
  UserIcon,
} from '~/components/Icons';
import Button from '~/components/Button/';

const SIGNUP_OPTIONS = [
  {
    icon: <UserIcon width="2rem" height="2rem" />,
    title: 'Sử dụng số điện thoại hoặc email',
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
];

const cx = classNames.bind(styles);

const SignUp = () => {
  const [options, setOptions] = useState(3);

  return (
    <>
      <div className={cx('container')}>
        <div className={cx('login')}>
          <h1>Đăng ký TikTok</h1>
          <ul className={cx('options')}>
            {SIGNUP_OPTIONS.slice(0, options).map((option, index) => (
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
            {options === 3 && (
              <li onClick={() => setOptions(6)}>
                <AngleDownIcon />
              </li>
            )}
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

export default SignUp;
