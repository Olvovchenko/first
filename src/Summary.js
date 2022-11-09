import { render } from "@testing-library/react";
import { Component } from "react";
import React from "react";

const Summary=(props)=>{
    const {summar} = props;
    return(
    <div>
     <h4>вы купили {summar} книг</h4>   
    </div>
    )
}
export default Summary