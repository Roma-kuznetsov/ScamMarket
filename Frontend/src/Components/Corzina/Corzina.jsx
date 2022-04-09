import React from "react";
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import CorzinaItem from "./CorzinaItem";
import s from './Corzine.module.css'


const Corzina = (props) => {
    let totalCount = props.cart
        .map(i => i.price * i.count)
        .reduce((prev, curr) => prev + curr, 0);

    return (
        <Container>
            {props.cart.length > 0 ?
                <>
                    <Row>
                        <Col>
                            <Table responsive="md" striped bordered hover >
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
                                    {props.cart.map((i) => <CorzinaItem inProcces={props.inProcces} updateCart={props.updateCart} nalic={i.nalic}
                                        removeCart={props.removeCart} fieldId={i.fieldId} key={i.fieldId}
                                        picture={i.picture} itemId={i.itemId} size={i.size}
                                        count={i.count} price={i.price} />)}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>Итоговая сумма {totalCount}$</div>
                            <NavLink to ="/decoration"><Button>Oформить заказ</Button></NavLink>
                        </Col>
                    </Row>
                </> : <div className={s.nullCart}>Корзина пуста</div>}
        </Container>
    )
}

export default Corzina;