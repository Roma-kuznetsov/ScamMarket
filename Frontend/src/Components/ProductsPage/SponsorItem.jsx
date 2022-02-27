import React from "react"
import {Col, Card } from "react-bootstrap";

// display one brand
const SponsorItem = (props) => {
    return (
        <>
            <Col style={{ justifyContent: "center" }}>
                <Card border="light" style={{ width: '11rem', margin: "auto" }}>
                    <Card.Img variant="top" src={props.brand} style={{ height: "10rem" }} />
                </Card>
            </Col>
        </>
    )
}

export default SponsorItem;