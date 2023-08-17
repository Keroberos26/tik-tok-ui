import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faA,
  faArrowRightFromBracket,
  faEllipsisVertical,
  faGear,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBookmark,
  faCircleQuestion,
  faCreditCard,
  faKeyboard,
  faMessage,
  faMoon,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import images from "~/assets/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faA} />,
    title: "Tiếng Việt",
    children: {
      title: "Ngôn ngữ",
      data: [
        {
          type: "language",
          code: "en_EN",
          title: "English",
        },
        {
          type: "language",
          code: "vi_VN",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Phím tắt trên bàn phím",
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: "Chế độ tối",
  },
];

const Header = () => {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // Handle language
        console.log(menuItem);
        break;
      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Xem hồ sơ",
      to: "/@keroberos",
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: "Yêu thích",
      to: "/@keroberos",
    },
    {
      icon: <FontAwesomeIcon icon={faCreditCard} />,
      title: "Nhận xu",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Cài đặt",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Đăng xuất",
      to: "/log-out",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok" />
        </div>

        <Search />

        <div className={cx("action")}>
          <Button
            variant="secondary"
            outline
            rounded="2"
            size="small"
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Tin nhắn" delay="0" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>
              <Tippy content="Hộp thư" delay="0" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button variant="primary">Đăng nhập</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/357713752_3185336371765882_3336084960555653097_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4zTlzr_5EeoAX9rujzb&_nc_ht=scontent.fdad1-3.fna&oh=00_AfANlbntqf8UPIzAIQXRekS3xuMGoCDAKu0H7ukSmqKj9w&oe=64E14ED6"
                alt="Phan Đỗ Thảo Linh"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
