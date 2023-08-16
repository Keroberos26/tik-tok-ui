import React from "react";
import Button from "~/components/Button";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }) => {
  return (
    <Button
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
      className={cx("menu-item")}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;
