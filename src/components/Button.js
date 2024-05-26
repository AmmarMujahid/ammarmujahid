import React from "react";
import { Aboutme } from "./assets";

const Button = ({
  title,
  className,
  primary,
  secondary,
  tertiary,
  icon,
  ...rest
}) => {
  let baseStyle =
    "py-3 rounded-lg text-white font-semibold whitespace-nowrap cursor-pointer";

  if (primary) {
    baseStyle += " bg-primaryColor";
  }

  if (secondary) {
    baseStyle += " border-2 border-primaryColor";
  }

  return (
    <button
      className={`${baseStyle} ${className} flex gap-[6px] items-center`}
      {...rest}
    >
      {title}
      {title && icon}
    </button>
  );
};

export default Button;
