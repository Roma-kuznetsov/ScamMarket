import React from "react"
import InBar from "../InBar";
import Paginator from "../Paginator";
import ProductsList from "../ProductsList";
import Sponsors from "../Sponsors";
import FavoritsNull from "../../ButtonsFrarment/FavoritsNull"

const TshitrPage = (props) => {
    const pageCount = Math.ceil(props.totalItemsCount / props.pageSize)
    return (
        <>
            <InBar />
            <Sponsors /> 
            <ProductsList idUser={props.idUser} addFavThunk={props.addFavThunk} 
            favorites={props.favorites} body={props.body} setItem={props.setItem} 
            selectedItem={props.selectedItem} select={props.select} />
            
            {pageCount > 1? 
            <Paginator onPageChanged={props.onPageChanged} pageCount={pageCount} 
            currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
            : null}
        </>
    )
}

export default TshitrPage;