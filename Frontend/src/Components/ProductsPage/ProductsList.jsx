import React from "react"
import { Container, Row } from "react-bootstrap";
import ProductsItem from "./ProductsItem";
import { Route, Routes} from 'react-router-dom';
import { BsList } from "react-icons/bs";

// переделать с появлением сервера или redux 
let i = 1;
let idProd = []
while (i < 17) {
    idProd.push(i)
    i++
}


const ProductsList = (props) => {

    const list = props.body.map(p => <ProductsItem price={p.price} image={p.picture} brand={p.brand} key={p.id} />);

    return (
        <div style={{ paddingTop: "50px" }}>
            <Container>
                <Row>
                    {list}
                </Row>
            </Container>
        </div>
    )
}

export default ProductsList;