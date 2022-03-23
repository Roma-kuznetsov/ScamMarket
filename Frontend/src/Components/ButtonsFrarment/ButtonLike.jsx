import React from "react";
import { Button } from "react-bootstrap";
import { FcLike } from 'react-icons/fc'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

const ButtonLike = (props) => {
    const listLike = props.favorites
    const inArr = listLike.includes(props.id)
    return (
        <>
            {inArr ? <Button onClick={() => { props.addFavThunk(props.idUser, props.id, 'DEL') }} >
                <FcLike size={20} /></Button>
                : <Button onClick={() => { props.addFavThunk(props.idUser, props.id, 'ADD') }}>
                    <MdOutlineFavoriteBorder size={20} /></Button>}
        </>
    )
}

export default ButtonLike;