import React from "react";
import { Button,Spinner } from "react-bootstrap";
import { FcLike } from 'react-icons/fc'
import { MdOutlineFavoriteBorder } from 'react-icons/md'


const ButtonLike = (props) => {
    const listLike = props.favorites
    const inArr = listLike.includes(props.id)
    const procces = props.inProcces
    return (
        <>
            {!procces ? inArr ? <Button onClick={() => { props.addFavThunk(props.idUser, props.id, 'DEL') }} >
                <FcLike size={20} /></Button>
                : <Button onClick={() => { props.addFavThunk(props.idUser, props.id, 'ADD') }}>
                    <MdOutlineFavoriteBorder size={20} /></Button>
                    :<Button><Spinner animation="border" variant="primary" size="sm" /></Button>}
        </>
    )
}

export default ButtonLike;