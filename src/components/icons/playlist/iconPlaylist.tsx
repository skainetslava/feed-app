import * as React from "react";
import { IIconProps } from "src/models";

const IconPlaylist: React.FC<IIconProps> = ({ w = 16, h = 16, className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 320 320"
      version="1.1"
      viewBox="0 0 320 320"
      xmlSpace="preserve"
      className={className}
      width={w}
      height={h}
      onClick={onClick}
    >
      <path d="M0 96H256V138.667H0z" />
      <path d="M0 10.667H256V53.334H0z" />
      <path d="M0 181.333H170.667V224H0z" />
      <path d="M213.333 181.333L213.333 309.333 320 245.333z" />
    </svg>
  );
};

export default IconPlaylist;
