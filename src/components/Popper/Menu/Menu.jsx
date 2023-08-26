import Tippy from '@tippyjs/react/headless';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Popper from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

const Menu = ({ children, items = [], className, classNameItem, hideOnClick = false, onChange = defaultFn }) => {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          className={classNameItem}
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleResetToFirstPage = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <Tippy
      interactive
      offset={[12, 12]}
      delay={[0, 500]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx('menu-list', className)} tabIndex={-1} {...attrs}>
          <Popper>
            {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </Popper>
        </div>
      )}
      onHide={handleResetToFirstPage}
    >
      {children}
    </Tippy>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  classNameItem: PropTypes.string,
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
