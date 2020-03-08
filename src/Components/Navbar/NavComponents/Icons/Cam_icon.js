import React, { useState, useContext } from "react";
import "./app_icon.scss";
import { ThemeContext } from "../../../../Context/ThemeContext";

// SVG COPIED FROM YOUTUBE

const CamIcon = React.memo(() => {
  const [fade, setFade] = useState(false);

  const [YtTheme] = useContext(ThemeContext);
  const Theme = YtTheme.isDarkTheme;

  const HundleClick = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 300);
  };

  return (
    <button data-id="cax" className="icon_container _C " onClick={HundleClick}>
      <svg
        data-id="cax"
        className="icon_"
        viewBox="0 0 24 24"
        focusable={false}
      >
        <g>
          <path
            data-id="cax"
            fill={Theme ? "#fff" : "#606060"}
            d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
          ></path>
        </g>
      </svg>
      <div
        data-id="cax"
        className={
          "effect" + (fade ? (Theme ? " action-dark" : " action-light") : "")
        }
      ></div>
    </button>
  );
});

export default CamIcon;