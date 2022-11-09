import { render } from "@testing-library/react";
import { Component } from "react";
import React from "react";
import Quan from "./Quan.js"

export default function Quantity(props) {
    const { newsum }=props;
    return ( 
        <div>
            <Quan newsum={newsum} number={1} />
            <Quan newsum={newsum} number={2}/>
            <Quan newsum={newsum} number={3}/>
        </div>
    )
}