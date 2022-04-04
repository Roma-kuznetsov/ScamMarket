import React from "react";
import { Container, Row, Col,Table } from 'react-bootstrap';
import CorzinaItem from "./CorzinaItem";

const Corzina = (props) => {
    debugger
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
                    {props.cart.map((i) => <CorzinaItem key={i.fieldId} picture={i.picture} itemId={i.itemId} size={i.size} count={i.count} price={i.price}  /> )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Corzina;