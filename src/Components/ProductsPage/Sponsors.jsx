import React from "react"
import { Container, Row, Col, Figure,Card } from "react-bootstrap";
import astra from "../../images/Sponsors/ad-astra-seeklogo.com-3.svg"
import adidas from "../../images/Sponsors/adidas-originals-seeklogo.com.svg"
import asics from "../../images/Sponsors/asics-seeklogo.com.svg"
import nike from "../../images/Sponsors/nike-react-seeklogo.com.svg"
import stone from "../../images/Sponsors/stone-island-com-seeklogo.com.svg"

// нужно будет вынести в отдельную компоненты и замапить 
const Sponsors = () => {
    return (
        <>
            <Container style={{marginBottom:"40px"}}>
                <Row>
                    <Col style={{ justifyContent: "center" }}>
                        <Card border="light" style={{ width: '11rem',margin: "auto" }}>
                            <Card.Img variant="top" src={astra}  style={{height:"10rem"}}/>
                        </Card>
                    </Col>
                    <Col style={{ justifyContent: "center" }}>
                        <Card border="light" style={{ width: '11rem' ,margin: "auto"}}>
                            <Card.Img variant="top" src={adidas} style={{height:"10rem"}} />
                        </Card>
                    </Col>
                    <Col style={{ justifyContent: "center" }}>
                        <Card border="light" style={{ width: '11rem',margin: "auto" }}>
                            <Card.Img variant="top" src={asics} style={{height:"10rem"}}/>
                        </Card>
                    </Col>
                    <Col style={{ justifyContent: "center" }}>
                        <Card border="light" style={{ width: '11rem',margin: "auto" }}>
                            <Card.Img variant="top" src={nike} style={{height:"10rem"}}/>
                        </Card>
                    </Col>
                    <Col style={{ justifyContent: "center" }}>
                        <Card border="light" style={{ width: '11rem',margin: "auto" }}>
                            <Card.Img variant="top" src={stone} style={{height:"10rem"}}/>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Sponsors;