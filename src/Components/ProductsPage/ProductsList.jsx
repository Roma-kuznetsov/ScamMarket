import React from "react"
import { Container, Row} from "react-bootstrap";
import ProductsItem from "./ProductsItem";

// нужно будет вынести в отдельную компоненты и замапить 
let i = 1;
let idProd =[]
while (i < 41){
    idProd.push(i)
    i++
}
const listItems = idProd.map((id) =>
    <ProductsItem key={id} />
);


const ProductsList = () => {
    return (
        <div style={{ paddingTop:"50px"}}>
            <Container>
                <Row>
                    {idProd.map((id) => <ProductsItem key={id} brand={"Nike"} />)}
                </Row>
            </Container>
        </div>
    )
}

export default ProductsList;