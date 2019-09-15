import * as React from "react";
import { IIconProps } from "src/models";

const IconPlay: React.FC<IIconProps> = ({ w = 16, h = 16, className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 41.999 41.999"
      version="1.1"
      viewBox="0 0 41.999 41.999"
      xmlSpace="preserve"
      fill="#b3b3b3"
      width={w}
      height={h}
      className={className}
      onClick={onClick}
    >
      <path d="M36.068 20.176l-29-20A1 1 0 005.5.999v40a1 1 0 001.568.823l29-20a.999.999 0 000-1.646z" />
    </svg>
  );
};

export default IconPlay;
