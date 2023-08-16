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
        src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/357713752_3185336371765882_3336084960555653097_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4zTlzr_5EeoAX9rujzb&_nc_ht=scontent.fdad1-3.fna&oh=00_AfANlbntqf8UPIzAIQXRekS3xuMGoCDAKu0H7ukSmqKj9w&oe=64E14ED6"
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
