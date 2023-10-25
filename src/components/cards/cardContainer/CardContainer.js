import React from "react";
import Card from "../card/Card";

import "./CardContainer.css";

import { getUsers } from "../../../utils";

const CardContainer = ({ users }) => {
  const fakeUsers = ["bill", "jane", "fred", "sarah", "bob", "alice", "andres"];

  return (
    <div className="card-container">
      {users.map((user, index) => (
        <Card user={user} />
      ))}
    </div>
  );
};

export default CardContainer;
