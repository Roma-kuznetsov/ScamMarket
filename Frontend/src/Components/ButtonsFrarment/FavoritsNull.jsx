import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from './Preloader.module.css'

const FavoritsNull = () => {
    return (
        <Container>
            <Row className={s.row}>
                <Col>
                    <h2>У вас нет избранных товаров</h2>
                </Col>
            </Row>
        </Container>
    )
}


export default FavoritsNull