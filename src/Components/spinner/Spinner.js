import React from "react";
import "./spinner.css";

export const Spinner = () => (
  <div className="spinner">
    <div className="lds-css">
      <div className="lds-double-ring">
        <div />
        <div />
      </div>
    </div>
  </div>
);
