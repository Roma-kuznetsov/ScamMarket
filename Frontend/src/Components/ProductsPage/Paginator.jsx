import React from "react"
import { Container, Row, Col, Pagination } from "react-bootstrap";

// display one brand
const Paginator = (props) => {
    debugger
    let active = props.currentPage
    let items = [];
    for (let number = 1; number <= props.pageCount; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={(e) => { props.onPageChanged(number) }}>
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