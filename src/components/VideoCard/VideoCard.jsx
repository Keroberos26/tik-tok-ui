import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './VideoCard.module.scss';
import { PlayIcon } from '../Icons';

const cx = classNames.bind(styles);

const Video = ({ data, played = false, ...passProps }) => {
  return (
    <div className={cx('wrapper')} {...passProps}>
      <Link to={`/@${data.user.nickname}/video/${data.uuid}`}>
        <div className={cx('media')}>
          <div className={cx('thumbnail')} style={{ backgroundImage: `url(${data.thumb_url})` }}></div>
          {played && (
            <div className={cx('video')}>
              <video
                type={data.meta.mime_type}
                playsInline
                preload="auto"
                autoPlay
                muted
                loop
                src={data.file_url}
              ></video>
            </div>
          )}
          <div className={cx('footer')}>
            <PlayIcon />
            <strong>{data.views_count}</strong>
          </div>
        </div>
      </Link>
      <div className={cx('title')}>
        <Link to={`/@${data.user.nickname}/video/${data.uuid}`}>
          <div className={cx('text')} title={data.description}>
            {data.description}
          </div>
        </Link>
      </div>
    </div>
  );
};

Video.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Video;
