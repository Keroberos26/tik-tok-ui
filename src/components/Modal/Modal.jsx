import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import { CloseIcon } from '../Icons';

const cx = classNames.bind(styles);

const Modal = ({ backdrop = true, show = false, keyboard = true, children, onShow, onHide }) => {
  const [backdropStatic, setBackdropStatic] = useState(false);

  const handleClickBackdrop = () => {
    if (backdrop) {
      if (backdrop === 'static') {
        setBackdropStatic(true);

        setTimeout(() => {
          setBackdropStatic(false);
        }, 200);
      } else onHide();
    }
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      onHide();
    }
  };

  useEffect(() => {
    if (show && keyboard) {
      document.addEventListener('keydown', handleKeydown);
    } else {
      document.removeEventListener('keydown', handleKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <>
      {show && (
        <>
          {backdrop && <div className={cx('modal-backdrop')} onClick={handleClickBackdrop}></div>}
          <div className={cx('wrapper', { show, 'backdrop-static': backdropStatic })}>
            <div className={cx('container')}>
              <div className={cx('modal')}>
                <div className={cx('btn-close')} onClick={onHide}>
                  <CloseIcon className={cx('icon')} />
                </div>
                <div className={cx('body')}>{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

Modal.propTypes = {
  backdrop: PropTypes.oneOf([true, false, 'static']),
  show: PropTypes.bool,
  keyboard: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
};

export default Modal;
