import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterLink = (props) =>{
    return(
        <li><Nav.Link as={Link} to='/komuJetoNado'>{props.name}</Nav.Link></li>
    )
}

export default FooterLink