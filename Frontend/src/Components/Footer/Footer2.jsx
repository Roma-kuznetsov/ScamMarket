import React from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { CgPhone } from "react-icons/cg";
import { GrYoutube } from "react-icons/gr";
import FooterLink from "../ButtonsFrarment/FooterLink"

const Footer2 = () => {
    return (
        <>
            <Container style={{ backgroudColor: '#fff', marginTop: '50px', marginBottom: '30px' }}>
                <Row>
                    <Col>
                        <Card border="light" style={{ width: '18rem', margin: "auto" }}>
                            <Card.Body>
                                <Card.Title>Доставка</Card.Title>
                                <ul className="list-unstyled">
                                    <FooterLink name={'Доставка по России'} />
                                    <FooterLink name={'Доставка в страны СНГ'} />
                                    <FooterLink name={'Условия доставки'} />
                                    <FooterLink name={'Доставка стронними'} />
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" style={{ width: '18rem', margin: "auto" }}>
                            <Card.Body>
                                <Card.Title>О нас</Card.Title>
                                <ul className="list-unstyled">
                                    <FooterLink name={'Вакансии'} />
                                    <FooterLink name={'Сертификаты ScamMarket'} />
                                    <FooterLink name={'Стать спонсором'} />
                                    <FooterLink name={'Условия оферы'} />
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" style={{ width: '18rem', margin: "auto" }}>
                            <Card.Body>
                                <Card.Title>Обратная связь</Card.Title>
                                <ul className="list-unstyled">
                                    <FooterLink name={'Ответы на часто задаваемые вопросы'} />
                                    <FooterLink name={'Служба поддержки'} />
                                    <li> <Nav.Link href="tel:+78142332211"> <CgPhone size={20} /> +7(814)-233-22-11</Nav.Link></li>
                                    <li> <Nav.Link target="_blank" href="https://youtu.be/gb7gMluAeao">
                                        <GrYoutube size={20} /> YouTube</Nav.Link></li>
                                    <FooterLink name={'FAQ'} />
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ backgroundColor: "#212529", color: "#fff" }}>
                <Container style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                    <p> ScamMarket 2022</p>
                </Container>
            </Container>
        </>
    )
}

export default Footer2;