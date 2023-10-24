import React from "react";
import Card from "../card/Card";

import "./CardContainer.css";

const CardContainer = () => {
  const fakeUsers = ["bill", "jane", "fred", "sarah", "bob", "alice", "andres"];

  return (
    <div className="card-container">
      {fakeUsers.map((user, index) => (
        <Card user={user} />
      ))}
    </div>
  );
};

export default CardContainer;
