import React from "react"
import InBar from "../InBar";
import ProductsList from "../ProductsList";
import Sponsors from "../Sponsors";

const TshitrPage = () =>{
    return(
        <>
        <InBar />
        <Sponsors />
        <div style={{backgroudColor:"#282c34"}}>
            <ProductsList />
        </div>
        </>
    )
}

export default TshitrPage;