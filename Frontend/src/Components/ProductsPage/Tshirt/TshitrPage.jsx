import React from "react"
import InBar from "../InBar";
import Paginator from "../Paginator";
import ProductsList from "../ProductsList";
import Sponsors from "../Sponsors";

const TshitrPage = (props) =>{
    return(
        <>
        <InBar />
        <Sponsors />
        <ProductsList body={props.body}  />
        <Paginator />
        </>
    )
}

export default TshitrPage;