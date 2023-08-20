import React from "react"
import Comp2 from "./Comp2"
import { useState } from "react";

function Comp1(props) {
    const [color, setColor] = useState("");
    const [shouldHide, setHide] = useState(false);

    var state = { 'color': color, 'shouldHide': shouldHide }

    const changeColor = () => {
        setColor('Red');
        console.log(this);

    }

    return (
        <div>
            <Comp2 roomShape={props.roomShape} color={props.color} />
            <button id="btn" style={{ backgroundColor: color }} onClick={changeColor}>Change Color</button>
            <button id="hide" style={state.shouldHide ? { display: "none" } : { display: "initial" }} onClick={hide}>Click to Hide</button>
        </div>
    )

    function hide() {
        setHide(true);
    }

}

export default Comp1