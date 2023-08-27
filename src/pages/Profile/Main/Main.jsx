import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import FeedTab from './FeedTab';
import VideoCard from '~/components/VideoCard';

const cx = classNames.bind(styles);

const Main = ({ data }) => {
  const [playingVideo, setPlayingVideo] = useState();

  const handlePlay = (id) => {
    setPlayingVideo(id);
  };

  return (
    <div>
      <FeedTab />
      <div className={cx('container')}>
        <div className={cx('feed-video')}>
          {data &&
            data.map((video) => (
              <VideoCard key={video.id} data={video} played={playingVideo === video.id} onPlay={handlePlay} />
            ))}
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  data: PropTypes.array,
};

export default Main;
