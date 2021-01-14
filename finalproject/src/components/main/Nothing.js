import React from "react";
import { Link } from "react-router-dom";

const Nothing = () => {
  return (
    <div>
      There's nothing here!
      <Link to="/">Go home</Link>
    </div>
  );
};

export default Nothing;
