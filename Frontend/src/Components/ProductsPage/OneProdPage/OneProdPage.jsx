import React from "react";
import { Container, Row, Col} from "react-bootstrap";
const OneProdPage = (props) => {
    debugger
    console.log('rerender')
    console.log(props)
    console.log(props.selectedItem.price)
    return (
        <Container>
            <Row>
                <Col sm={4}><img src={props.selectedItem.picture} alt="" /></Col>
                <Col sm={8}>11111</Col>
            </Row>
            
        </Container>
    )
}

export default OneProdPage;