import React, { useState } from "react";
import "../../index.css";
import { Nav, Navbar, NavDropdown, Container, Row, Col, Modal, Button, Badge } from "react-bootstrap";
import { ReactComponent as Logo } from "../../logo.svg";
import { BsFillBasket3Fill } from "react-icons/bs";
import LoginForm from "../FormControl/LoginForm";
import RegForm from "../FormControl/RegForm";
import { NavLink } from "react-router-dom";
import s from './header.module.css'
import DropDownItem from "./DropDownItem";

const HeaderNav = (props) => {
    const [show, setShow] = useState(false);
    const [reg, setReg] = useState(false);

    const setRegistr = (value) =>{
        setReg(value)
        props.setError()
    }

    const handleClose = () => {
        setShow(false)
        props.setError()
    }
    if (props.isAuth && show) {
        handleClose()
    }


    //expanded={false/true} on /off toggler lg for main navbar
    return (
        <>
            <Container style={{ marginBottom: "56px" }}>
                <Row>
                    <Col>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
                            {/* Logo home page */}
                            <NavLink className={s.otherLink} to={'/home'}>
                                <Navbar.Brand >
                                    <Logo alt="" width="30" height="30"
                                        className="d-inline-block align-top" />
                                    SkamMarcet
                                </Navbar.Brand>
                            </NavLink>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            {/* DropDown selector */}
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto" style={{ marginLeft: "10px" }}>
                                    <Nav.Link as="div"><div><NavLink className={s.accountLink} to={'/about'}>
                                        О нас</NavLink></div ></Nav.Link>
                                    <NavDropdown title="Товары" id="collasible-nav-dropdown">
                                        <DropDownItem name={"Футболки"} path={'/tshirt'} />
                                        <DropDownItem name={"Толстовки"} path={'/hoody'} />
                                        <DropDownItem name={"Custom"} path={'/custom'} />
                                        <NavDropdown.Divider />
                                        <DropDownItem name={"Мать матвея"} path={'/matmatveya'} />
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>

                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav className="mr-auto" style={{ marginLeft: "10px" }}>
                                    {/* Cart */}
                                    {!props.cart? null :
                                    <Nav.Link as="div" > <div><NavLink className={s.accountLink} to={'/corzina'}>
                                        <Badge bg="secondary">{props.cart.length}</Badge> <BsFillBasket3Fill size={20} />
                                        Корзина</NavLink></div ></Nav.Link>}
                                    {/* account or forms */}
                                    <Nav.Link as="div" >{props.isAuth ?
                                        <div><NavLink className={s.accountLink} to={'/account'}>
                                            Личный кабинет</NavLink></div >
                                        : <div className={s.cursor} onClick={setShow}>Регистрация/Вход</div>}</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>


                            {/* modal window  */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ marginRight: "40px" }}> {reg ? <div>Регистриция</div> : <div> Вход</div>}</Modal.Title>
                    {reg ? <Button variant="light" onClick={() => { setRegistr(false) }}>Войти</Button>
                        : <Button variant="light" onClick={() =>{setRegistr(true)}}>Создать аккаунт</Button>}
                </Modal.Header>
                {reg ? <RegForm errorMessage={props.errorMessage} /> : <LoginForm errorMessage={props.errorMessage} />}
            </Modal>
        </>
    );
}

export default HeaderNav;
