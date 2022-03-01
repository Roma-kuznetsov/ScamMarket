import React from "react"
import InBar from "../InBar";
import Paginator from "../Paginator";
import ProductsList from "../ProductsList";
import Sponsors from "../Sponsors";

const TshitrPage = (props) =>{

    const pageCount = Math.ceil(props.totalItemsCount / props.pageSize)
    return(
        <>
        <InBar />
        <Sponsors />
        <ProductsList body={props.body}  />
        <Paginator onPageChanged={props.onPageChanged} pageCount={pageCount} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage}/>
        </>
    )
}

export default TshitrPage;