import React from "react";
import Register from "../register/Register";
import Login from "../login/Login";
import "./UserContainer.css";

const UserContainer = () => {
  return (
    <div className="user-container">
      <Register />
      <Login />
    </div>
  );
};

export default UserContainer;
