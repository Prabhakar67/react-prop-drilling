import React from "react";
import Comp4 from "./Comp4";

function Comp2(props) {
    return (
        <div>
            <h2>Hello comp2</h2>
            <Comp4 roomShape= {props.roomShape} color={props.color}/>
        </div>
    );
}

export default Comp2;