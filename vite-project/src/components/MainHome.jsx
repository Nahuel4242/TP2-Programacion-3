import React from "react";
import { Aside } from "./Aside";
import { Article } from "./Article";
import { LangTable } from "./LangTable";

export const MainHome = (props) => {
  return (
    <>
      <div className="main">
        <div className="d-flex">
          <Aside />
          <Article datos={props.datos} />
        </div>
        <LangTable datos={props.datos} />
      </div>
    </>
  );
};
