import React, { useState } from "react";
import "../../index.css";
import { Nav, Navbar, NavDropdown, Container, Row, Col ,Modal,Button,} from "react-bootstrap";
import { ReactComponent as Logo } from "../../logo.svg";
import { BsFillBasket3Fill } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import LoginForm from "../FormControl/LoginForm";
import RegForm from "../FormControl/RegForm";

export default function HeaderNav(props) {
    const [show, setShow] = useState(false);
    const [reg, setReg] = useState(false);

    const handleClose = () => setShow(false);

    let isAuth = false

    return (
        <>
            <Container style={{marginBottom:"56px"}}>
                <Row>
                    <Col>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                            <Navbar.Brand href="/home">
                                <Logo
                                    alt=""
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                                SkamMarcet
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto" style={{ marginLeft: "10px" }}>
                                    <Nav.Link href="AboutMe">О нас</Nav.Link>
                                    <NavDropdown title="Товары" id="collasible-nav-dropdown" bg="dark" variant="dark">
                                        <NavDropdown.Item href="/short">Футболки</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Толстовки</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Custom</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Мать матвея</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                                <Nav className="mr-auto" style={{ marginLeft: "10px" }}>
                                    <Navbar.Text >Сontacts: </Navbar.Text>
                                    <Nav.Link href="tel:+78142332211"> <CgPhone size={20} /> +7(814)-233-22-11</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav className="mr-auto" style={{ marginLeft: "10px" }}>
                                    <Nav.Link href="corzina" ><BsFillBasket3Fill size={20} /> Корзина</Nav.Link>
                                    <Nav.Link >{isAuth ? <div>Личный кабинет</div> 
                                    : <div onClick={setShow}>Регистрация/Вход</div>}</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{marginRight: "40px"}}> {reg? <div>Регистриция</div>: <div> Вход</div>}</Modal.Title>
                    {reg? <Button variant="light" onClick={()=>{setReg(false)}}>Перейти к входу</Button> 
                    : <Button variant="light" onClick={setReg}>Создать аккаунт</Button>}
                </Modal.Header>
                {reg? <RegForm />: <LoginForm />}
                <Modal.Footer>
                    <Button variant="primary" >
                    {reg? <div>Разегистрироваться</div>:<div>Войти</div>}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
