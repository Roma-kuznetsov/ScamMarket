import React from "react"
import { Container, Row } from "react-bootstrap";
import ProductsItem from "./ProductsItem/ProductsItem";


const ProductsList = (props) => {
    return (
        <div style={{ paddingTop: "50px" }}>
            <Container>
                <Row>
                    {props.body.map(p => <ProductsItem price={p.price} image={p.picture}
                        brand={p.brand} key={p._id} id={p._id}
                        setItem={props.setItem}
                        select={props.select}
                        favorites={props.favorites}
                        addFavThunk={props.addFavThunk}
                        idUser={props.idUser} />)}
                </Row>
            </Container>
        </div>
    )
}

export default ProductsList;