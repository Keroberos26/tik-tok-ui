import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import FeedTab from './FeedTab';
import VideoCard from '~/components/VideoCard';
import { UserIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Main = ({ data }) => {
  const [playingVideo, setPlayingVideo] = useState();

  const handlePlay = (id) => {
    setPlayingVideo(id);
  };

  return (
    <main>
      <FeedTab />
      <div className={cx('container')}>
        {!!data && data.length ? (
          <div className={cx('feed-video')}>
            {data
              // .filter((video) => video.viewable === 'public')
              .map((video) => (
                <VideoCard
                  key={video.id}
                  data={video}
                  played={playingVideo === video.id}
                  onMouseEnter={() => handlePlay(video.id)}
                />
              ))}
          </div>
        ) : (
          <div className={cx('no-video')}>
            <UserIcon width="90" height="90" className={cx('icon')} />
            <h3>Không có nội dung</h3>
            <p>Người dùng này chưa đăng bất kỳ video nào.</p>
          </div>
        )}
      </div>
    </main>
  );
};

Main.propTypes = {
  data: PropTypes.array,
};

export default Main;
