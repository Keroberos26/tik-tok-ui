import React, { forwardRef, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Image.module.scss";
import images from "~/assets/images";

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallBack] = useState("");

    const handleError = () => {
      setFallBack(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  customFallback: PropTypes.string,
};

export default Image;
