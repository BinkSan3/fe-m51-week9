import React from "react";

import "./Header.css";

const Header = ({ user }) => {
  console.log("HEADER", user);
  if (!user) {
    return <h1>You are not logged in</h1>;
  }
  return (
    <header>
      <div className="header">
        <h1 id="headerTitle">
          Hi {user.username}, You are logged in to website
        </h1>
      </div>
    </header>
  );
};

export default Header;
