import React from "react";
import { Aside } from "./Aside";
import { Article } from "./Article";

export const MainHome = () => {
  return (
    <div>
      <div className="d-flex">
        <Aside />
        <Article />
      </div>
    </div>
  );
};
