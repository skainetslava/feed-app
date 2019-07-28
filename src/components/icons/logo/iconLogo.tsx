import * as React from "react";

import { IIconProps } from "src/components/icons/play/iconPlay";

const IconLogo: React.FC<IIconProps> = ({ w, h, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -20 512 512"
      width={w}
      height={h}
      className={className}
    >
      <circle cx="256" cy="256" r="247.983" fill="#50B95D" />
      <path
        fill="#20A83E"
        d="M42.221 256c0-131.208 101.903-238.597 230.881-247.386A251.503 251.503 0 00256 8.017C119.043 8.017 8.017 119.043 8.017 256S119.043 503.983 256 503.983c5.751 0 11.45-.213 17.102-.598C144.124 494.597 42.221 387.208 42.221 256z"
      />
      <g fill="#FFF">
        <path d="M354.985 343.198c-47.442-20.978-98.007-31.616-150.292-31.616-30.798 0-61.423 3.775-91.022 11.22-6.87 1.728-11.038 8.699-9.31 15.568 1.728 6.87 8.697 11.038 15.568 9.31 27.554-6.931 56.073-10.445 84.763-10.445 48.689 0 95.764 9.9 139.917 29.425a12.78 12.78 0 005.181 1.099c4.922 0 9.619-2.851 11.738-7.643 2.866-6.478-.063-14.053-6.543-16.918zM383.548 267.01c-56.586-24.328-116.762-36.663-178.855-36.663-30.739 0-61.464 3.098-91.32 9.207-9.253 1.893-15.22 10.931-13.327 20.184 1.893 9.253 10.929 15.216 20.184 13.327 27.604-5.649 56.022-8.513 84.463-8.513 57.421 0 113.05 11.4 165.345 33.882a17.042 17.042 0 006.747 1.395c6.628 0 12.937-3.876 15.72-10.352 3.731-8.679-.28-18.737-8.957-22.467zM426.014 187.568c-69.804-31.192-144.266-47.009-221.321-47.009-35.885 0-71.773 3.525-106.668 10.478-11.579 2.307-19.096 13.563-16.788 25.143 2.307 11.579 13.561 19.1 25.143 16.788 32.15-6.406 65.227-9.653 98.314-9.653 71.003 0 139.598 14.565 203.876 43.289a21.269 21.269 0 008.709 1.865c8.174 0 15.979-4.716 19.53-12.661 4.817-10.779-.016-23.422-10.795-28.24z" />
      </g>
      <path d="M437.019 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.981 74.981C26.629 123.333 0 187.62 0 256c0 59.517 20.879 117.491 58.79 163.241a8.017 8.017 0 1012.346-10.231C35.603 366.13 16.033 311.79 16.033 256 16.033 123.682 123.682 16.033 256 16.033S495.967 123.682 495.967 256 388.318 495.967 256 495.967c-60.183 0-117.745-22.376-162.081-63.007a8.017 8.017 0 10-10.833 11.821C130.387 488.127 191.796 512 256 512c68.38 0 132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.981-181.019z" />
      <path d="M358.228 335.866c-48.471-21.432-100.128-32.3-153.535-32.3-31.456 0-62.739 3.857-92.977 11.462-11.146 2.804-17.933 14.152-15.129 25.299 2.804 11.144 14.151 17.934 25.299 15.129 26.915-6.77 54.775-10.203 82.808-10.203 47.566 0 93.55 9.669 136.676 28.739 10.396 4.596 22.901-.25 27.492-10.633 4.647-10.512-.123-22.845-10.634-27.493zm-4.031 21.009c-1.06 2.398-3.946 3.514-6.345 2.454-45.18-19.98-93.346-30.11-143.159-30.11-29.35 0-58.526 3.596-86.718 10.687-2.374.598-4.889-.751-5.706-3.057-.934-2.636.647-5.59 3.358-6.272 28.961-7.283 58.926-10.978 89.066-10.978 51.16 0 100.635 10.407 147.05 30.931a4.815 4.815 0 012.454 6.345zM376.785 307.845a25.105 25.105 0 0023.085-15.202c5.471-12.724-.431-27.527-13.156-32.998-57.592-24.761-118.832-37.315-182.021-37.315-31.279 0-62.544 3.152-92.926 9.37-13.405 2.743-22.321 16.218-19.574 29.645 2.776 13.562 16.076 22.341 29.645 19.574 27.076-5.541 54.953-8.35 82.855-8.35 56.325 0 110.89 11.18 162.179 33.23a25.155 25.155 0 009.913 2.046zm-172.092-51.311c-28.98 0-57.937 2.919-86.066 8.675-4.909 1.004-9.723-2.173-10.726-7.079-.993-4.854 2.231-9.731 7.08-10.723 29.327-6.002 59.511-9.044 89.712-9.044 60.997 0 120.108 12.116 175.688 36.011 4.603 1.98 6.737 7.333 4.759 11.935-1.957 4.551-7.383 6.716-11.935 4.759-53.301-22.915-109.996-34.534-168.512-34.534zM99.592 158.9c34.379-6.849 69.74-10.323 105.101-10.323 51.652 0 102.544 7.283 151.264 21.647a8.018 8.018 0 004.535-15.38c-50.193-14.798-102.612-22.301-155.799-22.301-36.411 0-72.826 3.578-108.234 10.632-11.786 2.348-21.187 11.95-23.236 23.813a29.455 29.455 0 00.152 10.758c2.348 11.787 11.949 21.19 23.814 23.237 3.557.614 7.219.553 10.758-.153 31.634-6.302 64.185-9.498 96.746-9.498 69.868 0 137.362 14.33 200.607 42.592 11.321 5.058 24.918 2.312 33.407-6.706a29.406 29.406 0 005.422-8.137c6.612-14.798-.047-32.218-14.845-38.83a554.922 554.922 0 00-39.316-15.795 8.015 8.015 0 10-5.4 15.095 538.465 538.465 0 0138.174 15.338c6.644 2.968 9.723 10.993 6.748 17.65-2.969 6.645-10.998 9.719-17.65 6.748-65.317-29.189-135.011-43.988-207.148-43.988-33.61 0-67.215 3.3-99.882 9.808-7.152 1.429-14.29-3.357-15.712-10.493-1.423-7.148 3.355-14.292 10.494-15.714z" />
    </svg>
  );
};

export default IconLogo;