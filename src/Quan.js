import { render } from "@testing-library/react";
import { Component, useCallback } from "react";
import React from "react";

export default function Quan(props) {
    const {number}= props;
    const {newsum} = props;
    const handleClick=useCallback(()=>{newsum(number)})
    return(
    <div>
     <h4>Купить {number} книг</h4> 
     <button onClick={handleClick}></button>  
    </div>
    )
}