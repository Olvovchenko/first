import { render } from "@testing-library/react";
import { Component } from "react";
import React from "react";

const ButStyle= ({children,...props}) => {
    return ( <button {...props}>
  {children}
   </button>);
};
export default ButStyle;