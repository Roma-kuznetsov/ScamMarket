import React from "react"
import { Col, Card,Button } from "react-bootstrap";
import ImagesCar from "../../images/git_hube.jpg"

// нужно будет вынести в отдельную компоненты и замапить 
const ProductsItem = (props) => {
    debugger
    return (
        <>
            <Col style={{ justifyContent:"center"}}>
                <Card  bg='dark' text='light' style={{ width: '17rem' ,margin:"auto" , marginBottom:"40px"  }}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.price}$</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.brand}</Card.Subtitle>
                        <Button variant="primary">Купить</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ProductsItem;

//{props.brand}