import React from "react";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/357713752_3185336371765882_3336084960555653097_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=be3454&_nc_ohc=hZS64zJ3GNAAX-7H1lG&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDPy8PxuMTrPeGw3KgUBO8973HpPPszy8Co_yF9OEkEYw&oe=64D965D6"
        alt="Avatar"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Phan Đỗ Thảo Linh</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>wiinhnil</span>
      </div>
    </div>
  );
};

export default AccountItem;
