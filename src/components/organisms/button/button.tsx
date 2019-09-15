import cls from "classnames";
import * as React from "react";

import "./button.scss";

interface IButton {
  className?: string;
  title: string;
  color?: "green" | "red";
  onClick: () => void;
}

const Button: React.FC<IButton> = React.memo(({ title, className, color, onClick }) => {
  return (
    <button className={cls(className, "btn", `btn--${color}`)} onClick={onClick}>
      {title}
    </button>
  );
});

export default Button;
