import * as React from "react";
import { IIconProps } from "src/models";

const IconControlPrev: React.FC<IIconProps> = ({ w, h, className, onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 17.802 17.802"
            version="1.1"
            viewBox="0 0 17.802 17.802"
            xmlSpace="preserve"
            width={w}
            height={h}
            fill="#b3b3b3"
            className={className}
            onClick={onClick}
        >
            <path d="M15.363.042a.398.398 0 00-.424.043L4.163 8.587a.41.41 0 00-.153.313c0 .119.059.24.153.314l10.776 8.502a.402.402 0 00.249.086l.175-.039a.395.395 0 00.225-.361V.403a.396.396 0 00-.225-.361z" />
            <path d="M5.188.033H2.53c-.172 0-.315.182-.315.401V17.37c0 .221.143.403.315.403h2.657c.174 0 .315-.183.315-.403V.434c.001-.219-.141-.401-.314-.401z" />
        </svg>
    )
};

export default IconControlPrev;
