import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Account = (props) =>{
    return(
        <Container>
            <Row>
                <Col>
                <Button variant="primary" onClick={()=>{props.logout()}}>Выйти из аккаунта</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Account;