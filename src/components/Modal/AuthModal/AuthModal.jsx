import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AuthModal.module.scss';
import Modal from '../Modal';
import Login from './Login';
import SignUp from './SignUp';

const cx = classNames.bind(styles);

const AuthModal = ({ show, onHide }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal show={show} backdrop="static" onHide={onHide} keyboard={false}>
      <div className={cx('wrapper')}>
        {isLogin ? <Login /> : <SignUp />}
        <div className={cx('footer')}>
          {isLogin ? (
            <p>
              Bạn không có tài khoản? <span onClick={() => setIsLogin(false)}>Đăng ký</span>
            </p>
          ) : (
            <p>
              Bạn đã có tài khoản? <span onClick={() => setIsLogin(true)}>Đăng nhập</span>
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};

AuthModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default AuthModal;
