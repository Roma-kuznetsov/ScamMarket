

import React from "react"
import { Container, Row,} from "react-bootstrap";
import OneCard from "./OneCard";

const Partners = () => {
    return (
        <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            <Row>
                <OneCard />
                <OneCard />
                <OneCard />
                <OneCard />
            </Row>
        </Container>
    )
}

export default Partners;