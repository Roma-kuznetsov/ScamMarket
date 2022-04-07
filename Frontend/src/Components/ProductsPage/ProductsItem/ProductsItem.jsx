import React from "react"
import { Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ButtonLike from "../../ButtonsFrarment/ButtonLike";

// нужно будет вынести в отдельную компоненты и замапить 
const ProductsItem = (props) => {
    return (
        <>
            <Col style={{ justifyContent: "center" }}>
                <Card bg='dark' text='light' style={{ width: '17rem', margin: "auto", marginBottom: "40px" }}>
                    <Card.Img variant="top" src={`http://localhost:3001/${props.image}`} style={{ height: '17rem' }} />
                    <Card.Body>
                        <Card.Title>{props.price}$</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.brand}</Card.Subtitle>
                        <NavLink to={`/products/${props.id}`}><Button variant="primary">Купить</Button></NavLink>
                        {props.favorites === undefined ? null:
                        <ButtonLike idUser={props.idUser} addFavThunk={props.addFavThunk} 
                        favorites={props.favorites} id={props.id} /> }
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}


export default ProductsItem;
