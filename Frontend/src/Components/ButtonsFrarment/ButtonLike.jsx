import React from "react";
import { Button } from "react-bootstrap";
import { FcLike } from 'react-icons/fc'
import { MdOutlineFavoriteBorder } from 'react-icons/md'


const ButtonLike = (props) => {
    debugger
    return (
        <>
            {props.favorites === undefined ? null : <ButtonFragment favorites={props.favorites} id={props.is} />}
        </>
    )
}
const ButtonFragment = (props) =>{
    debugger
    return(
        <>
        {props.favorites.includes(props.id) ? <Button><FcLike size={20} /></Button>
                : <Button><MdOutlineFavoriteBorder size={20} /></Button>}
        </>
    )
}

export default ButtonLike;