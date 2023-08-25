import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import styles from './UsersFollowing.module.scss';
import Popper from '~/components/Popper/Popper';
import UserPreview from './UserPreview';
import Avatar from '~/components/Image/Avatar';

const cx = classNames.bind(styles);

const UserItem = ({ data }) => {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <Popper className={cx('wrapper')}>
          <UserPreview data={data} />
        </Popper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[600, 0]} render={renderPreview} placement="bottom" offset={[0, -2]}>
        <Link to={`/@${data.nickname}`} className={cx('user-item')}>
          <Avatar data={data} size="s" />
          <div className={cx('info')}>
            <h4 className={cx('username')}>
              <span>{data.nickname}</span>
              {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </h4>
            <span className={cx('name')}>
              {data.first_name} {data.last_name}
            </span>
          </div>
        </Link>
      </Tippy>
    </div>
  );
};

UserItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserItem;
