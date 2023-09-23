import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <span className="header__left fading-underline">Andrew Ton</span>
      <div className="header__right">
        <a href=" https://github.com/andrewtonster" target="_blank">
          Github
        </a>

        <a
          href="https://www.linkedin.com/in/andrew-ton-367b18253"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;
