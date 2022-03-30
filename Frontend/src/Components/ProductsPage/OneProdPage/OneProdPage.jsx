import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SelectedSizeItem from "./selectedSize";
import s from './oneProd.module.css'
import ButtonLike from "../../ButtonsFrarment/ButtonLike";
import Preloader from "../../ButtonsFrarment/Preloader";
const OneProdPage = (props) => {
    const [size, setSize] = useState(null);

    const buttonSubmit = (idUser, itemId, size) => {
        if (size === null || size === 'Вам нужно выбрать размер') {
            setSize('Вам нужно выбрать размер')
        }else{
            props.addCartThunk(idUser, itemId, size)
        }
        
    }
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
                    <div className={s.price}>Size: {size}
                        <SelectedSizeItem selectedItem={props.selectedItem} setSize={setSize} />
                    </div>
                    {!props.favorites ? <div>Чтобы добавлять товары в корзину и избранное зарегистрируйтесь или войдите</div> :
                        <Button variant="primary" onClick={() => {buttonSubmit(props.idUser, props.selectedItem._id, size) }}>
                            Add to cart</Button>}

                    {!props.favorites ? null :
                        <ButtonLike idUser={props.idUser} addFavThunk={props.addFavThunk}
                            favorites={props.favorites} id={props.selectedItem._id} />}
                </Col>
            </Row>
        </Container>
    )
}
export default OneProdPage;