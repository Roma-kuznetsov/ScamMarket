import React from 'react';
import { Carousel,Container,Row,Col } from 'react-bootstrap';
import FirstSlide from "../../../images/FirstSlide.svg"
import SecondSlide from "../../../images/SecondSlide.svg"
import ThridSlide from "../../../images/ThridSlide.svg"
import "../../../index.css"



const TestComponent = () => {
    return (
        <Container style={{paddingTop:'60px'}}>
            <Row>
                <Col>
                <Carousel controls={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height:'30%'}}
                    src={FirstSlide}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{'height':'30%'}}
                    className="d-block w-100"
                    src={SecondSlide}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{'height':'30%'}}
                    className="d-block w-100"
                    src={ThridSlide}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
                </Col>
            </Row>
        </Container>
        
    )
}

export default TestComponent;