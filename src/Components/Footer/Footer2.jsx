import React from "react";
import { Container, Row, Col,Card,Nav } from "react-bootstrap";
import { CgPhone} from "react-icons/cg";
import { GrYoutube } from "react-icons/gr";

const Footer2 = () => {
    return (
        <>
        <Container style={{backgroudColor:'#fff' , marginTop: '50px', marginBottom:'30px'}}>
            <Row>
                <Col>
                    <Card  border="light" style={{ width: '18rem' , margin: "auto"}}>
                        <Card.Body>
                            <Card.Title>Доставка</Card.Title>
                            <ul className="list-unstyled">
                                <li> <Nav.Link  href="#"> Доставка по России</Nav.Link></li>
                                <li> <Nav.Link  href="#"> Доставка в страны СНГ</Nav.Link></li>
                                <li> <Nav.Link  href="#"> Условия доставки</Nav.Link></li>
                                <li> <Nav.Link  href="#"> Доставка стронними </Nav.Link></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="light" style={{ width: '18rem',margin: "auto" }}>
                        <Card.Body>
                            <Card.Title>О нас</Card.Title>
                            <ul className="list-unstyled">
                                <li> <Nav.Link  href="#"> Вакансии</Nav.Link></li>
                                <li> <Nav.Link  href="#"> Сертификаты ScamMarket</Nav.Link></li>
                                <li> <Nav.Link  href="#"> Стать спонсором</Nav.Link></li>
                                <li> <Nav.Link  href="#"> Условия оферы</Nav.Link></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="light" style={{ width: '18rem',margin: "auto" }}>
                        <Card.Body>
                            <Card.Title>Обратная связь</Card.Title>
                            <ul className="list-unstyled">
                                <li> <Nav.Link  href="#"> Ответы на часто задаваемые вопросы</Nav.Link></li>
                                <li> <Nav.Link  href="#"> Служба поддержки</Nav.Link></li>
                                <li> <Nav.Link  href="tel:+78142332211"> <CgPhone size={20} /> +7(814)-233-22-11</Nav.Link></li>
                                <li> <Nav.Link  href="#"> <GrYoutube size={20} /> YouTube</Nav.Link></li>
                                <li> <Nav.Link  href="#"> FAQ</Nav.Link></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{backgroundColor:"#212529",color:"#fff"}}>
            <Container style={{display:"flex" , justifyContent:"center", padding:"5px" }}>
                <p> ScamMarket 2022</p>
            </Container>
        </Container>
        </>
    )
}

export default Footer2;