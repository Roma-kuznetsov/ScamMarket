import React from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import s from './Preloader.module.css'

const Scam = (props) => {
    return (
        <>
            <div className={s.scam}>Спасибо что пользуетесь нашим сервисом,
                товары придут примерно через <strong>НИКОГДА</strong></div>
            <div className={s.scamButton}>
                <NavLink to='/home'><Button>Вернуться на главную</Button></NavLink>
            </div>
        </>
    )
}

export default Scam