import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import s from './Preloader.module.css'

const KomuEtoNado = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className={s.scam}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis architecto laborum numquam earum, soluta quaerat nemo dolorum incidunt officiis et, quis eveniet reprehenderit aspernatur eius autem ducimus rem ipsa alias?</div>
                </Col>
            </Row>
        </Container>
    )
}

export default KomuEtoNado