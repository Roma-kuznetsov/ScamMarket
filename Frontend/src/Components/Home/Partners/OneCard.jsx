import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const OneCard = (props) => {
    return (
        <Col>
            <Card text="white" bg="dark" style={{ width: '18rem', margin: "auto", marginBottom: "2rem", border: "1px solid #4169E1" }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <NavLink to={props.path}><Button variant="primary">Go somewhere <CgArrowLongRight size={32} /> </Button></NavLink>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default OneCard;