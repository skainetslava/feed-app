import * as React from "react";
import { IIconProps } from "src/models";

const IconControlNext: React.FC<IIconProps> = ({ w, h, className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 60 60"
      version="1.1"
      viewBox="0 0 60 60"
      xmlSpace="preserve"
      width={w}
      height={h}
      fill="#b3b3b3"
      className={className}
      onClick={onClick}
    >
      <path d="M41.266 27.789L4.887 4.941C2.199 3.177 0 4.476 0 7.823v44.353c0 3.348 2.199 4.645 4.887 2.883l36.379-22.848s1.311-.922 1.311-2.211-1.311-2.211-1.311-2.211zM52.5.979c-4.439 0-7.5 1.365-7.5 5.804v46.433c0 4.438 3.061 5.804 7.5 5.804s7.5-1.365 7.5-5.804V6.783C60 2.344 56.939.979 52.5.979z" />
    </svg>
  );
};

export default IconControlNext;
