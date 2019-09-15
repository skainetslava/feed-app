import * as React from "react";
import { IIconProps } from "src/models";

const IconPause: React.FC<IIconProps> = ({ w = 16, h = 16, className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 357 357"
      version="1.1"
      viewBox="0 0 357 357"
      fill="#fff"
      xmlSpace="preserve"
      width={w}
      height={h}
      onClick={onClick}
      className={className}
    >
      <path d="M25.5 357h102V0h-102v357zm204-357v357h102V0h-102z" />
    </svg>
  );
};

export default IconPause;
