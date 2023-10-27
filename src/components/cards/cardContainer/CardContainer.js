import React from "react";
import Card from "../card/Card";

import "./CardContainer.css";

import { useState } from "react";

import { getAllUsers } from "../../../utils";

const CardContainer = ({ users, setUsers }) => {
  const [delUser, setDelUser] = useState();

  const fakeUsers = ["bill", "jane", "fred", "sarah", "bob", "alice", "andres"];

  return (
    <div className="card-container">
      {users.map((user, index) => (
        <Card
          key={index}
          users={users}
          setUsers={setUsers}
          user={user}
          delUser={delUser}
          setDelUser={setDelUser}
        />
      ))}
    </div>
  );
};

export default CardContainer;
