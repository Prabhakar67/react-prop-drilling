import React from 'react';
import Comp5 from './Comp5';

function Comp4(props) {
    return (
        <div>
          <Comp5 roomShape={props.roomShape} color={props.color}/>  
        </div>
    );
}

export default Comp4;