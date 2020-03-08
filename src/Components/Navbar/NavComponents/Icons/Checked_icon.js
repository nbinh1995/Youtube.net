import React, { useContext } from "react";
import "./app_icon.scss";
import { ThemeContext } from "../../../../Context/ThemeContext";

// SVG COPIED FROM YOUTUBE

const CheckedIcon = React.memo(({ color = false }) => {
  const [YtTheme] = useContext(ThemeContext);
  const Theme = YtTheme.isDarkTheme;

  return (
    <button data-id="apx" className="icon_container">
      <svg
        data-id="apx"
        className="icon_"
        viewBox="0 0 24 24"
        focusable={false}
      >
        <g>
          <path
            data-id="apx"
            fill={!color ? (Theme ? "#3ea6ff" : "#065fd4") : color}
            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
          ></path>
        </g>
      </svg>
    </button>
  );
});

export default CheckedIcon;