import React from "react"
import { Container, Row} from "react-bootstrap";
import astra from "../../images/Sponsors/ad-astra-seeklogo.com-3.svg"
import adidas from "../../images/Sponsors/adidas-originals-seeklogo.com.svg"
import asics from "../../images/Sponsors/asics-seeklogo.com.svg"
import nike from "../../images/Sponsors/nike-react-seeklogo.com.svg"
import stone from "../../images/Sponsors/stone-island-com-seeklogo.com.svg"
import SponsorItem from "./SponsorItem";

// component branding display 
const Sponsors = () => {

    let listBrand =[astra,adidas,asics,nike,stone]
    return (
        <>
            <Container style={{marginBottom:"40px",marginTop:"100px"}}>
                <Row>
                    {listBrand.map((brand) => <SponsorItem key={brand} brand={brand} />)}
                </Row>
            </Container>
        </>
    )
}

export default Sponsors;