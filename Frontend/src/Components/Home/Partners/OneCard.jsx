import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Col, Card, Button } from "react-bootstrap";
import CardTitle from "../../../images/CardImage.svg"

const OneCard = () => {
    return (
        <Col>
            <Card text="white" bg="dark" style={{ width: '18rem', margin: "auto", marginBottom: "2rem", border: "1px solid #4169E1" }}>
                <Card.Img variant="top" src={CardTitle} />
                <Card.Body>
                    <Card.Title>Толстовки</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere <CgArrowLongRight size={32} /> </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default OneCard;