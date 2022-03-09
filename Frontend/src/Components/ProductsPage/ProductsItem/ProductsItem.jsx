import React from "react"
import { Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// нужно будет вынести в отдельную компоненты и замапить 
const ProductsItem = (props) => {
    debugger
    const yseSetItem = (id) =>{
        props.select(id)
    }

    return (
        <>
            <Col style={{ justifyContent: "center" }}>
                <Card bg='dark' text='light' style={{ width: '17rem', margin: "auto", marginBottom: "40px" }}>
                    <Card.Img variant="top" src={props.image} style={{ height: '17rem' }} />
                    <Card.Body>
                        <Card.Title>{props.price}$</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.brand}</Card.Subtitle>
                        <Button variant="primary" href={`/products/${props.id}`}>Купить</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
//onClick={() => { yseSetItem(props.id) }}
//href={'/short/'+ props.id}
export default ProductsItem;
//onClick={props.setItem(props.id)}
//{props.brand}