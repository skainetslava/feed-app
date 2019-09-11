import * as React from "react";

export interface IIconProps {
    w?: number,
    h?: number,
    className?: string,
    onClick?: () => void
}

const IconRepeat: React.FC<IIconProps> = ({ w = 16, h = 16, className, onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 512.016 512.016"
            version="1.1"
            viewBox="0 0 512.016 512.016"
            xmlSpace="preserve"
            className={className}
            fill="#b3b3b3"
            width={w}
            height={h}
            onClick={onClick}
        >
            <path d="M482.197 374.266l-78.717-45.448c-15.89-9.174-35.829 2.308-35.829 20.686v27.587H151.058c-63.597-.001-115.337-51.74-115.337-115.338 0-9.864-7.997-17.86-17.86-17.86-9.864 0-17.86 7.997-17.86 17.86 0 83.294 67.765 151.058 151.058 151.058H367.65v27.587c0 18.347 19.913 29.876 35.829 20.686l78.717-45.447c15.89-9.172 15.917-32.181.001-41.371zM360.942 99.189H144.349V71.601c0-18.347-19.913-29.876-35.829-20.686L29.803 96.362c-15.889 9.173-15.917 32.182 0 41.372l78.717 45.448c15.89 9.174 35.829-2.309 35.829-20.686v-27.587h216.593c63.598 0 115.337 51.739 115.337 115.337 0 9.864 7.997 17.86 17.86 17.86 9.864 0 17.86-7.997 17.86-17.86.001-83.293-67.764-151.057-151.057-151.057z" />
        </svg>
    )
};

export default IconRepeat;
