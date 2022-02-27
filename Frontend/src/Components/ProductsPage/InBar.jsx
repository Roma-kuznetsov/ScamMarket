import React from "react"
import { Container, Nav, Row, Col } from "react-bootstrap";

const InBar = () => {
    return (
        <>
            <Container style={{marginTop:"100px"}}>
                <Row>
                    <Col>
                        <Nav
                            activeKey="/home"
                            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        >
                            <Nav.Item>
                                <Nav.Link href="/home">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-3" >Disabled</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-4" >Sale%</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InBar;