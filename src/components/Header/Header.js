import React from "react";

import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
      <h1>Welcome to my fancy routing website!!!</h1>
    </div>
  );
};

export default Header;
