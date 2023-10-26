import React from "react";
import Register from "../register/Register";
import Login from "../login/Login";
import "./UserContainer.css";
import UserPanel from "../userPanel/UserPanel";

import { useState } from "react";

const UserContainer = ({ user, setUser, setUsers }) => {
  return (
    <div className="user-container">
      <Register />
      <Login user={user} setUser={setUser} />
      <UserPanel setUsers={setUsers} />
    </div>
  );
};

export default UserContainer;
