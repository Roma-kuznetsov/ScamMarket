import React from "react"
import InBar from "../InBar";
import Paginator from "../Paginator";
import ProductsList from "../ProductsList";
import Sponsors from "../Sponsors";

const TshitrPage = (props) => {
    const pageCount = Math.ceil(props.totalItemsCount / props.pageSize)
    return (
        <>
            <InBar />
            <Sponsors />
            <ProductsList idUser={props.idUser} addFavThunk={props.addFavThunk} favorites={props.favorites} body={props.body} setItem={props.setItem} selectedItem={props.selectedItem} select={props.select} />
            <Paginator onPageChanged={props.onPageChanged} pageCount={pageCount} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
        </>
    )
}

export default TshitrPage;