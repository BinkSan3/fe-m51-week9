import React from "react";
import { getAllUsers } from "../../../utils";

const UserPanel = ({ setUsers }) => {
  const handleClick = async (e) => {
    e.preventDefault();
    const foundUsers = await getAllUsers();
    await setUsers(foundUsers);
  };
  return (
    <div>
      <button type="submit" onClick={handleClick}>
        Get All Users
      </button>
    </div>
  );
};

export default UserPanel;
