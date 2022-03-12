import React from "react";
import { ToggleButton } from "react-bootstrap";

const SizeItem =(props) =>{
    return(
        <ToggleButton id="tbg-radio-1" value={props.name} disabled={false}>
            {props.name}
        </ToggleButton>
    )
}

export default SizeItem