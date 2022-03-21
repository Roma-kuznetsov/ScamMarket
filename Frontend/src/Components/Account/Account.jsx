import React from "react";
import { Button, Col, Container, Row,Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import s from '../ProductsPage/OneProdPage/oneProd.module.css'
import { FcSettings, FcLike } from 'react-icons/fc'

const Account = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Личный кабинет</h2>
                    <div className={s.line}></div>
                    <div className={s.text}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias cum sequi, ipsa sapiente vero voluptate facilis dolorem vitae similique reprehenderit quis pariatur consequuntur rerum, commodi ratione debitis maxime sunt voluptas.
                    </div>
                    <div>

                    </div>
                    <div className={s.buttons}>
                        <NavLink to={'/notifications'}><Button>Уведомления <Badge bg="danger"></Badge></Button></NavLink>
                        <NavLink to={'/settings'}><Button>Настройки<FcSettings size={20} /></Button></NavLink>
                        <NavLink to={'/favorites'}><Button>Избранное<FcLike size={20} /></Button></NavLink>
                    </div>

                    <div className={s.line}></div>
                    <Button variant="primary" onClick={() => { props.logout() }}>Выйти из аккаунта</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Account;