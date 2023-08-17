import React, { forwardRef, useState } from "react";
import images from "~/assets/images";
import classNames from "classnames";
import styles from "./Image.module.scss";

const Image = (
  { src, alt, className, fallback: customFallback = images.noImage, ...props },
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
};

export default forwardRef(Image);
