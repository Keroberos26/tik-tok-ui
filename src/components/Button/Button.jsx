import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Button = ({
  to,
  variant,
  outline = false,
  size,
  children,
  disabled = false,
  rounded,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) => {
  let Comp = "button";

  const props = { onClick, ...passProps };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  }

  const classes = cx("wrapper", {
    [className]: className,
    [variant]: variant,
    [size]: size,
    "rounded-none": rounded === "none",
    "rounded-pill": rounded === "pill",
    "rounded-2": rounded === "2",
    outline,
    disabled,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  variant: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(["small", "large"]),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  rounded: PropTypes.string,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
