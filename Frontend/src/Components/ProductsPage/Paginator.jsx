import React from "react"
import { Container, Row, Col, Pagination } from "react-bootstrap";


const Paginator = (props) => {

    const newPage= (number) =>{
        props.onPageChanged(number)
        window.scrollTo(0,300)
    }

    let active = props.currentPage
    let items = [];
    for (let number = 1; number <= props.pageCount; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={(e) => { newPage(number) }}>
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