import { render } from "@testing-library/react";
import { Component, useCallback } from "react";
import React from "react";
import {useContext} from 'react';
import Context from'./Context';

export default function Quan(props) {
    const {number}=props;
    const value=useContext(Context);
      
    const handleClick=useCallback(()=>{value.newsum(number)})
    return(
    <div>
     <h4>Купить {number} книг</h4> 
     <button onClick={handleClick}></button>  
    </div>
    )
}