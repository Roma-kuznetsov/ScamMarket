import React from "react"
import { Container, Row, Col, Pagination } from "react-bootstrap";

// display one brand
const Paginator = (props) => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Pagination style={{ justifyContent: "center" }}>{items}</Pagination>
                </Col>
            </Row>
        </Container>
    )

}

export default Paginator;