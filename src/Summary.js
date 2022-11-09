import { render } from "@testing-library/react";
import { Component } from "react";
import React from "react";
import { useContext } from "react";
import Context from './Context.js';



const Summary=(props)=>{
    const value = useContext(Context);
    return(
    <div>
     <h4>вы купили {value.summar} книг</h4>   
    </div>
    )
}
export default Summary