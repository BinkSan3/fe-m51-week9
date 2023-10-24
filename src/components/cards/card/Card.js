import React from "react";

import "./Card.css";

const Card = ({ user }) => {
  return (
    <div className="card">
      <p>{user}</p>
    </div>
  );
};

export default Card;
