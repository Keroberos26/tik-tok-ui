import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ShareOption.module.scss';
import Menu from '../Menu';
import {
  EmailIcon,
  EmbedIcon,
  FacebookIcon,
  LineIcon,
  LinkIcon,
  LinkedInIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsAppIcon,
} from '~/components/Icons';

// Share option
const SHARE_OPTION = [
  {
    icon: <EmbedIcon />,
    title: 'Nhúng',
  },
  {
    icon: <FacebookIcon />,
    title: 'Share to Facebook',
  },
  {
    icon: <WhatsAppIcon />,
    title: 'Share to WhatsApp',
  },
  {
    icon: <TwitterIcon />,
    title: 'Share to Twitter',
  },
  {
    icon: <LinkIcon />,
    title: 'Sao chép liên kết',
  },
  {
    icon: <LinkedInIcon />,
    title: 'Share to LinkedIn',
  },
  {
    icon: <RedditIcon />,
    title: 'Share to Reddit',
  },
  {
    icon: <TelegramIcon />,
    title: 'Share to Telegram',
  },
  {
    icon: <EmailIcon />,
    title: 'Share to Email',
  },
  {
    icon: <LineIcon />,
    title: 'Share to Line',
  },
  {
    icon: <PinterestIcon />,
    title: 'Share to Pinterest',
  },
];

const cx = classNames.bind(styles);

const ShareOption = ({ data, children }) => {
  return (
    <Menu items={SHARE_OPTION} className={cx('wrapper')} classNameItem={cx('share-item')}>
      {children}
    </Menu>
  );
};

ShareOption.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShareOption;
