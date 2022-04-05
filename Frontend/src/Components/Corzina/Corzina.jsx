import React from "react";
import { Container, Row, Col, Table } from 'react-bootstrap';
import CorzinaItem from "./CorzinaItem";

const Corzina = (props) => {
    let totalCount = props.cart
        .map(i => i.price * i.count)
        .reduce((prev, curr) => prev + curr, 0);
    
    return (
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Изображение</th>
                                <th>Размер</th>
                                <th>Название</th>
                                <th>Количество</th>
                                <th>Цена за шт.</th>
                                <th>Всего</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.cart.map((i) => <CorzinaItem removeCart={props.removeCart} fieldId={i.fieldId} key={i.fieldId}
                                picture={i.picture} itemId={i.itemId} size={i.size}
                                count={i.count} price={i.price} />)}
                        </tbody>
                    </Table>
                    <div>{totalCount}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Corzina;