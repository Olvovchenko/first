import { render } from "@testing-library/react";
import { Component } from "react";
import React from "react";

const ButStyle= (props) => {
    return ( <button >
  {props.children}
   </button>);
};
export default ButStyle;