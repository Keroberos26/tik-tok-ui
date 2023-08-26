import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import { LockIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const FeedTab = () => {
  const [lineStyle, setLineStyle] = useState();

  const activeTabRef = useRef();

  const handleHover = (event) => {
    moveLine(event.target);
  };

  const handleLeave = (event) => {
    moveLine(activeTabRef.current);
  };

  const handleClick = (event) => {
    activeTabRef.current.classList.remove(cx('active'));
    event.target.classList.add(cx('active'));
    activeTabRef.current = event.target;
  };

  const moveLine = (tab) => {
    const previousSiblings = Array.from(tab.parentElement.children).slice(
      0,
      Array.from(tab.parentElement.children).indexOf(tab)
    );

    const position = previousSiblings.reduce((acc, sibling) => acc + sibling.offsetWidth, 0);

    setLineStyle({
      width: tab.offsetWidth,
      transform: `translateX(${position}px)`,
    });
  };

  return (
    <div className={cx('feed-tab')}>
      <div
        className={cx('tab', 'active')}
        ref={activeTabRef}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        Video
      </div>
      <div className={cx('tab')} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={handleClick}>
        <LockIcon />
        Yêu thích
      </div>
      <div className={cx('tab')} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={handleClick}>
        <LockIcon />
        Đã thích
      </div>
      <div className={cx('line')} style={lineStyle}></div>
    </div>
  );
};

export default FeedTab;
