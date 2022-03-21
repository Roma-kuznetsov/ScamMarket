import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SelectedSizeItem from "./selectedSize";
import s from './oneProd.module.css'
import ButtonLike from "../../ButtonsFrarment/ButtonLike";
import Preloader from "../../ButtonsFrarment/Preloader";
const OneProdPage = (props) => {
    return (
        <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col sm={12} xxl={4} lg={5} md={6} >
                    <Card style={{ width: '18rem', margin: 'auto' }}>
                        {props.isFaching ? <div style={{ height: "18rem" }}><Preloader /></div> :
                            <Card.Img variant="top" src={props.selectedItem.picture} style={{ height: "18rem" }} />
                        }

                    </Card>
                </Col>

                <Col sm={12} xxl={8} lg={7} md={6}>
                    {props.selectedItem._id}
                    <div className={s.line}></div>
                    <div className={s.text}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse molestiae necessitatibus eum tenetur delectus velit, consequuntur exercitationem aperiam illum repudiandae nesciunt maxime obcaecati veniam ipsam quod nam modi iste aspernatur.
                    </div>
                    <div className={s.line}></div>
                    <div className={s.price}>Price: {props.selectedItem.price}$</div>
                    <div className={s.price}>Sizes:
                        <SelectedSizeItem selectedItem={props.selectedItem} />
                    </div>
                    <Button variant="primary">Add to cart</Button>
                    <ButtonLike favorites={props.favorites} id={props.selectedItem._id} />
                </Col>
            </Row>
        </Container>
    )
}
export default OneProdPage;