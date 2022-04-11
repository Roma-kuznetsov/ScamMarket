import React from "react";
import {NavDropdown} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import s from './header.module.css'

const DropDownItem = (props) => {
    return (
        <NavLink onClick={()=>{props.setCollapse(false)}} className={s.otherLink} to={props.path}>
            <NavDropdown.Item as="div" >{props.name}</NavDropdown.Item>
        </NavLink>
    )
}

export default DropDownItem