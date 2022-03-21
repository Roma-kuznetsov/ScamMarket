import React from "react";
import { Spinner } from "react-bootstrap";
import s from './Preloader.module.css'

const Preloader = () =>{
    return (
    <div className={s.spiner}>
        <Spinner animation="border" variant="primary" />
    </div>
    )
}


export default Preloader