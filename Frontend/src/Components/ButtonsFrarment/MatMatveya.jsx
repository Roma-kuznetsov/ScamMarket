import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import s from './Preloader.module.css'
import dima from '../../images/Mat/димыч.png'
import clown from '../../images/Mat/fi5swzcWN0c.jpg'

const MatMatveya = () => {
    return (
        <Container>
            <Row>
                <Col style={{ justifyContent: "center" }}>
                    <div className={s.scam}> А зачем <strong>ТЫ</strong> сюда зашел?</div>
                    <Card bg='dark' text='light' style={{ width: '26rem', margin: "auto", marginBottom: "400px" }}>
                        <Card.Img variant="top" src={dima} style={{ height: '19rem' }} />
                    </Card>
                    <div className={s.scam}> Мать матвея не доступна из за санкций надеемся она вернется на наш рынок</div>
                    <div className={s.scam}> Пока её нет можете воспользоватся <a target='_blank' href='https://vk.com/id540976513'>Матвеем</a></div>
                    <Card bg='dark' text='light' style={{ width: '26rem', margin: "auto", marginBottom: "40px" }}>
                        <Card.Img variant="top" src={clown} style={{ height: '19rem' }} />
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}

export default MatMatveya