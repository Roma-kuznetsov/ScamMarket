import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import s from "../Corzina/Corzine.module.css"
import { NavLink } from 'react-router-dom';


const WigetYandex = (props) => {
    let totalCount = props.cart
        .map(i => i.price * i.count)
        .reduce((prev, curr) => prev + curr, 0);
    return (
        <Container>
            <Row>
                <div className={s.pred}>Как оказалось чтоб подключить карту ТК нужно быть юр.лицом так что вот яндекс карта</div>
                <div className={s.map}>
                    <YMaps>
                        <Map height={500} width={800} defaultState={{ center: [56.34, 37.573856], zoom: 9 }}>
                            <Placemark
                                modules={['geoObject.addon.balloon']}
                                defaultGeometry={[56.342711, 37.529305]}
                                properties={{
                                    balloonContentBody:
                                        'Я здесь',
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
            </Row>
            <Row>
                <Col>
                    <div className={s.pred}>Итоговая стоимость заказа {totalCount}$</div>
                    <div className={s.pred}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Введите адресс</Form.Label>
                                <Form.Control type="text" placeholder="Страна/Город/Улица/Дом/Квартира" />
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={s.pred}>Выберите способ оплаты: </div>
                    <div className={s.radioGroup}>
                        <Form>
                            <Form.Check
                                name='body'
                                type='radio'
                                id='10r'
                                label='Фантики'
                                checked={props.variant === 1}
                                onChange={() => { props.setVariant(1) }} />
                            <Form.Check
                                name='body'
                                type='radio'
                                id='12r'
                                label='Листики'
                                checked={props.variant === 2}
                                onChange={() => { props.setVariant(2) }} />
                            <Form.Check
                                name='body'
                                type='radio'
                                id='13r'
                                label='Чеканные монеты'
                                checked={props.variant === 3}
                                onChange={() => { props.setVariant(3) }} />
                        </Form>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={s.radioGroup}>
                        <NavLink to='/scam'><Button onClick={() => { props.clearCartThunk(props.id) }}>
                            Оплатить</Button></NavLink>
                    </div>
                </Col>
            </Row>
        </Container >
    )
};

export default WigetYandex;