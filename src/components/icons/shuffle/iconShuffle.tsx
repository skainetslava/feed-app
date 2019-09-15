import * as React from "react";
import { IIconProps } from "src/models";

const IconShuffle: React.FC<IIconProps> = ({ w = 16, h = 16, className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 192"
      className={className}
      fill="#b3b3b3"
      width={w}
      height={h}
      onClick={onClick}
    >
      <path d="M65.689 69.268l8.894 17.788 8.945-17.889L80 62.111A39.782 39.782 0 0044.223 40H0v16h44.223a23.868 23.868 0 0121.466 13.268zM165.657 114.343l-11.314 11.314L164.686 136h-32.909a23.868 23.868 0 01-21.466-13.268l-8.894-17.788-8.945 17.889L96 129.889A39.782 39.782 0 00131.777 152h32.909l-10.343 10.343 11.314 11.314 24-24a8 8 0 000-11.314z" />
      <path d="M189.657 42.343l-24-24-11.314 11.314L164.686 40h-32.909A39.782 39.782 0 0096 62.111l-30.311 60.621A23.868 23.868 0 0144.223 136H0v16h44.223A39.782 39.782 0 0080 129.889l30.311-60.621A23.868 23.868 0 01131.777 56h32.909l-10.343 10.343 11.314 11.314 24-24a8 8 0 000-11.314z" />
    </svg>
  );
};

export default IconShuffle;
