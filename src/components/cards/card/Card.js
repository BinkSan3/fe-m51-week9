import React, { useState } from "react";

import "./Card.css";
import { deleteUser, getAllUsers } from "../../../utils";

const Card = ({ user, users, setUsers, delUser, setDelUser, index }) => {
  const handleClick = async (id) => {
    console.log("card SEARCH ", id);
    console.log("CARD IS LOOKING FOR ID", delUser);
    const user = await deleteUser(id);
    const foundUsers = await getAllUsers();
    await setUsers(foundUsers);
    // await setUsers(users - delUser);
  };

  return (
    <div className="card">
      <p>{user.id}</p>
      <p>{user.username}</p>
      {setDelUser(user.id)}
      <button type="submit" onClick={() => handleClick(user.id)}>
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default Card;
