import { connect } from 'react-redux';
import React from 'react';
import TshitrPage from './Tshirt/TshitrPage';
import { getTovars, setCurrentPage,setItem } from "../../redux/ProductsReducer";

// контейнер для товаров футболки

class ContainerProducts extends React.Component {

    componentDidMount() {
        this.props.getTovars(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getTovars(pageNumber, this.props.pageSize);
    }

    select = (id) =>{
        this.props.setItem(id)
    }

    render() {
        return (
            <div>
                {document.location.pathname === "/short" ? <TshitrPage body={this.props.body}
                    onPageChanged={this.onPageChanged}
                    totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.props.setCurrentPage}
                    setItem={this.props.setItem}
                    selectedItem={this.props.selectedItem}
                    select = {this.select}/>
                    : <div>test</div>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        body: state.products.body,
        currentPage: state.products.currentPage,
        pageSize: state.products.pageSize,
        totalItemsCount: state.products.totalItemsCount,
        selectedItem:state.products.selectedItem
    }
}


export default connect(mapStateToProps,{ getTovars, setCurrentPage,setItem })(ContainerProducts);
