import React, { useState, useRef } from "react";
import { Container, Row, Col, Card, Button, Overlay } from "react-bootstrap";
import SelectedSizeItem from "./selectedSize";
import s from './oneProd.module.css'
import ButtonLike from "../../ButtonsFrarment/ButtonLike";
import Preloader from "../../ButtonsFrarment/Preloader";
const OneProdPage = (props) => {
    const [size, setSize] = useState(null);
    const [count, setCount] = useState(1)
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const nullCount = (inputSize) => {
        if (size !== inputSize) {
            setSize(inputSize)
            setCount(1)
        }
    }

    const buttonMinCount = () => {
        if (count === 1) {
            return false
        } else {
            setCount(count - 1)
        }
    }

    const buttonMaxCount = () => {
        if (count >= props.selectedItem[`${size}Count`]) {
            setCount(props.selectedItem[`${size}Count`])
        } else {
            setCount(count + 1)
        }
    }

    const buttonSubmit = (idUser, itemId, size, count, price, picture) => {
        if (size === null || size === 'Вам нужно выбрать размер') {
            setSize('Вам нужно выбрать размер')
        } else {
            props.addCartThunk(idUser, itemId, size, count, price, picture)
            setShow(true)
            setTimeout(() => { setShow(false) }, 1000)
        }
    }

    return (
        <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col sm={12} xxl={4} lg={5} md={6} >
                    <Card style={{ width: '18rem', margin: 'auto' }}>

                        {props.selectedItem.picture ?
                            <Card.Img variant="top" src={`https://backend-production-2ee6.up.railway.app/${props.selectedItem.picture}`}
                                style={{ height: "18rem" }} />
                            : <div style={{ height: "18rem" }}><Preloader /></div>}
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
                        <SelectedSizeItem selectedItem={props.selectedItem} setSize={nullCount} />
                    </div>
                    <div>
                        В наличии {props.selectedItem[`${size}Count`]}
                    </div>
                    {!props.favorites ? <div>Чтобы добавлять товары в корзину и избранное зарегистрируйтесь или войдите</div> :
                        <div className={s.flex}>
                            <Button variant="primary" onClick={() => buttonMinCount()}>-</Button>
                            <div className={s.count}>
                                {count}
                            </div>
                            <Button variant="primary" onClick={() => buttonMaxCount()}>+</Button>

                            <Button variant="primary" ref={target} onClick={() => {
                                buttonSubmit(props.idUser, props.selectedItem._id, size,
                                    count, props.selectedItem.price, props.selectedItem.picture)
                            }}>Add to cart
                            </Button>
                            <Overlay target={target.current} show={show} placement="bottom">
                                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                    <div {...props} style={{
                                            position: 'absolute',
                                            backgroundColor: 'rgba(0,255,98,0.75)',
                                            padding: '2px 10px',
                                            color: 'black',
                                            borderRadius: 3,
                                            ...props.style,
                                        }}>
                                        Добавлено в корзину
                                    </div>
                                )}
                            </Overlay>

                            <ButtonLike inProcces={props.inProcces} idUser={props.idUser} addFavThunk={props.addFavThunk}
                                favorites={props.favorites} id={props.selectedItem._id} />
                        </div>}
                </Col>
            </Row>
        </Container>
    )
}

export default OneProdPage;







